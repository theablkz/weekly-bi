<template>
  <div class="filter-box">
    <label >
      <p class="label-title">город</p>
      <select v-model="city" name="">
        <option v-for="item in cities" :value="item">{{item}}</option>
      </select>
    </label>
    <label >
      <p class="label-title">ЖК</p>
      <select v-model="builds" name="">
        <option :value="null">все</option>
        <option v-for="item in buildings" :value="item">{{item}}</option>
      </select>
    </label>
    <div>
      <p class="label-title">количество комнат</p>
      <div class="room-count-box">
        <button @click="rooms = 1" :class="{'room-count-box__button--active': 1 === rooms}" class="room-count-box__button">1</button>
        <button @click="rooms = 2" :class="{'room-count-box__button--active': 2 === rooms}" class="room-count-box__button">2</button>
        <button @click="rooms = 3" :class="{'room-count-box__button--active': 3 === rooms}"  class="room-count-box__button">3</button>
        <button @click="rooms = null" :class="{'room-count-box__button--active': null === rooms}" class="room-count-box__button">4+</button>
      </div>
    </div>
    <label class="price-label">
      <p class="label-title">Стоимость со скдикой</p>
      <input v-model="price" class="price-input" type="tel">
      <p class="at">до</p>
      <p class="valuta">₸</p>
    </label>
    <h3 class="project-counts">{{projectsCount.length}} проекта</h3>
  </div>
</template>

<script>
export default {
name: "apartments",
  data: function(){
  return {
    city: '',
    builds: null,
    rooms: 0,
    price: null,
    projectsCount: []
  }
  },
  watch: {
  city: function(){
    this.builds = null
    this.rooms = 0
    this.price = null
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
  computed: {
    cities(){
      const cities = [...new Set(this.apartments.offers.map(item => item.city))]
      return cities
    },
    buildings(){
      return [...new Set(this.apartments.offers.filter(item => this.city === item.city).map(item => item.buildName))]
    },
  },
  methods: {
    filtering(){
      const fill = this.apartments.offers.filter(item => (item.city === this.city) && (this.builds ? this.builds === item.buildName : true))
      const room = fill.filter(item => {
        if(this.rooms === 0){
          return true
        }else if(this.rooms === null){
          console.log('null')
          return (+item.rooms) >= 4
        }else{
          console.log('this.rooms', item.rooms)
          return (+item.rooms) === (+this.rooms)
        }
      })
      const price = room.filter(item => {
        if(this.price){
          return item.discountedPriceInt >= (+this.price)
        }else{
          return true
        }
      })
      this.projectsCount = price
      this.$emit('filtered', price)
    }
  },

  created() {
    const cities = [...new Set(this.apartments.offers.map(item => item.city))]
    this.city = cities[0]
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
