<template>
  <div class="header-component-container">
    <div class="header-component">
    <div class="header-component__main">
      <div class='logo-container'>
        <nuxt-link class="logo-link" to="/"><img class="logo" src="~assets/image/icons/logo.svg" alt="bi group" /></nuxt-link>
        <nuxt-link class="logo-link" to="/"><img class="logo" src="~assets/image/icons/nova-logo.png" alt="bi group" /></nuxt-link>
      </div>
      <div class="contacts">
        <a href="tel:360">
          <div class="call-phone">
            <div class="phone">
              <img src="~assets/image/icons/phone-call.svg" alt />
              <h3>360</h3>
            </div>
            <p>Бесплатно с мобильного</p>
          </div>
        </a>
      </div>
    </div>
    <div class="header-component__secondary">
      <a
        target="_blank"
        class="whatsapp_mobile"
        href="https://wa.me/77783603366?text=Здравствуйте! Меня интересуют специальные предложения от BI Group"
      >
        <div class="send-whatsapp">
          <img src="~assets/image/icons/whatsapp.svg" alt />
          <p>Написать на WhatsApp</p>
        </div>
      </a>
      <a
        target="_blank"
        class="whatsap_desktop"
        href="https://web.whatsapp.com/send?phone=77783603366&text=Здравствуйте! Меня интересуют специальные предложения от BI Group&source=&data="
      >
        <div class="send-whatsapp">
          <img src="~assets/image/icons/whatsapp.svg" alt />
          <p>Написать на WhatsApp</p>
        </div>
      </a>
    </div>
  </div>
  </div>
</template>

<style lang="scss">
.logo-link{
  display: flex;
}
.header-component-container{
background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}
.logo-container{
  display: grid;
  grid-template-columns: auto auto;
  gap: 2.2rem;
}
.header-component {
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.6rem;
  max-width: 120rem;
  padding: 0.5rem 1.6rem;
  margin: auto;

  &__main {
    max-width: 120rem;
    display: flex;
    justify-content: space-between;
  }

  .contacts {
    display: flex;
    align-items: center;
    .call-phone {
      .phone {
        color: #004b94;
        display: flex;
        justify-content: flex-end;
        h3 {
          color: inherit;
          font-size: 1.8rem;
          margin-left: 0.5rem;
        }
      }
      p {
        color: #333333;
        font-weight: 500;
      }
    }
  }
  .send-whatsapp {
    background: #58BD54;
    border-radius: 8px;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    max-width: 31rem;
    margin: auto;
    p{
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
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    &__secondary {
      padding: 0.8rem 0;
      border-top: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
    }
    .logo {
      width: 10rem;
    }
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
</style>
