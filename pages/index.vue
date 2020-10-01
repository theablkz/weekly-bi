<template>
  <div class="container">
    <weekly :builds="builds.offerOfTheWeek" class="block-indent" />
    <filter-builds :builds="builds" class="block-indent" />
    <slick-car class="block-indent" :otherBuilds="sliderOtherBuilds" />
  </div>
</template>

<script>
import { reactive, computed, useAsync, useContext, useFetch } from '@nuxtjs/composition-api'
import Weekly from '~/components/weekly'
import FilterBuilds from '@/components/filter-builds'
import offices from '@/components/builds-apartments/filters/offices'
export default {
  components: { FilterBuilds, Weekly, SlickCar: () => import('~/components/slick-car') },
  setup(){
    const { $axios } = useContext()
    const apartments = useAsync(() => $axios.$get('http://185.125.46.99:8080/api/flats').then(res => res).catch(() => []))
    const offices = useAsync(() => $axios.$get('http://185.125.46.99:8080/api/offices').then(res => res).catch(() => []))

    const builds = reactive({
      "offerOfTheWeek": {
        "id": "",
        "name": "ЖК “Crocus City” (2020 г.)",
        "buldName": "Crocus City",
        "address": "Алматы, ул. Макатаева, 2",
        "area": "39.4 м2",
        "discount": "-70%",
        "rooms": "3",
        "price": "45 000 000 ₸",
        "discountPrice": "12 000 000 ₸",
        "images": ["https://i08.kanobu.ru/r/d06ed1c5ee2fb98abecc10857a08fbd3/1040x700/u.kanobu.ru/editor/images/99/3973875e-fc3d-4955-aebb-059064bf9728.jpg", "https://www.zastavki.com/pictures/originals/2015/Anime_Anime_Touka_Kirishima_094389_.jpg", "https://srcb.oboi.ws/wallpapers/big_7450_oboi_kadr_iz_tvorenija_makoto_sinkaja.jpg"]
      },
      "allOffers": {
        "apartments": {
          "name": "Квартиры",
          "offers": apartments
        },
        "offices": {
          "name": "Офисы",
          offers: offices
          // "offers": [
          //   {
          //     "id": "1",
          //     "city": "Нур-Султан",
          //     "buildName": "Crocus City",
          //     "rooms": "3",
          //     "discountedPriceInt": 45000000,
          //     "address": "Алматы, пр. Улы Дала, ост. ЖК Кмала-1",
          //     "offersLeft": {
          //       "title": "Квартир осталось",
          //       "count": 4
          //     },
          //     "priceMWithDiscount": "от 101 млн ₸",
          //     "priceMWithoutDiscount": "от 333 млн ₸",
          //     "endOfStock": {
          //       "title": "до 25 июля",
          //       "value": "скидка 10%"
          //     },
          //     "schemaImage": "https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg"
          //
          //   },
          //   {
          //     "id": "2",
          //     "city": "Алматы",
          //     "buildName": "Crocus City",
          //     "rooms": "3",
          //     "discountedPriceInt": 45000000,
          //     "address": "Алматы, пр. Улы Дала, ост. ЖК Кмала-1",
          //     "offersLeft": {
          //       "title": "Квартир осталось",
          //       "count": 4
          //     },
          //     "priceMWithDiscount": "от 101 млн ₸",
          //     "priceMWithoutDiscount": "от 333 млн ₸",
          //     "endOfStock": {
          //       "title": "до 25 июля",
          //       "value": "скидка 10%"
          //     },
          //     "schemaImage": "https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg"
          //
          //   }
          // ]
        }
      }

    })
    const sliderOtherBuilds = reactive([

        {
          "id": "1",
          "city": "Нур-Султан",
          "buildName": "Crocus City",
          "rooms": "3",
          "discountedPriceInt": 45000000,
          "address": "astana, пр. Улы Дала, ост. ЖК Кмала-1",
          "offersLeft": {
            "title": "Квартир осталось",
            "count": 4
          },
          "priceMWithDiscount": "от 101 млн ₸",
          "priceMWithoutDiscount": "от 333 млн ₸",
          "endOfStock": {
            "title": "до 25 июля",
            "value": "скидка 10%"
          },
          "schemaImage": "https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg"

        },
        {
          "id": "2",
          "city": "Алматы",
          "buildName": "Crocus Citysss",
          "rooms": "3",
          "discountedPriceInt": 45000000,
          "address": "Алматы, пр. Улы Дала, ост. ЖК Кмала-1",
          "offersLeft": {
            "title": "Квартир осталось",
            "count": 4
          },
          "priceMWithDiscount": "от 101 млн ₸",
          "priceMWithoutDiscount": "от 333 млн ₸",
          "endOfStock": {
            "title": "до 25 июля",
            "value": "скидка 10%"
          },
          "schemaImage": "https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg"

        },
        {
          "id": "1",
          "city": "Нур-Султан",
          "buildName": "Crocus City",
          "rooms": "3",
          "discountedPriceInt": 45000000,
          "address": "astana, пр. Улы Дала, ост. ЖК Кмала-1",
          "offersLeft": {
            "title": "Квартир осталось",
            "count": 4
          },
          "priceMWithDiscount": "от 101 млн ₸",
          "priceMWithoutDiscount": "от 333 млн ₸",
          "endOfStock": {
            "title": "до 25 июля",
            "value": "скидка 10%"
          },
          "schemaImage": "https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg"

        },
        {
          "id": "2",
          "city": "Алматы",
          "buildName": "Crocus Citysss",
          "rooms": "3",
          "discountedPriceInt": 45000000,
          "address": "Алматы, пр. Улы Дала, ост. ЖК Кмала-1",
          "offersLeft": {
            "title": "Квартир осталось",
            "count": 4
          },
          "priceMWithDiscount": "от 101 млн ₸",
          "priceMWithoutDiscount": "от 333 млн ₸",
          "endOfStock": {
            "title": "до 25 июля",
            "value": "скидка 10%"
          },
          "schemaImage": "https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg"

        },
        {
          "id": "1",
          "city": "Нур-Султан",
          "buildName": "Crocus City",
          "rooms": "3",
          "discountedPriceInt": 45000000,
          "address": "astana, пр. Улы Дала, ост. ЖК Кмала-1",
          "offersLeft": {
            "title": "Квартир осталось",
            "count": 4
          },
          "priceMWithDiscount": "от 101 млн ₸",
          "priceMWithoutDiscount": "от 333 млн ₸",
          "endOfStock": {
            "title": "до 25 июля",
            "value": "скидка 10%"
          },
          "schemaImage": "https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg"

        },
        {
          "id": "2",
          "city": "Алматы",
          "buildName": "Crocus Citysss",
          "rooms": "3",
          "discountedPriceInt": 45000000,
          "address": "Алматы, пр. Улы Дала, ост. ЖК Кмала-1",
          "offersLeft": {
            "title": "Квартир осталось",
            "count": 4
          },
          "priceMWithDiscount": "от 101 млн ₸",
          "priceMWithoutDiscount": "от 333 млн ₸",
          "endOfStock": {
            "title": "до 25 июля",
            "value": "скидка 10%"
          },
          "schemaImage": "https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg"

        },
        {
          "id": "1",
          "city": "Нур-Султан",
          "buildName": "Crocus City",
          "rooms": "3",
          "discountedPriceInt": 45000000,
          "address": "astana, пр. Улы Дала, ост. ЖК Кмала-1",
          "offersLeft": {
            "title": "Квартир осталось",
            "count": 4
          },
          "priceMWithDiscount": "от 101 млн ₸",
          "priceMWithoutDiscount": "от 333 млн ₸",
          "endOfStock": {
            "title": "до 25 июля",
            "value": "скидка 10%"
          },
          "schemaImage": "https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg"

        },
        {
          "id": "2",
          "city": "Алматы",
          "buildName": "Crocus Citysss",
          "rooms": "3",
          "discountedPriceInt": 45000000,
          "address": "Алматы, пр. Улы Дала, ост. ЖК Кмала-1",
          "offersLeft": {
            "title": "Квартир осталось",
            "count": 4
          },
          "priceMWithDiscount": "от 101 млн ₸",
          "priceMWithoutDiscount": "от 333 млн ₸",
          "endOfStock": {
            "title": "до 25 июля",
            "value": "скидка 10%"
          },
          "schemaImage": "https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg"

        }

    ])
    return {
      builds,
      sliderOtherBuilds
    }
  }
}
</script>

<style lang="scss">
.container{
    background-image: url("~assets/image/bg.svg"), url("~assets/image/bg2.svg"), url("~assets/image/bg3.svg");
    background-size: auto, auto, auto;
    background-position: 100% 100%, 0% 0%, 50% 0%;
    background-repeat: no-repeat;
  @media (max-width: 900px){
    background-size: 30rem, 39rem, auto;
  }
  @media (max-width: 400px){
    background-size: 30rem, 39rem, auto;
  }
}
.block-indent{
  margin-bottom: 8rem ;
}
</style>
