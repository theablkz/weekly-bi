<template>
  <div class="grid">
    <div class="grid-col_1-11 filter-tab-box">
      <h4
        @click="filterTab = null"
        class="filter-tabs"
        :class="{ 'filter-tabs--active': filterTab === null }"
      >
        Все предложения
      </h4>
      <h4
        class="filter-tabs"
        v-for="item in filters"
        @click="filterTab = item"
        :class="{ 'filter-tabs--active': filterTab === item }"
      >
        {{ allOffers[item].name }}
      </h4>
    </div>
    <div class="grid-col_1-11">
      <buidls-apartments v-for="(item, index) in filteredOffers" :apartments="item" :key="item.name" :name="index" />
    </div>
  </div>
</template>

<script>
import BuidlsApartments from '@/components/builds-apartments'
export default {
  name: 'filter-builds',
  components: { BuidlsApartments },
  data: () => ({
    filterTab: null,
  }),
  props: ['builds'],
  computed: {
    filters() {
      return Object.keys(this.builds.allOffers)
    },
    allOffers() {
      return this.builds.allOffers
    },
    filteredOffers() {
      return this.filterTab ? {[this.filterTab]: this.allOffers[this.filterTab]}  : this.allOffers
    },
  },
}
</script>

<style lang="scss" scoped>
.filter-tab-box {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  overflow: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  .filter-tabs {
    white-space: nowrap;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    padding: 0 1rem;
    line-height: 2;
    user-select: none;
    cursor: pointer;
    &--active {
      color: #004b94;
      font-weight: bold;
      border-bottom: 3px solid #004b94;
    }
  }
}
</style>
