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
          <a v-for="item in otherBuilds" :href="item.link" target="_blank" :key="item.id">
            <div class="apartments-apartment-carusel" >
              <div class="apartments-box">
                <div class="apartment-image-box">
                  <img class="apartment-image" :src="item.schemaImage" alt="" />
                </div>
                <h3 class="apartments-title">{{ item.buildName }}</h3>

              </div>
            </div>
          </a>
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
      slidesToScroll: 3,
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
            dots: true,
            arrows: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
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
.apartments-apartment-carusel {
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
      border-radius: 8px;
    }

  }
  .apartments-title {
    font-weight: bold;
    font-size: 20px;
    color: #01152c;
  }
  &:hover{
    .apartments-title {
      color: #004b94;
    }
  }

}


.slick-prev:before,
.slick-next:before {
  color: #004b94;
}
</style>
