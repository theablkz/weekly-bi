<template>
  <div class="grid indent-block">
    <div class="grid-col_1-11">
      <client-only>
        <VueSlickCarousel v-bind="settings">
          <div class="apartments-apartment" v-for="item in otherBuilds">
            <div class="apartments-box">
              <div class="apartment-image-box">
                <img class="apartment-image" :src="item.schemaImage" alt="" />
                <div class="apartment-image-des">
                  <p class="apartments-count">{{ item.offersLeft.count }}</p>
                  <p>{{ item.offersLeft.title }}</p>
                </div>
              </div>
              <h3 class="apartments-title">{{ item.buildName }}</h3>
              <p class="apartments-address">{{ item.address }}</p>
              <div class="price-description">
                <div>
                  <h3 :style="{ color: '#E18438' }">
                    {{ item.priceMWithDiscount }}
                  </h3>
                  <small>за м² со скидкой</small>
                </div>
                <div>
                  <h3
                    :style="{
                      color: '#999999',
                      textDecoration: 'line-through',
                    }"
                  >
                    {{ item.priceMWithoutDiscount }}
                  </h3>
                  <small>за м² без скидки</small>
                </div>
                <div>
                  <h3 :style="{ color: '#345086' }">
                    {{ item.endOfStock.value }}
                  </h3>
                  <small>{{ item.endOfStock.title }}</small>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  props: ['otherBuilds'],
  data: () => ({
    settings: {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
}
</script>
<style lang="scss">
.apartments-apartment {
  .apartments-box {
    margin-right: 3.2rem;
  }
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
.slick-prev:before,
.slick-next:before {
  color: #004b94;
}
</style>
