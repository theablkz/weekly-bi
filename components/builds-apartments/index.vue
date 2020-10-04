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
          <div class="apartment-image-box">
            <img
              onerror="this.onerror=null; this.src='https://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png'"
              class="apartment-image"
              :src="`http://185.125.46.99:8080/img/${item.schemaImage}`"
              alt=""
            />

            <!--            <div class="apartment-image-des">-->
            <!--              <p class="apartments-count">{{item.offersLeft.count}}</p>-->
            <!--              <p>{{item.offersLeft.title}}</p>-->
            <!--            </div>-->
          </div>
          <h3 class="apartments-title">{{ item.buildName }}</h3>
          <p class="apartments-address">{{ item.address }}</p>
          <div class="price-description">
            <div>
              <h3 :style="{ color: '#E18438' }">
                {{ item.discountedPrice || item.price | currencyFormat }}
              </h3>
              <small>за м² со скидкой</small>
            </div>
            <div>
              <h3 :style="{ color: '#999999', textDecoration: 'line-through' }">
                {{ item.price | currencyFormat }}
              </h3>
              <small>за м² без скидки</small>
            </div>
            <div>
              <h3 :style="{ color: '#345086' }">скидка {{ item.discount }}%</h3>
              <small>до 25 июля</small>
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
      return `от ${formatterCurrency.format(val / 1000000)} млн ₸`
    },
  },
  computed: {
    componentFilter() {
      return filterComponents[this.name]
    },
    limitedView() {
      return this.filteredApartments.slice(0, this.limitView)
    },
  },
  methods: {
    filtered(val) {
      this.filteredApartments = val
    },
    viewMore() {
      this.limitView += 6
    },
  },
}
</script>

<style lang="scss" scoped>
.build-apartments{
  position: relative;
  .build-apartments-name{
    top: 26rem;
    left: -12rem;

    position: absolute;

    .build-apartments-name-text{
      -ms-transform:rotate(180deg); /* IE 9 */
      -moz-transform:rotate(180deg); /* Firefox */
      -webkit-transform:rotate(180deg); /* Safari and Chrome */
      -o-transform:rotate(180deg); /* Opera */
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
      .apartment-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    .apartments-title {
      font-weight: bold;
      font-size: 20px;
      color: #01152c;
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
