<template>
  <div class="footer">
    <div class="footer__licence">
      <p class="">
        Лицензия №1.2.199/93/31 от 03.02.2020 г. выдана Агентством Республики
        Казахстан по регулированию и развитию финансового рынка
      </p>
      <p class="">
        Қазақстан Республикасының Қаржы нарығын реттеу және дамыту агенттігі
        03.02.2020 жылы берген №1.2.199/93/31 лицензиясы
      </p>
    </div>
    <div class="footer-content">
      <div class="footer-content__contacts">
        <img class="logo" src="~assets/image/icons/logo.svg" alt="bi group" />

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
      <div class="footer-content__media">
        <a target="_blank" href="https://www.youtube.com/user/BIGroupHolding">
          <img src="~assets/image/social/youtube.svg" alt />
        </a>
        <a target="_blank" href="https://www.facebook.com/bigroup.holding/">
          <img src="~assets/image/social/facebook.svg" alt />
        </a>
        <a target="_blank" href="https://twitter.com/bigroup_kz">
          <img src="~assets/image/social/twitter.svg" alt />
        </a>
        <a target="_blank" href="https://www.instagram.com/bi.group/">
          <img src="~assets/image/social/instagram.svg" alt />
        </a>
        <a target="_blank" href="https://vk.com/bigroupholding">
          <img src="~assets/image/social/vk.svg" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  background: #f1f1f1;
  padding: 2.4rem 0;
  &__licence {
    padding: 0 1.6rem;
    max-width: 120rem;
    margin: auto;
    p{
      padding: .8rem 0;
    }
  }
  .footer-content {
    padding: 0 1.6rem;
    max-width: 120rem;
    margin: 3rem auto auto auto;
    display: flex;
    justify-content: space-between;
    &__contacts {
      display: grid;
      grid-template-columns: auto auto;
      gap: 4rem;
      .contacts {
        .call-phone {
          .phone {
            color: #004b94;
            display: flex;
            justify-content: flex-start;
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
    }
    &__media {
      display: grid;
      grid-template-columns: repeat(5, 3.2rem);
      grid-template-rows: 3.2rem;
      gap: 1.6rem;
      a{

        &:hover{
          img{
            transition: .4s;
            background-color: #004a94d0;
          }
        }
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      &__contacts {
        gap: 1.6rem;
        margin-bottom: 4rem;
      }
    }
  }
}
</style>
