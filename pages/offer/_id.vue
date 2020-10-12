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
      <h1 v-if="builds.discount.value" class="slider-container__discount">{{ builds.discount.value }}%</h1>
      <div class="images indent_bottom-h4" v-viewer>
        <div style="background-color: white;">
          <img
            @error="( e ) => e.target.src = builds.queue.real_estate.photo"
            draggable="false"
            class="slider-image-id"
            :src="`http://185.125.46.99:8080/img/${builds.schemaImage}`"
            alt=""
            style="background-color: white;"
          />
        </div>
      </div>
      <a target="_blank" class="build-about-link" :href="builds.queue.real_estate.website">Узнать подробнее о ЖК →</a>
    </div>
    <div class="grid-col_8-11">
      <div class="weekly-content">
        <div>
          <div  v-html="titleText">

          </div>

          <h1 class="price-discount" :style="{ color: '#E18438' }">
            {{ builds.discountedPrice || builds.price | currencyFormat(builds.flatType) }}
          </h1>
          <h4 class="price" v-if="builds.discountedPrice">{{ builds.price | currencyFormat }}</h4>

          <div class="weekly-content-description">
            <a target="_blank" class="link-build" :href="builds.queue.real_estate.website">
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
              >{{ builds.queue.real_estate.name }}
              </p>
            </a>
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
              {{ builds.queue.address }}
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
            <p v-if="builds.flatType !== 'parking' && builds.flatType !== 'storage'">
              <span>
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="6.5" y1="12" x2="6.5" y2="10" stroke="#333333" />
                  <line x1="6.5" y1="9" x2="6.5" y2="7" stroke="#333333" />
                  <line x1="6.5" y1="6" x2="6.5" y2="4" stroke="#333333" />
                  <line x1="6.5" y1="3" x2="6.5" y2="1" stroke="#333333" />
                  <line x1="6.5" y1="12" x2="6.5" y2="10" stroke="#333333" />
                  <line x1="6.5" y1="9" x2="6.5" y2="7" stroke="#333333" />
                  <line x1="6.5" y1="6" x2="6.5" y2="4" stroke="#333333" />
                  <line x1="6.5" y1="3" x2="6.5" y2="1" stroke="#333333" />
                  <line x1="12.5" y1="12" x2="12.5" y2="10" stroke="#333333" />
                  <line x1="12.5" y1="9" x2="12.5" y2="7" stroke="#333333" />
                  <line x1="12.5" y1="6" x2="12.5" y2="4" stroke="#333333" />
                  <line x1="12.5" y1="3" x2="12.5" y2="1" stroke="#333333" />
                  <line x1="0.5" y1="12" x2="0.5" y2="10" stroke="#333333" />
                  <line x1="0.5" y1="9" x2="0.5" y2="7" stroke="#333333" />
                  <line x1="0.5" y1="6" x2="0.5" y2="4" stroke="#333333" />
                  <line x1="0.5" y1="3" x2="0.5" y2="1" stroke="#333333" />
                  <line
                    x1="13"
                    y1="1"
                    y2="1"
                    stroke="#333333"
                    stroke-width="2"
                  />
                </svg> </span
              >Потолки {{ builds.ceilingHeight }} м
            </p>
            <p v-if="builds.flatType !== 'parking'">
              <span>
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M1.41187 0V13H14.5883V12.6176V3.05882V0H1.41187ZM2.35304 3.82353H7.5345V12.2353H2.35304V3.82353ZM8.47568 3.82353H13.6472V12.2353H8.47568V3.82353ZM2.35304 3.05882V0.764706H13.6472V3.05882H2.35304Z"
                      fill="#333333"
                    />
                    <path
                      d="M5.94013 7.09102L4.94261 7.90194L3.94444 7.09094L3.27893 7.63167L4.9428 8.98354L6.60583 7.63159L5.94013 7.09102Z"
                      fill="#333333"
                    />
                    <path
                      d="M9.39783 8.4583L10.0635 8.99887L11.061 8.18793L12.0592 8.99895L12.7247 8.45823L11.0608 7.10632L9.39783 8.4583Z"
                      fill="#333333"
                    />
                    <path
                      d="M3.76428 1.52942H4.70546V2.29413H3.76428V1.52942Z"
                      fill="#333333"
                    />
                    <path
                      d="M5.64709 1.52942H6.58827V2.29413H5.64709V1.52942Z"
                      fill="#333333"
                    />
                    <path
                      d="M7.52905 1.52942H8.47023V2.29413H7.52905V1.52942Z"
                      fill="#333333"
                    />
                    <path
                      d="M9.41187 1.52942H10.353V2.29413H9.41187V1.52942Z"
                      fill="#333333"
                    />
                    <path
                      d="M11.2947 1.52942H12.2359V2.29413H11.2947V1.52942Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="16" height="13" fill="white" />
                    </clipPath>
                  </defs>
                </svg> </span
              >Этаж {{ builds.floor }}
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
const formatterCurrency = new Intl.NumberFormat('ru', {
  maximumSignificantDigits: 3,
})
export default {
  scrollToTop: true,
  name: 'offer-id',
  head() {
    return {
      title: this.builds.queue.name
    }
  },
  components: { SendModal },
  data: () => ({
    modal: false,
  }),
  async asyncData({ app }) {
    // const buildsName = await app.$axios.$get('http://185.125.46.99:8080/api/projects').then(res => res).catch(() => [])
    // const discounts = await app.$axios.$get('http://185.125.46.99:8080/api/discount').then(res => res).catch(() => [])
    const id = app.context.route.params.id

    const buildData = await app.$axios.$get(
      `http://185.125.46.99:8080/api/solo/${id}`
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
        flat: `${ this.builds.rooms } комнатная квартира, в ЖК ${ this.builds.queue.real_estate.name }`,
        office: `${this.builds.square} м&#178 офис в ЖК ${ this.builds.queue.real_estate.name }`,
        parking: `${this.builds.queue.name} в ЖК ${ this.builds.queue.real_estate.name }`,
        storage: `${this.builds.queue.name} в ЖК ${ this.builds.queue.real_estate.name }`,
      }
      return `<h2 class="indent_bottom-h5" >
              ${titleText[this.builds.flatType] || ''}
            </h2>`
    },
    whatsappLinkText(){
      return `Здравствуйте! Меня интересует специальное предложение на ${this.builds.queue.name} в ЖК ${ this.builds.queue.real_estate.name }`
    }
  },
  filters: {
    currencyFormat(val, flatType) {
      return `${flatType === 'parking' || flatType === 'parking' ? 'от ' : ''} ${formatterCurrency.format(val)} ₸`
    },
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
    p {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      span {
        margin-right: 12px;
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
