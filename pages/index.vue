<template>
  <div class="container">
    <loading v-if="loading" />
    <weekly :builds="builds.offerOfTheWeek" class="block-indent" />
    <filter-builds :builds="builds" class="block-indent" />
    <slick-car class="block-indent" :otherBuilds="sliderOtherBuilds" />
  </div>
</template>

<script>
import Weekly from '~/components/weekly'
import axios from 'axios'
import Loading from '~/components/loading'
export default {
  scrollToTop: true,
  components: {
    Loading,
    FilterBuilds: () => import('@/components/filter-builds'),
    Weekly,
    SlickCar: () => import('~/components/slick-car'),
  },
  data: () => ({
    loading: true
  }),
  async asyncData({ app }) {
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
      }))
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
      let buildsNames = [
        ...new Set(
          parkings
            .map((item) => item.queue.real_estate.name)
        ),
      ]
      let newParkings = []
      buildsNames.forEach(item => {
        let storagesByName = parkings.filter(name => name.queue.real_estate.name === item)
        let minStorage = storagesByName.find(fMin => fMin.price === Math.min(...storagesByName.map(item => item.price)))
        minStorage.count = storagesByName.reduce((a,b) => a+b.count, 0)
        newParkings = [...newParkings, minStorage]
      })
      builds.allOffers.parkings =  {
        name: 'Паркинги',
        offers: newParkings
      }
    }
    if(storages){
      let buildsNames = [
        ...new Set(
          storages
            .map((item) => item.queue.real_estate.name)
        ),
      ]
      let newStorages = []
      buildsNames.forEach(item => {
        let storagesByName = storages.filter(name => name.queue.real_estate.name === item)
        let minStorage = storagesByName.find(fMin => fMin.price === Math.min(...storagesByName.map(item => item.price)))
        minStorage.count = storagesByName.reduce((a,b) => a+b.count, 0)
        newStorages = [...newStorages, minStorage]
      })
      builds.allOffers.storages =  {
        name: 'Кладовые',
        offers: newStorages
      }
    }
    const sliderOtherBuilds = [
      {
        id: '1',
        buildName: 'ALA Park',
        link: 'https://bi.group/ru/project/ala-park',
        schemaImage:require('~/assets/image/build-images/Ala-park.jpg')
      },
      {
        id: '2',
        buildName: 'Besterek',
        link: 'https://bi.group/ru/project/besterek',
        schemaImage:require('~/assets/image/build-images/Besterek.jpg')
      },{
        id: '3',
        buildName: 'BI Village Deluxe',
        link: 'https://cottage.bi.group/',
        schemaImage:require('~/assets/image/build-images/bi-village-deluxe.jpg')
      },{
        id: '4',
        buildName: 'Grand Opera',
        link: 'https://grandopera.bi.group/',
        schemaImage:require('~/assets/image/build-images/grand-opera.jpg')
      },{
        id: '5',
        buildName: 'Headliner',
        link: 'https://bi.group/ru/project/headliner',
        schemaImage:require('~/assets/image/build-images/Headliner.jpg')
      },{
        id: '6',
        buildName: 'Nura Esil',
        link: 'https://nura-esil.bi-group.org/',
        schemaImage:require('~/assets/image/build-images/nura-esil.jpg')
      },{
        id: '7',
        buildName: 'President\'s Park',
        link: 'https://presidents-park.bi.group/',
        schemaImage:require("~/assets/image/build-images/President's-Park.jpg")
      },{
        id: '8',
        buildName: 'Vela Village',
        link: 'https://bi.group/ru/project/vela-village',
        schemaImage:require('~/assets/image/build-images/velavillage.jpg')
      },
    ]
    return {
     builds,
     sliderOtherBuilds
    }
  },
  mounted() {
    setTimeout(() => this.loading = false, 1000)
  }
}

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
    background-size: 30rem, 60rem, auto;
  }
  @media (max-width: 500px) {
    background-size: 30rem, 46rem, auto;
  }
  @media (max-width: 400px) {
    background-size: 30rem, 36rem, auto;
  }
}
.block-indent {
  margin-bottom: 8rem;
}
</style>
