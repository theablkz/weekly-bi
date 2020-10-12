<template>
  <div class="modal">
    <div class="modal__box">
      <svg
        class="modal__close"
        @click="$emit('close')"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.75 6.75L17.25 17.25"
          stroke="#EB5757"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M17.25 6.75L6.75 17.25"
          stroke="#EB5757"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <div class="modal__form">
        <h2>Оставить заявку</h2>
        <form @submit.prevent="submitForm">
          <div class="field field_white">
            <input
              v-model="name"
              id="name"
              type="text"
              class="field__input"
              placeholder="Иванов Иван Иванович"
            />
            <label for="name" class="field__label"> Ваше имя </label>
            <div v-if="nameError" class="field__error">
              <p>Заполните поле</p>
            </div>
          </div>
          <div class="field field_white">
            <the-mask
              v-model="phone"
              :masked="true"
              mask="+7 (7##) ###-##-##"
              id="phone"
              class="field__input"
              placeholder="+7 (___) ___-__-__"
            />
            <label for="phone" class="field__label"> Номер телефона </label>
            <div v-if="phoneError" class="field__error">
              <p>Заполните поле</p>
            </div>
          </div>
          <button>Оставить заявку</button>
        </form>
      </div>
      <div class="modal__secure-info">
        <div class="secure-box">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3.19L19 6.3V11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19ZM12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
              fill="#BDBDBD"
            />
          </svg>

          <p>Ваши данные надежно защищены</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'
export default {
  name: 'send-modal',
  components: { TheMask },
  data: () => ({
    name: '',
    phone: '',
    nameError: false,
    phoneError: false,
  }),
  watch: {
    name: function () {
      this.nameError = false
    },
    phone: function () {
      this.phoneError = false
    },
  },
  methods: {
    submitForm() {
      console.log('on click')
      if (!this.name) {
        this.nameError = true
      }
      if (this.phone.length !== 18) {
        this.phoneError = true
      }
      if (!this.nameError && !this.phoneError) {

        let phoneNumber = [...this.phone.replace(/[^0-9.]/g, '')]
        phoneNumber[0] = '8'
        phoneNumber = phoneNumber.join('')

        let userData = {
          fullName: this.name,
          phoneNumber: phoneNumber
        }
        const oktell = `number=${phoneNumber}&name=${this.name.replace(
          /\s/g,
          ''
        )}&site=weekly&company=BIGroup`
        let data = new FormData()

        data.append('form', oktell)
        this.$axios
          .post('https://abl-test.ru/sendMail.php  ', data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .catch((err) => console.log(err))

        const sendForm = {
          clientInfo: userData,
          referralProgramName: 'SBERBANK',
        }
        this.$emit('close')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  &__box {
    position: relative;
    width: 100%;
    max-width: 38rem;
    background: #ffffff;
    box-shadow: 0px 4px 70px rgba(22, 55, 69, 0.15);
    border-radius: 8px;
  }
  &__form {
    padding: 2.8rem 2.4rem 2.4rem;
  }
  &__secure-info {
    border-top: 1px solid #e0e0e0;
    padding: 1.6rem;
    .secure-box {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #a9a9a9;
      svg {
        margin-right: 8px;
      }
    }
  }
  &__close {
    cursor: pointer;
    position: absolute;
    left: 100%;
    bottom: 100%;
  }
}
</style>
