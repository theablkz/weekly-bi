<template>
  <div class="filter-box">
    <label >
      <p class="label-title">город</p>
      <select v-model="city" name="">
        <option selected value="Нур-Султан">Нур-Султан</option>
        <option value="Алматы">Алматы</option>
      </select>
    </label>
    <label >
      <p class="label-title">ЖК</p>
      <select v-model="builds" name="">
        <option :value="null">все</option>
        <option value="President’s Park">President’s Park</option>
        <option value="Crocus City">Crocus City</option>
      </select>
    </label>
    <h3 class="project-counts">{{projectsCount.length}} проекта</h3>
  </div>
</template>

<script>
export default {
  name: "offices",
  data: () => ({
    city: 'Нур-Султан',
    builds: null,
    rooms: 0,
    price: null,
    projectsCount: []
  }),
  watch: {
    city: function(){
      this.filtering()
    },
    builds: function(){
      this.filtering()
    },
    rooms: function(){
      this.filtering()
    },
    price: function(){
      this.filtering()
    }
  },
  props: ['apartments'],
  methods: {
    filtering(){
      const fill = this.apartments.offers.filter(item => (item.city === this.city) && (this.builds ? this.builds === item.buildName : true))

      this.$emit('filtered', fill)
    }
  },

  created() {
    const createdFilter = this.apartments.offers.filter(item => (item.city === this.city))
    this.projectsCount = createdFilter
    this.$emit('filtered', createdFilter)
  }
}
</script>

<style lang="scss" scoped>
.filter-box{
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1.6rem;
  @media (max-width: 768px){
    display: grid;
    grid-template-columns: 1fr;
  }
}
.price-label{
  position: relative;
  .at{
    position: absolute;
    bottom: 16px;
    left: 16px;
  }
  .valuta{
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
  input{
    padding: 0 4rem;
  }
}
.project-counts{
  background: #004B94;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  height: 48px;
  display: flex;
  align-items: center;padding: 0 1.6rem;
}

.room-count-box{
  display: grid;
  grid-template-columns: repeat(4, 50px);
  gap: 6px;
  .room-count-box__button{
    height: 48px;
    padding: 0;
    background: #F4F5F7;
    border-radius: 8px;
    font-weight: 500;
    font-size: 18px;
    color: #01152C;
    &--active{
      background: #004B94;
      color: white;
    }
  }
}
</style>
