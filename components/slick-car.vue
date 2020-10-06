<template>
  <div>
    <div class="grid">
      <div class="grid-col_1-11">
        <h2 class="title">Другие предложения компании Bi group</h2>
      </div>
    </div>
    <div class="bottom-slider">
      <client-only>
        <VueSlickCarousel v-bind="settings">
          <div class="apartments-apartment" v-for="item in otherBuilds">
            <div class="apartments-box">
              <div class="apartment-image-box">
                <img class="apartment-image" :src="item.schemaImage" alt="" />
              </div>
              <h3 class="apartments-title">{{ item.buildName }}</h3>

            </div>
          </div>
        </VueSlickCarousel>
      </client-only>
    </div>
    <div class="grid">
      <div class="grid-col_1-11">
        <whatsapp />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Whatsapp from '@/components/whatsapp'

export default {
  name: 'MyComponent',
  components: { Whatsapp, VueSlickCarousel },
  props: ['otherBuilds'],
  data: () => ({
    settings: {
      dots: true,
      arrows: true,
      infinite: true,
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
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
          },
        },
      ],
    },
  }),
}
</script>
<style lang="scss">
.title{
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 2.4rem;
  @media (max-width: 768px) {
    font-size: 30px;

  }
}
.bottom-slider{
  max-width: 120rem;
  width: 100%;
  margin: auto auto 7rem auto;
}
.slider-box-hidden{
  overflow: hidden;
}
.apartments-apartment {
  .apartments-box {
    margin: 0 1.6rem;
  }
  .apartment-image-box {
    position: relative;
    height: 350px;
    margin-bottom: 1.4rem;

    .apartment-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
