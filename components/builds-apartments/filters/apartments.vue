<template>
  <div>
    <div class="mobile_none">
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
            <option :value="null">Все</option>
            <option v-for="item in buildings" :value="item">{{item}}</option>
          </select>
        </label>
        <div>
          <p class="label-title">количество комнат</p>
          <div class="room-count-box">
            <button @click="rooms === 1 ? rooms = 0 : rooms = 1" :class="{'room-count-box__button--active': 1 === rooms}" class="room-count-box__button">1</button>
            <button @click="rooms === 2 ? rooms = 0 : rooms = 2" :class="{'room-count-box__button--active': 2 === rooms}" class="room-count-box__button">2</button>
            <button @click="rooms === 3 ? rooms = 0 : rooms = 3" :class="{'room-count-box__button--active': 3 === rooms}"  class="room-count-box__button">3</button>
            <button @click="rooms = null" :class="{'room-count-box__button--active': null === rooms}" class="room-count-box__button">4+</button>
          </div>
        </div>
        <label class="price-label">
          <p class="label-title">Стоимость со скдикой</p>
          <input v-model="price" class="price-input" type="tel">
          <p class="at">до</p>
          <p class="valuta">₸</p>
        </label>
        <h3 class="project-counts">Кол-во объектов: {{projectsCount.length}}</h3>
      </div>
    </div>
    <div class="desktop_none">
      <details >
        <summary>
          <span class="summary-title">Фильтры</span>
          <div class="summary-chevron-up">
            <svg
              class="feather feather-chevron-down"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 9.58579L13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289C15.0976 4.68342 15.0976 5.31658 14.7071 5.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071L1.29289 5.70711C0.902369 5.31658 0.902369 4.68342 1.29289 4.29289C1.68342 3.90237 2.31658 3.90237 2.70711 4.29289L8 9.58579Z"
                fill="#004B94"
              />
            </svg>
          </div>
        </summary>

        <div class="summary-content">
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
                <option :value="null">Все</option>
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
            <h3 class="project-counts">Кол-во объектов: {{projectsCount.length}}</h3>
          </div>
        </div>
        <div class="summary-chevron-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-up"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
      </details>
    </div>
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
    this.$emit('defaultLimit')
    this.filtering()

  },
  builds: function(){
    this.$emit('defaultLimit')
    this.filtering()
  },
  rooms: function(){
    this.$emit('defaultLimit')
    this.filtering()
  },
    price: function(){
      this.$emit('defaultLimit')
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
          return (+item.rooms) >= 4
        }else{
          return (+item.rooms) === (+this.rooms)
        }
      })
      const price = room.filter(item => {
        if(this.price){
          return item.price <= (+this.price)
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
.label-title{
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;

}
.filter-box{
  display: grid;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
  text-align: center;
  justify-content: center;
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


details {
  font-size: 16px;
  margin: auto auto 0.25rem auto;
  background: white;
  position: relative;
  width: 100%;
  border: 1px solid #6a98c5;
  box-sizing: border-box;
  box-shadow: 0px 4px 24px rgba(3, 46, 65, 0.12);
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    margin: auto auto 0.25rem auto;
    border-radius: 8px;
  }
  .summary-title {
    font-weight: normal;
    font-size: 16px;
    user-select: none;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  &:hover {
    cursor: pointer;
  }
  .summary-content {
    cursor: default;
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
  summary {
    padding: 1.2rem 2.4rem;
    &:focus {
      outline: none;
    }
    &:hover .summary-chevron-up svg {
      opacity: 1;
    }
  }
  .summary-chevron-up svg {
    opacity: 0.5;
  }
  .summary-chevron-up,
  .summary-chevron-down {
    pointer-events: none;
    position: absolute;
    top: 20px;
    right: 1rem;
    background: white;
    svg {
      display: block;
    }
  }
  summary::-webkit-details-marker {
    display: none;
  }
}
</style>
