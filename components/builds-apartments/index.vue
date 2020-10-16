<template>
  <div class="">
    <div class="build-apartments">
      <div class="build-apartments-name">
        <h1 class="build-apartments-name-text">{{ apartments.name }}</h1>
      </div>
      <h1 class="indent_bottom-h3">{{ apartments.name }}</h1>

      <div class="indent_bottom-h2">
        <component
          :is="componentFilter"
          :apartments="apartments"
          @filtered="filtered"
          @defaultLimit="limitView = 6"
        />
      </div>
      <div class="apartments">
        <div class="apartments-apartment" v-for="item in limitedView">
          <nuxt-link class="offer-link" :to="`/offer/${item.id}`">
            <div class="apartment-image-box">
              <img
                @error="( e ) => e.target.src = 'https://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-small.png'"
                class="apartment-image"
                :src="`${ name === 'apartments' ? `http://offersapi.bi.group/img/${item.schemaImage}` : item.queue.real_estate.photo }`"
                :style="{objectFit: name === 'apartments' ? 'contain' : 'cover'}"
                alt=""
              />
              <div v-if="item.count" class="apartment-image-des">
                <p class="apartments-count">{{item.count}}</p>
                <p style="color: #4F4F4F;">{{leftCountsText(item.flatType)}}</p>
              </div>
            </div>
            <h3 class="apartments-title">{{ item.queue.name }}</h3>
          </nuxt-link>
          <p class="apartments-address">{{ item.queue.address }}</p>
          <div class="price-description">
            <div>
              <h3 :style="{ color: '#E18438' }">
                {{ item.discountedPrice || item.price | currencyFormat }}
              </h3>
              <small> {{item.discountedPrice ? 'за м² со скидкой' : 'за м²'}}</small>
            </div>
            <div v-if="item.discountedPrice">
              <h3 :style="{ color: '#999999', textDecoration: 'line-through' }">
                {{ item.price | currencyFormat }}
              </h3>
              <small>за м² без скидки</small>
            </div>
            <div v-if="item.discountedPrice">
              <h3 :style="{ color: '#345086' }">скидка {{ item.discount.value }}%</h3>
              <small>до {{item.discount.date | discountDate}}</small>
            </div>
          </div>
        </div>
      </div>
      <div class="view-more-box">
        <button
          v-if="limitView <= filteredApartments.length"
          class="view-more"
          @click="viewMore"
        >
          Показать еще
        </button>
      </div>
    </div>
    <div v-if="whatsappView" class="indent-block">
      <whatsapp />
    </div>
  </div>
</template>

<script>
import Apartments from '@/components/builds-apartments/filters/apartments'
import Offices from '@/components/builds-apartments/filters/offices'
import Whatsapp from '@/components/whatsapp'
const filterComponents = {
  apartments: Apartments,
  offices: Offices,
}
const formatterCurrency = new Intl.NumberFormat('ru', {
  maximumSignificantDigits: 3,
})
export default {
  name: 'index',
  components: { Whatsapp },
  props: ['apartments', 'name', 'whatsappView'],
  data: () => ({
    filteredApartments: [],
    limitView: 6,
  }),
  filters: {
    currencyFormat(val) {
      if(val > 999999){
        return `от ${formatterCurrency.format(val / 1000000)} млн ₸`
      }else{
        return `от ${formatterCurrency.format(val / 1000)} тыс ₸`
      }
    },
    discountDate(date){
      console.log(date)
      return new Intl.DateTimeFormat('ru', {
        day: 'numeric',
        month: 'long'
      }).format(new Date(date))
    },
  },
  computed: {
    componentFilter() {
      return filterComponents[this.name] || filterComponents.offices
    },
    limitedView() {
      return this.filteredApartments.slice(0, this.limitView)
    },
  },
  methods: {
    async getDefaultImg(link){
      return await new Promise((resolve, reject) => {
        let img = new Image()
        img.src = link
        img.onload = () => resolve(img.link)
        img.onerror = resolve("https://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-small.png")
      })


      // let img = new Image();
      // img.src = link;
      // img.onerror = () => {
      //   img.src = "https://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-small.png"
      // };
      //
      // return img.src
    },
    filtered(val) {
      this.filteredApartments = val
    },
    viewMore() {
      this.limitView += 6
    },
    leftCountsText(type){
      const titleText = {
        flat: `Квартир осталось`,
        office: `Офисов осталось`,
        parking: `Паркингов  осталось`,
        storage: `Кладовок осталось`,
      }
      return titleText[type]
    }
  },
}
</script>

<style lang="scss" scoped>
.build-apartments {
  position: relative;
  .build-apartments-name {
    top: 26rem;
    left: -12rem;

    position: absolute;

    .build-apartments-name-text {
      -ms-transform: rotate(180deg); /* IE 9 */
      -moz-transform: rotate(180deg); /* Firefox */
      -webkit-transform: rotate(180deg); /* Safari and Chrome */
      -o-transform: rotate(180deg); /* Opera */
      transform: rotate(180deg);
      writing-mode: vertical-lr;
      opacity: 0.2;
      font-style: normal;
      font-weight: bold;
      font-size: 100px;
    }
  }
}


.indent-block {
  margin: 3.2rem 0;
  display: flex;
  flex-direction: column;
}
.view-more-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.builds-ap {
  display: flex;
  flex-direction: column;
}
.apartments {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  .apartments-apartment {
    .apartment-image-box {
      position: relative;
      height: 208px;
      margin-bottom: 1.4rem;
      background-color: white;
      border-radius: 8px;
      .apartment-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
      }
      .apartment-image-des {
        position: absolute;
        top: 1.6rem;
        left: 1.6rem;
        background: #ffffff;
        border-radius: 28px;
        display: flex;
        align-items: center;
        padding: 0 1rem 0 0;

        .apartments-count {
          background: #363636;
          border: 1px solid #ffffff;
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
    .offer-link{

      .apartments-title {
        font-weight: bold;
        font-size: 20px;
        color: #01152c;
      }
      &:hover{
        .apartments-title {
          font-weight: bold;
          font-size: 20px;
          color: #004B94;
        }
      }
    }

    .apartments-address {
      font-size: 14px;
      line-height: 16px;
      color: #4f4f4f;
      margin-bottom: 1.6rem;
    }
    .price-description {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .apartments-apartment {
      .price-description {
        grid-template-columns: auto auto;
      }
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}
.view-more {
  margin: 4rem auto 2.4rem auto;
  width: auto;
}
</style>
