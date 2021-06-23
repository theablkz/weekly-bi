<template>
  <div
    class="grid weekly-container"
    :style="{
      gridRowGap: '1.6rem',
    }"
  >
    <div class="grid-col_1-11 slider-container">
      <client-only>
        <VueSlickCarousel v-bind="settings">
          <img
            v-for="image in images"
            draggable="false"
            class="slider-image"
            :src="image"
            alt=""
          />

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
const formatterCurrency = new Intl.NumberFormat('ru', {
})
export default {
  name: 'weekly',
  components: { VueSlickCarousel },
  data: () => ({
    settings: {
      dots: true,
      edgeFriction: 0.35,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  }),
  computed: {
    images() {
      return [
        '/head1.png'
      ]
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
.weekly-container {
  padding-top: 4rem;
}
.weekly-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 5rem;
  .weekly-content__image {
    border-radius: 8px;

    width: 100%;
    height: 100%;
    user-select: none;
    user-drag: none;
    object-fit: cover;
    @media (max-width: 500px) {
      height: 260px;
    }
  }
  .price-discount {
    font-weight: bold;
    font-size: 42px;
    line-height: 56px;
  }
  .price {
    font-weight: 500;
    font-size: 22px;
    color: #606060;
    text-decoration: line-through;
  }
  .weekly-content-description {
    margin-top: 2.4rem;
    p {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      span {
        margin-right: 12px;
      }
    }
  }
  .weekly-content-about {
    background: #ededed;
    border-radius: 8px;
    margin-top: 2.8rem;
    &__href {
      background: #004b94;
      border-radius: 8px;
      padding: 2.4rem;
      color: white;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-left: 1.6rem;
      }
      &:hover{
        background-color: #004a94d0;
      }
    }
    .weekly-content-about__time {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.2rem 1.2rem 2rem 1.2rem;
      .time-title {
        font-weight: bold;
        font-size: 16px;
        color: #4c4c4c;
      }
      .countdown {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(7, auto);
        gap: 8px;
        margin-top: 2rem;
        .days {
          position: relative;
          :after {
            content: 'Дней';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -1rem;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #4d4d4d;
          }
        }
        .hours {
          position: relative;
          :after {
            content: 'Часов';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -1rem;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #4d4d4d;
          }
        }
        .minutes {
          position: relative;
          :after {
            content: 'минут';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -1rem;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #4d4d4d;
          }
        }
        .seconds {
          position: relative;
          :after {
            content: 'секунд';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -1rem;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #4d4d4d;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
.slider-container {
  position: relative;
  height: 100%;
  max-height: 460px;
  width: 100%;
  .slider-container__discount {
    font-size: 2.6rem;
    position: absolute;
    z-index: 15;
    background: #cb4635;
    border-radius: 8px 0px 0px 8px;
    top: 2rem;
    right: 0;
    padding: .4rem 1.6rem .4rem 2.4rem;
    color: white;
    &.slider-container__discount--left {
      left: 0;
      right: auto;
      padding: .4rem 2.4rem .4rem 1.6rem;
      border-radius: 0px 8px 8px 0px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
      padding: 0rem 1rem 0rem 1.2rem;
      &.slider-container__discount--left {
        left: 0;
        right: auto;
        padding: 0rem 1rem 0rem 1.2rem;
        border-radius: 0px 8px 8px 0px;
      }
    }
  }
}
.slider {
  padding: 0 1.6rem !important;
}
.slider-image-box{
  height: 100%;
}
.slider-image {
  border-radius: 8px !important;
  width: 100% !important;
  height: auto !important;
  max-height: 460px;
  object-fit: cover !important;
}
.slick-next {
  right: 0px !important;
  width: 4rem;
  height: 4rem;
}
.slick-prev {
  left: 0px !important;
  z-index: 1 !important;
  width: 4rem;
  height: 4rem;
}
.slick-next:before {
  color: #ffffff !important;
  font-size: 4rem !important;
  content: url('~assets/image/icons/slider-icon-arrow-right.svg') !important;
}
.slick-prev:before {
  color: #ffffff !important;
  font-size: 4rem !important;
  content: url('~assets/image/icons/slider-icon-arrow-left.svg') !important;
}
.slick-dots {
  bottom: 25px !important;
}
.slick-dots li button:before {
  font-size: 10px !important;
}
.slick-dots li.slick-active button:before {
  color: white !important;
  opacity: 1 !important;
}
.slick-dots li button:before {
  color: white !important;
}
@media (max-width: 768px) {
  .slick-next:before {
    font-size: 2.6rem !important;
  }
  .slick-prev:before {
    font-size: 2.6rem !important;
  }
  .slick-dots {
    bottom: 15px !important;
  }
}
</style>
