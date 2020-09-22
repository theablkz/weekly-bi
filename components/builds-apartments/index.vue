<template>
  <div class="indent-block">
    <div class="indent-block">
      <h1 class="indent_bottom-h3">{{apartments.name}}</h1>

      <div class="indent_bottom-h2">
        <component :is="componentFilter" :apartments="apartments" @filtered="filtered"/>
      </div>
      <div class="apartments">
        <div class="apartments-apartment" v-for="item in filteredApartments">
          <div class="apartment-image-box">
            <img class="apartment-image" :src="item.schemaImage" alt="">
            <div class="apartment-image-des">
              <p class="apartments-count">{{item.offersLeft.count}}</p>
              <p>{{item.offersLeft.title}}</p>
            </div>
          </div>
          <h3 class="apartments-title">{{item.buildName}}</h3>
          <p class="apartments-address">{{item.address}}</p>
          <div class="price-description">
            <div>
              <h3 :style="{color: '#E18438'}">{{item.priceMWithDiscount}}</h3>
              <small>за м² со скидкой</small>
            </div>
            <div>
              <h3 :style="{color: '#999999', textDecoration: 'line-through'}">{{item.priceMWithoutDiscount}}</h3>
              <small>за м² без скидки</small>
            </div>
            <div>
              <h3 :style="{color: '#345086'}">{{item.endOfStock.value}}</h3>
              <small>{{item.endOfStock.title}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-col_1-11">
      <whatsapp />
    </div>
  </div>
</template>

<script>
import Apartments from '@/components/builds-apartments/filters/apartments'
import Offices from '@/components/builds-apartments/filters/offices'
import Whatsapp from '@/components/whatsapp'
const filterComponents = {
  'apartments': Apartments,
  'offices': Offices
}
export default {
name: "index",
  components: { Whatsapp },
  props: ['apartments', 'name'],
  data: () => ({
    filteredApartments: []
  }),
  computed: {
    componentFilter(){
      return filterComponents[this.name]
    }
  },
  methods: {
    filtered(val){
      this.filteredApartments = val
    }
  }
}
</script>

<style lang="scss" scoped>
.indent-block{
  margin-bottom: 8rem;
}
.apartments{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  .apartments-apartment{
    .apartment-image-box{
      position: relative;
      height: 208px;
      margin-bottom: 1.4rem;
      .apartment-image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
      .apartment-image-des{
        position: absolute;
        top: 1.6rem;
        left: 1.6rem;
        background: #FFFFFF;
        border-radius: 28px;
        display: flex;
        align-items: center;
        padding: 0 1rem 0 0;

        .apartments-count{
          background: #363636;
          border: 1px solid #FFFFFF;
          box-sizing: border-box;
          border-radius: 28px;
          width: 3.5rem;
          line-height: 2;
          color: white;
          font-size: 14px;
          margin-right: 8px;
          text-align: center;
        }
      }
    }
    .apartments-title{
      font-weight: bold;
      font-size: 20px;
      color: #01152C;
    }
    .apartments-address{
      font-size: 14px;
      line-height: 16px;
      color: #4F4F4F;
      margin-bottom: 1.6rem;
    }
    .price-description{
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .apartments-apartment{
      .price-description{
        grid-template-columns: auto auto;
      }
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

</style>
