<template>
  <div class="container">
    <weekly :builds="builds.offerOfTheWeek" class="block-indent" />
    <filter-builds :builds="builds" class="block-indent" />
    <slick-car class="block-indent" :otherBuilds="sliderOtherBuilds" />
  </div>
</template>

<script>
import Weekly from '~/components/weekly'
import axios from 'axios'
export default {
  scrollToTop: true,
  components: {
    FilterBuilds: () => import('@/components/filter-builds'),
    Weekly,
    SlickCar: () => import('~/components/slick-car'),
  },
  async asyncData({ app }) {
      // let one = "http://185.125.46.99:8080/api/flats"
      // let two = "http://185.125.46.99:8080/api/offices"
      // let three = "http://185.125.46.99:8080/api/storages"

      // const requestOne = axios.get(one);
      // const requestTwo = axios.get(two);
      // const requestThree = axios.get(three);

      const {apartments, offices, weekly, storages, parkings} = await axios.all([
        app.$axios.$get('http://185.125.46.99:8080/api/flats'),
        app.$axios.$get('http://bilandings.ru:8080/api/offices'),
        app.$axios.$get('http://bilandings.ru:8080/api/offer'),
        app.$axios.$get('http://bilandings.ru:8080/api/storages'),
        app.$axios.$get('http://bilandings.ru:8080/api/parkings')
        ]).then(axios.spread((...responses) => {

        return {
          apartments: responses[0],
          offices: responses[1],
          weekly: responses[2][0],
          storages: responses[3],
          parkings: responses[4]
        }
        // use/access the results
      }))

      // const apartments = await app.$axios.$get('http://185.125.46.99:8080/api/flats').then((res) => res).catch(() => [])
      // const offices = await app.$axios.$get('http://bilandings.ru:8080/api/offices').then((res) => res).catch(() => [])
      // const weekly = await app.$axios.$get('http://bilandings.ru:8080/api/offer').then(res => res).catch(() => ({}))
      // const storages = await app.$axios.$get('http://bilandings.ru:8080/api/storages').then((res) => res).catch(() => [])
      // const parkings = await app.$axios.$get('http://bilandings.ru:8080/api/parkings').then(res => res).catch(() => [])
    const builds = {
      offerOfTheWeek: weekly,
      allOffers: {

      },
    }
    if(apartments){
      builds.allOffers.apartments =  {
        name: 'Квартиры',
        offers: apartments,
      }
    }
    if(offices){
      builds.allOffers.offices =  {
        name: 'Офисы',
        offers: offices,
      }
    }
    if(parkings){
      builds.allOffers.parkings =  {
        name: 'Паркинги',
        offers: parkings
      }
    }
    if(storages){
      builds.allOffers.storages =  {
        name: 'Кладовые',
        offers: storages
      }
    }
    const sliderOtherBuilds = [
      {
        id: '1',
        city: 'Нур-Султан',
        buildName: 'Crocus City',
        rooms: '3',
        discountedPriceInt: 45000000,
        address: 'astana, пр. Улы Дала, ост. ЖК Кмала-1',
        offersLeft: {
          title: 'Квартир осталось',
          count: 4,
        },
        priceMWithDiscount: 'от 101 млн ₸',
        priceMWithoutDiscount: 'от 333 млн ₸',
        endOfStock: {
          title: 'до 25 июля',
          value: 'скидка 10%',
        },
        schemaImage:
          'https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg',
      },
      {
        id: '2',
        city: 'Алматы',
        buildName: 'Crocus Citysss',
        rooms: '3',
        discountedPriceInt: 45000000,
        address: 'Алматы, пр. Улы Дала, ост. ЖК Кмала-1',
        offersLeft: {
          title: 'Квартир осталось',
          count: 4,
        },
        priceMWithDiscount: 'от 101 млн ₸',
        priceMWithoutDiscount: 'от 333 млн ₸',
        endOfStock: {
          title: 'до 25 июля',
          value: 'скидка 10%',
        },
        schemaImage:
          'https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg',
      }
    ]
    // console.log(builds);
    return {
     builds,
     sliderOtherBuilds
    }
  },
  // setup() {
  //   const { $axios } = useContext()
  //   const apartments = useAsync(() =>
  //     $axios
  //       .$get('http://185.125.46.99:8080/api/flats')
  //       .then((res) => res)
  //       .catch(() => [])
  //   )
  //   const offices = useAsync(() =>
  //     $axios
  //       .$get('http://185.125.46.99:8080/api/offices')
  //       .then((res) => res)
  //       .catch(() => [])
  //   )
  //   const storages = useAsync(() =>
  //     $axios
  //       .$get('http://185.125.46.99:8080/api/storages')
  //       .then((res) => res)
  //       .catch(() => [])
  //   )
  //   const parkings = useAsync(() => $axios.$get('http://185.125.46.99:8080/api/parkings').then(res => res).catch(() => []))
  //   const weekly = useAsync( () => $axios.$get('http://185.125.46.99:8080/api/offer').then(res => res).catch(() => ({})) )
  //   const builds = reactive({
  //     offerOfTheWeek: weekly,
  //     allOffers: {
  //       apartments: {
  //         name: 'Квартиры',
  //         offers: apartments,
  //       },
  //       offices: {
  //         name: 'Офисы',
  //         offers: offices,
  //       },
  //       parkings: {
  //         name: 'Паркинги',
  //         offers: parkings
  //       },
  //       storages: {
  //         name: 'Кладовые',
  //         offers: storages
  //       }
  //     },
  //   })
  //   const sliderOtherBuilds = reactive([
  //     {
  //       id: '1',
  //       city: 'Нур-Султан',
  //       buildName: 'Crocus City',
  //       rooms: '3',
  //       discountedPriceInt: 45000000,
  //       address: 'astana, пр. Улы Дала, ост. ЖК Кмала-1',
  //       offersLeft: {
  //         title: 'Квартир осталось',
  //         count: 4,
  //       },
  //       priceMWithDiscount: 'от 101 млн ₸',
  //       priceMWithoutDiscount: 'от 333 млн ₸',
  //       endOfStock: {
  //         title: 'до 25 июля',
  //         value: 'скидка 10%',
  //       },
  //       schemaImage:
  //         'https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg',
  //     },
  //     {
  //       id: '2',
  //       city: 'Алматы',
  //       buildName: 'Crocus Citysss',
  //       rooms: '3',
  //       discountedPriceInt: 45000000,
  //       address: 'Алматы, пр. Улы Дала, ост. ЖК Кмала-1',
  //       offersLeft: {
  //         title: 'Квартир осталось',
  //         count: 4,
  //       },
  //       priceMWithDiscount: 'от 101 млн ₸',
  //       priceMWithoutDiscount: 'от 333 млн ₸',
  //       endOfStock: {
  //         title: 'до 25 июля',
  //         value: 'скидка 10%',
  //       },
  //       schemaImage:
  //         'https://i.pinimg.com/originals/0e/5e/ef/0e5eef0e5d7bb8219b38c7e45b732c32.jpg',
  //     }
  //   ])
  //   return {
  //     builds,
  //     sliderOtherBuilds,
  //   }
  // },
}
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
</script>

<style lang="scss">
.container {
  background-image: url('~assets/image/bg.svg'), url('~assets/image/bg2.svg'),
    url('~assets/image/bg3.svg'), url('~assets/image/bg4.svg'),
    url('~assets/image/bg5.svg'), url('~assets/image/bg6.svg');
  background-size: auto, 100rem 62rem, auto;
  background-position: top right, top left, top center, 100% 79rem, 0% 135rem, 100% 100%;
  background-repeat: no-repeat;
  @media (max-width: 1420px) {
    background-size: 30rem, 71rem, auto;
  }
  @media (max-width: 900px) {
    background-size: 30rem, 56rem, auto;
  }
  @media (max-width: 400px) {
    background-size: 30rem, 36rem, auto;
  }
}
.block-indent {
  margin-bottom: 8rem;
}
</style>
