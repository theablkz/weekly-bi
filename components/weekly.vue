<template>
  <div class="grid weekly-container" :style="{
    gridRowGap: '1.6rem'
  }">
    <div class="grid-col_1-11">
      <h1 :style="{ color: 'white' }">
        Предложение недели
      </h1>
    </div>
    <div class="grid-col_1-8 slider-container">
      <h1 class="slider-container__discount">{{ (100 - 100/(builds.price/builds.minPrice)).toFixed() }}%</h1>
      <client-only>
        <VueSlickCarousel v-bind="settings">
          <div v-for="image in builds.images">
            <img
              draggable="false"
              class="slider-image"
              :src="`http://185.125.46.99:8080/saved/${image}`"
              alt=""
            />
          </div>
        </VueSlickCarousel>
      </client-only>
    </div>
    <div class="grid-col_8-11">

      <div class="weekly-content">

        <div>
          <h2 class="indent_bottom-h5">{{ builds.description }}</h2>
          <h1 class="price-discount" :style="{ color: '#E18438' }">
            {{ builds.minPrice | currencyFormat }}
          </h1>
          <h4 class="price">{{ builds.price | currencyFormat }}</h4>

          <div class="weekly-content-description">
            <p>
              <span
                ><svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.25 4.37499H7.12498V3.64295C7.85327 3.38561 8.37499 2.69156 8.37499 1.875C8.37499 0.839209 7.53578 0 6.49999 0C5.4642 0 4.62499 0.839209 4.62499 1.875C4.62499 2.69156 5.14671 3.38561 5.875 3.64295V4.37499H2.74999C1.3692 4.37499 0.25 5.49419 0.25 6.87498C0.25 8.25577 1.3692 9.375 2.74999 9.375H5.875V13.75H4C3.65482 13.75 3.37501 14.0298 3.37501 14.375C3.37501 14.7202 3.65482 15 4 15H9.00001C9.34519 15 9.625 14.7202 9.625 14.375C9.625 14.0298 9.34519 13.75 9.00001 13.75H7.12501V9.375H10.25C11.6308 9.375 12.75 8.2558 12.75 6.87501C12.75 5.49422 11.6308 4.37499 10.25 4.37499ZM6.49999 1.25001C6.84543 1.25001 7.12498 1.52956 7.12498 1.875C7.12498 2.22044 6.84543 2.49999 6.49999 2.49999C6.15455 2.49999 5.875 2.22044 5.875 1.875C5.875 1.52956 6.15455 1.25001 6.49999 1.25001ZM10.25 8.12499H2.74999C2.05955 8.12499 1.49998 7.56545 1.49998 6.87498C1.49998 6.18451 2.05955 5.625 2.74999 5.625H10.25C10.9404 5.625 11.5 6.18454 11.5 6.87501C11.5 7.56548 10.9404 8.12499 10.25 8.12499Z"
                    fill="#333333"
                  />
                  <path
                    d="M8.37498 6.25H4.62499C4.27981 6.25 4 6.52981 4 6.87499C4 7.22017 4.27981 7.49998 4.62499 7.49998H8.37498C8.72015 7.49998 8.99997 7.22017 8.99997 6.87499C8.99997 6.52984 8.72015 6.25 8.37498 6.25Z"
                    fill="#333333"
                  />
                </svg> </span
              >{{ builds.name }}
            </p>
            <p>
              <span
                ><svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.22792 6.6131C9.22792 7.35066 8.93493 8.058 8.4134 8.57953C7.89187 9.10106 7.18452 9.39406 6.44697 9.39406C5.70941 9.39406 5.00207 9.10106 4.48054 8.57953C3.95901 8.058 3.66602 7.35066 3.66602 6.6131C3.66602 5.87555 3.95901 5.1682 4.48054 4.64668C5.00207 4.12515 5.70941 3.83215 6.44697 3.83215C7.18452 3.83215 7.89187 4.12515 8.4134 4.64668C8.93493 5.1682 9.22792 5.87555 9.22792 6.6131ZM7.83744 6.6131C7.83744 6.98188 7.69095 7.33555 7.43018 7.59632C7.16942 7.85708 6.81575 8.00358 6.44697 8.00358C6.07819 8.00358 5.72452 7.85708 5.46375 7.59632C5.20299 7.33555 5.05649 6.98188 5.05649 6.6131C5.05649 6.24433 5.20299 5.89065 5.46375 5.62989C5.72452 5.36912 6.07819 5.22263 6.44697 5.22263C6.81575 5.22263 7.16942 5.36912 7.43018 5.62989C7.69095 5.89065 7.83744 6.24433 7.83744 6.6131Z"
                    fill="#333333"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.9425 10.9555C1.04622 10.1022 0.423128 9.00219 0.152006 7.7947C-0.119115 6.58721 -0.0260862 5.32645 0.41933 4.17183C0.864745 3.01722 1.64254 2.02062 2.65436 1.30805C3.66618 0.595487 4.86658 0.198965 6.10376 0.168629C7.34094 0.138293 8.55933 0.475505 9.60486 1.13762C10.6504 1.79974 11.4761 2.75702 11.9776 3.88842C12.479 5.01981 12.6337 6.27451 12.4221 7.49383C12.2105 8.71315 11.6421 9.84234 10.7887 10.7386L6.47406 15.2702L1.9425 10.9555ZM9.782 9.77987L6.42609 13.3047L2.90123 9.94881C2.20416 9.28509 1.71956 8.42957 1.5087 7.49043C1.29784 6.5513 1.3702 5.57073 1.71662 4.67271C2.06305 3.7747 2.66798 2.99958 3.45492 2.44536C4.24186 1.89114 5.17547 1.58272 6.1377 1.5591C7.09992 1.53547 8.04754 1.7977 8.86074 2.31263C9.67393 2.82756 10.3162 3.57206 10.7062 4.45199C11.0963 5.33192 11.2167 6.30776 11.0522 7.25611C10.8877 8.20446 10.4457 9.08274 9.782 9.77987Z"
                    fill="#333333"
                  />
                </svg>
              </span>
              {{ builds.address }}
            </p>
            <p>
              <span
                ><svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6139 2.98953L6.7639 0.389561C6.68072 0.352596 6.5907 0.333496 6.49967 0.333496C6.40865 0.333496 6.31863 0.352596 6.23545 0.389561L0.38545 2.98953C0.37245 2.99538 0.36335 3.00513 0.35035 3.01228C0.33215 3.02138 0.31265 3.02723 0.29575 3.03828C0.28145 3.04803 0.2704 3.06038 0.25675 3.07078C0.209237 3.10609 0.167563 3.14864 0.13325 3.19688C0.12025 3.21508 0.1066 3.23132 0.0948999 3.24952C0.0755538 3.28388 0.0590327 3.31974 0.0455 3.35677C0.03965 3.37432 0.03055 3.39057 0.02535 3.40812C0.00902558 3.46521 0.000498255 3.52425 0 3.58362V10.0835C0 10.3409 0.1508 10.573 0.3861 10.6776L6.2361 13.2776C6.3206 13.3153 6.4103 13.3335 6.5 13.3335C6.5905 13.3312 6.67951 13.3099 6.7613 13.2711L6.7639 13.2776L12.6139 10.6776C12.7289 10.6266 12.8266 10.5433 12.8951 10.4379C12.9637 10.3324 13.0001 10.2093 13 10.0835V3.58362C13.0001 3.45784 12.9637 3.33474 12.8951 3.22927C12.8266 3.12381 12.7289 3.04052 12.6139 2.98953ZM6.5 1.69539L10.7497 3.58362L6.5 5.47185L5.6498 5.0942L2.25095 3.58362L6.5 1.69539ZM1.3 9.66169V4.58396L5.85 6.60608V11.6832L1.3 9.66169ZM7.15 11.6832V6.60608L11.7 4.58396V9.66169L7.15 11.6832Z"
                    fill="#333333"
                  />
                </svg> </span
              >{{ builds.square }} м&#178;
            </p>
          </div>
          <div class="weekly-content-about">
            <a class="weekly-content-about__href" href="/"
              >Узнать подробнее
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.88756 6L0.256281 1.46323C-0.0854277 1.1285 -0.0854277 0.585786 0.256281 0.251051C0.59799 -0.083684 1.15201 -0.083684 1.49372 0.251051L6.74372 5.39391C7.08543 5.72864 7.08543 6.27136 6.74372 6.60609L1.49372 11.7489C1.15201 12.0837 0.59799 12.0837 0.256282 11.7489C-0.0854272 11.4142 -0.0854272 10.8715 0.256282 10.5368L4.88756 6Z"
                  fill="white"
                />
              </svg>
            </a>
            <div class="weekly-content-about__time">
              <p class="time-title">Предложение действует всего:</p>
              <div class="countdown">
                <div class="days">
                  <h1>{{ timer.days }}</h1>
                </div>
                <h1>:</h1>
                <div class="hours">
                  <h1>{{ timer.hours }}</h1>
                </div>
                <h1>:</h1>
                <div class="minutes">
                  <h1>{{ timer.minutes }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
const formatterCurrency = new Intl.NumberFormat('ru', {
  maximumSignificantDigits: 3,
})
export default {
  name: 'weekly',
  props: ['builds'],
  components: { VueSlickCarousel },
  data: () => ({
    isDraggingStartValue: false,
    scrollEl: 0,
    timer: {},
    settings: {
      dots: true,
      edgeFriction: 0.35,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  }),
  computed: {},
  created() {
    this.timer = this.weekEndTime()
  },
  methods: {
    weekEndTime() {
      const timeend = new Date(this.builds.date)

      let today = new Date()
      today = Math.floor((timeend - today) / 1000)
      let tsec = today % 60
      today = Math.floor(today / 60)
      if (tsec < 10) tsec = '0' + tsec
      let tmin = today % 60
      today = Math.floor(today / 60)
      if (tmin < 10) tmin = '0' + tmin
      let thour = today % 24
      if (thour < 10) thour = '0' + thour
      today = Math.floor(today / 24)
      return {
        days: today,
        hours: thour,
        minutes: tmin
      }
    },
  },
  filters: {
    currencyFormat(val) {
      return `${formatterCurrency.format(val)} ₸`
    },
  },
}
</script>

<style lang="scss">
.weekly-container {
  padding-top: 4rem;
}
.weekly-content {
  display: grid;
  grid-template-columns: 1fr auto;
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
        grid-template-columns: repeat(5, auto);
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
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
.slider-container{
  position: relative;
  max-width: 800px;
  width: 100%;
  .slider-container__discount{
    position: absolute;
    z-index: 15;
    background: #CB4635;
    border-radius: 8px 0px 0px 8px;
    top: 2rem;
    right: 0;
    padding: 1rem 1.6rem 1rem 2.4rem;
    color: white;
  }
}
.slider{
  padding: 0 1.6rem;
}
.slider-image {
  border-radius: 8px;

  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slick-next:before {
  color: black !important;
}
.slick-prev:before{
  color: black !important;
}
</style>
