<template>
  <div
    class="grid weekly-container"
    :style="{
      gridRowGap: '1.6rem',
    }"
  >
    <div class="grid-col_1-11 indent_bottom-h4">
      <nuxt-link class="link-home" to="/" style="width: max-content">
        <p

        >
          <span
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M0.272364 10.6576L6.22403 16.6092C6.58716 16.9724 7.17608 16.9724 7.53921 16.6092C7.90241 16.246 7.90241 15.6573 7.53921 15.2941L3.17507 10.9299L19.0701 10.9299C19.5836 10.9299 20 10.5135 20 9.99999C20 9.48651 19.5836 9.07004 19.0701 9.07004L3.17507 9.07004L7.53906 4.7059C7.90226 4.3427 7.90226 3.75393 7.53906 3.39073C7.35753 3.20928 7.11947 3.11837 6.88147 3.11837C6.64348 3.11837 6.40549 3.20928 6.22389 3.39073L0.272364 9.3424C-0.0908369 9.7056 -0.0908369 10.2944 0.272364 10.6576Z"
                  fill="#004B94"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(20 20) rotate(-180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          На главную
        </p>
      </nuxt-link>
    </div>
    <div class="grid-col_1-8 slider-container-id">
      <h1 v-if="builds.discount" class="slider-container__discount">%</h1>
      <div class="images indent_bottom-h4" v-viewer>
        <div style="background-color: white;">
          <img
            @error="( e ) => e.target.src = 'http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png'"
            draggable="false"
            class="slider-image-id"
            :src="imageBox(builds)"
            alt=""
            style="background-color: white;"
          />
        </div>
      </div>
<!--      <a target="_blank" class="build-about-link" :href="builds">Узнать подробнее о ЖК →</a>-->
    </div>
    <div class="grid-col_8-11">
      <div class="weekly-content">
        <div>
          <h1>
              {{ builds.name }}
          </h1>
          <h1 class="price-discount" :style="{ color: '#E18438' }">
            {{ builds.endPrice || builds.startPrice | currencyFormat }}
          </h1>
          <h4 class="price">{{ builds.startPrice | currencyFormat }}</h4>

          <div class="weekly-content-description">
            <div class='weekly-content__info'>
              <p class='info-title'>Адрес</p>
              <p class='info-des'>{{builds.address}}</p>
            </div>
            <p>
              {{ builds.square }} м&#178;
            </p>

          </div>
          <div class="weekly-content-about-id">
            <button @click="modal = true" class="consulting indent_bottom-h4">
              <span
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9167 6.33333C11.646 6.33333 12.3455 6.62306 12.8612 7.13879C13.3769 7.65451 13.6667 8.35399 13.6667 9.08333C13.6667 9.32645 13.7632 9.55961 13.9352 9.73151C14.1071 9.90342 14.3402 10 14.5833 10C14.8264 10 15.0596 9.90342 15.2315 9.73151C15.4034 9.55961 15.5 9.32645 15.5 9.08333C15.5 7.86776 15.0171 6.70197 14.1576 5.84243C13.298 4.98289 12.1322 4.5 10.9167 4.5C10.6736 4.5 10.4404 4.59658 10.2685 4.76849C10.0966 4.94039 10 5.17355 10 5.41667C10 5.65978 10.0966 5.89294 10.2685 6.06485C10.4404 6.23676 10.6736 6.33333 10.9167 6.33333Z"
                    fill="white"
                  />
                  <path
                    d="M10.9167 2.66671C12.6185 2.66671 14.2506 3.34275 15.454 4.54611C16.6573 5.74946 17.3334 7.38157 17.3334 9.08337C17.3334 9.32649 17.43 9.55965 17.6019 9.73156C17.7738 9.90346 18.0069 10 18.25 10C18.4932 10 18.7263 9.90346 18.8982 9.73156C19.0701 9.55965 19.1667 9.32649 19.1667 9.08337C19.1667 6.89534 18.2975 4.79692 16.7503 3.24974C15.2032 1.70257 13.1047 0.833374 10.9167 0.833374C10.6736 0.833374 10.4404 0.929951 10.2685 1.10186C10.0966 1.27377 10 1.50693 10 1.75004C10 1.99316 10.0966 2.22631 10.2685 2.39822C10.4404 2.57013 10.6736 2.66671 10.9167 2.66671ZM18.9375 13.5842C18.8871 13.4371 18.8001 13.3051 18.6846 13.2009C18.5692 13.0967 18.4291 13.0235 18.2775 12.9884L12.7775 11.7325C12.6283 11.6987 12.4729 11.7028 12.3255 11.7444C12.1782 11.786 12.0437 11.8639 11.9342 11.9709C11.8059 12.09 11.7967 12.0992 11.2009 13.2359C9.22381 12.3249 7.63962 10.7342 6.73671 8.75338C7.90087 8.16671 7.91004 8.16671 8.02921 8.02921C8.13619 7.91972 8.21405 7.78518 8.25568 7.63787C8.29731 7.49056 8.30139 7.33517 8.26754 7.18588L7.01171 1.75004C6.97655 1.59851 6.90341 1.45842 6.79917 1.34296C6.69494 1.2275 6.56303 1.14046 6.41587 1.09004C6.2018 1.01358 5.98074 0.958316 5.75587 0.925041C5.52419 0.87132 5.28776 0.840615 5.05004 0.833374C3.93171 0.833374 2.85919 1.27763 2.06841 2.06841C1.27763 2.85919 0.833374 3.93171 0.833374 5.05004C0.838225 8.79253 2.32707 12.3803 4.97341 15.0267C7.61975 17.673 11.2076 19.1619 14.95 19.1667C15.5038 19.1667 16.0521 19.0576 16.5637 18.8457C17.0753 18.6338 17.5401 18.3232 17.9317 17.9317C18.3232 17.5401 18.6338 17.0753 18.8457 16.5637C19.0576 16.0521 19.1667 15.5038 19.1667 14.95C19.167 14.7167 19.1486 14.4838 19.1117 14.2534C19.0732 14.0257 19.0149 13.8018 18.9375 13.5842ZM14.95 17.3334C11.693 17.3309 8.57014 16.036 6.26709 13.733C3.96405 11.4299 2.66914 8.30704 2.66671 5.05004C2.66912 4.41869 2.921 3.81388 3.36744 3.36744C3.81388 2.921 4.41868 2.66912 5.05004 2.66671H5.35254L6.33337 6.92004L5.83837 7.17671C5.05004 7.58921 4.42671 7.91921 4.75671 8.63421C5.29408 10.1555 6.16358 11.538 7.30205 12.6812C8.44051 13.8244 9.81935 14.6997 11.3384 15.2434C12.1084 15.555 12.4109 14.9775 12.8234 14.18L13.0892 13.6759L17.3334 14.6475V14.95C17.331 15.5814 17.0791 16.1862 16.6326 16.6326C16.1862 17.0791 15.5814 17.331 14.95 17.3334Z"
                    fill="white"
                  />
                </svg> </span
              >Записаться на консультацию
            </button>
            <a
              target="_blank"
              class="whatsapp_mobile"
              :href="`https://wa.me/77783603366?text=${whatsappLinkText}`"
            >
              <div class="send-whatsapp">
                <img src="~assets/image/icons/whatsapp.svg" alt />
                <p>Консультация по Whatsapp</p>
              </div>
            </a>
            <a
              target="_blank"
              class="whatsap_desktop"
              :href="`https://web.whatsapp.com/send?phone=77783603366&text=${whatsappLinkText}&source=&data=`"
            >
              <div class="send-whatsapp">
                <img src="~assets/image/icons/whatsapp.svg" alt />
                <p>Консультация по Whatsapp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <send-modal v-if="modal" @close="modal = false" />
    </transition>
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
import SendModal from '~/components/send-modal'
Vue.use(Viewer)
const formatterCurrency = new Intl.NumberFormat('ru', )
export default {
  scrollToTop: true,
  name: 'offer-id',
  head() {
    return {
      title: this.builds.name
    }
  },
  components: { SendModal },
  data: () => ({
    modal: false,
  }),
  async asyncData({ app }) {
    const id = app.context.route.params.id

    const buildData = await app.$axios.$get(
      `https://admin-api.bi.group/block/${id}`
    )
    return {
      builds: buildData,
      isDraggingStartValue: false,
      scrollEl: 0,
      timer: {},
    }
  },
  computed: {
    titleText(){
      const titleText = {
        flat: `${ this.builds.rooms } комнатная квартира, в ЖК ${ this.builds.name }`,
        office: `${this.builds.square} м&#178 офис в ЖК ${ this.builds.name }`,
        parking: `${this.builds.name} в ЖК ${ this.builds.name }`,
        storage: `${this.builds.name} в ЖК ${ this.builds.name }`,
      }
      return `<h2 class="indent_bottom-h5" >
              ${titleText[this.builds.flatType] || ''}
            </h2>`
    },
    whatsappLinkText(){
      return `Здравствуйте! Меня интересует специальное предложение на ${this.builds.name} в ЖК ${ this.builds.name }`
    }
  },
  methods: {
    imageBox(item){
      return `https://parse-api.bi.group/parse/${item.guid}.png`
    }
  },
  filters: {
    currencyFormat(val) {
      console.log('val', val)
      return `от ${formatterCurrency.format(val)} ₸`
    },
  },
  mounted() {
    document.getElementsByClassName("layout")[0].scroll({
      top: 0,
      left: 0,
    });
  }
}
</script>

<style lang="scss">
  .viewer-container img{
    background-color: white !important;
  }
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.link-home{
  p{
    display: grid;
    grid-template-columns: 30px 90px;
    font-weight: 500;
    font-size: 16px;
    color: #333333;
  }
  &:hover{
    p{
      color: #004B94;
    }
  }
}
.build-about-link{
  width: max-content;
  padding: .5rem 2.2rem;
  color: #004B94;
  border: 1px solid #EAEAEA;
  border-radius: 6px;
}
.weekly-container {
  padding-top: 4rem;
  margin-bottom: 7rem;
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
  }
  .price {
    font-weight: 500;
    font-size: 22px;
    color: #606060;
    text-decoration: line-through;
  }
  .weekly-content-description {
    margin-top: 2.4rem;
    .weekly-content__info{
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid rgba(1, 21, 44, 0.05);
      display: grid;
      align-items: center;
      justify-content: space-between;
      grid-template-columns: auto auto;
      gap: 1rem;
      .info-title {
        color: #333333;
        opacity: 0.5;
      }
      .info-des {
        font-weight: 500;
      }
      p{
        margin: 0;
      }
    }
  }
  .weekly-content-about-id {
    border-radius: 8px;
    margin-top: 2.8rem;
    &__href {
      background: #004b94;
      border-radius: 8px;
      padding: 2.8rem;
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
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
.slider-container-id {
  position: relative;
  max-width: 800px;
  width: 100%;
  background-color: white;
  .slider-container__discount {
    position: absolute;
    z-index: 15;
    background: #cb4635;
    border-radius: 8px 0px 0px 8px;
    top: 2rem;
    right: 0;
    padding: 1rem 1.6rem 1rem 2.4rem;
    color: white;
    font-size: 32px;
    @media (max-width: 768px) {
      font-size: 22px;
      padding: 0.5rem 1rem 0.5rem 1.6rem;
    }
  }
}
.slider {
  padding: 0 1.6rem;
}
.slider-image-id {
  background-color: white;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 8px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  max-height: 613px;
  object-fit: contain;
  margin: auto;
  cursor: zoom-in;
}
.consulting {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  span {
    margin-right: 1.2rem;
  }
}

.send-whatsapp {
  background: #58bd54;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  margin: auto;
  max-width: 100%;

  p {
    line-height: 2;
    font-size: 1.6rem;
    font-weight: bold;
  }
  img {
    margin-right: 0.5rem;
  }
  &:hover {
    background: #128c7ea9;
  }
}
.whatsapp_mobile {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}
.whatsap_desktop {
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.slick-next:before {
  color: black !important;
}
.slick-prev:before {
  color: black !important;
}
</style>
