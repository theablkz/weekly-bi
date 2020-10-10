<template>
  <div class="grid">

    <div class="grid-col_1-6">
      <h2>Недельная акция</h2>
      <form @submit.prevent="sendOfferWeelky">
        <label for="name">name<input v-model="name" id="name" type="text"></label>
        <label for="buildLink">buildLink<input v-model="buildLink" id="buildLink" type="text"></label>
        <label for="price">price<input v-model="price" id="price" type="text"></label>
        <label for="minPrice">minPrice<input v-model="minPrice" id="minPrice" type="text"></label>
        <label for="address">address<input v-model="address" id="address" type="text"></label>
        <label for="description">description<input v-model="description" id="description" type="text"></label>
        <label for="square">square<input v-model="square" id="square" type="text"></label>
        <label for="date">date<input v-model="date" id="date" type="date"></label>
        <label for="file"><input @change="onFileChange" multiple id="file" type="file"></label>
        <button>send form</button>
      </form>
    </div>
    <div class="grid-col_6-11">
      <h2>форма добавления скидок</h2>
      <form @submit.prevent="sendDiscount">
        <label for="buildId">buildId
          <select v-model="buildId" name="buildId" id="buildId">
            <option v-for="item in buildsName" :value="item.guid">{{item.name}}</option>
          </select>
        </label>
        <label for="discountValue">выберите для чего распространяется скидка
          <select v-model="discountType" name="discountType" multiple id="discountType">
            <option value="office">офисы</option>
            <option value="flat">квартиры</option>
            <option value="parking">парковки</option>
            <option value="storage">кладовые</option>
          </select>
        </label>
        <label for="discountValue">Значение скидки<input v-model="discountValue" id="discountValue" type="text"></label>
        <label for="discountDate">Действует до<input v-model="discountDate" id="discountDate" type="date"></label>
        <button>send form</button>
      </form>
    </div>
    <div class="grid-col_1-6">
      <div class="discounts-delete-box">
        <h3>имя жк</h3>
        <h3>для...</h3>
        <h3>скидка</h3>
      </div>
      <div v-for="item in discounts" class="discounts-delete-box">
        <p>{{buildsName.find(build => build.guid === item.guid).name}}</p>
        <div>
          <p v-for="offer in item.types">{{offer}}</p>
        </div>
        <p>{{item.value}}%</p>
        <button @click="sendDeleteDiscount(item.id)" class="delete-button">удалить</button>
      </div>
    </div>
    <div class="grid-col_6-11">

      <button @click="buildView.forEach(item => {item.view = true})">добавить все записи</button>
      <button @click="buildView.forEach(item => {item.view = false})">убрать все записи</button>
      <div class="views-table-box">

        <div class="views-table">
          <p>name</p>
          <p>status</p>
        </div>
        <div
          v-for="item in buildView"
          class="views-table">
          <h3>{{ item.name }}</h3>
          <input type="checkbox" v-model="item.view">
        </div>
      </div>
      <button @click="saveViewBuilds">Сохранить</button>

    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
name: "index",

  async asyncData({ app }) {
    const encodedUserPswd = app.$cookies.get('token')
    const buildsName = await app.$axios.$get('http://185.125.46.99:8080/api/projects').then(res => res).catch(() => [])
    const discounts = await app.$axios.$get('http://185.125.46.99:8080/api/discount').then(res => res).catch(() => [])
    const buildView = await app.$axios.$get('http://185.125.46.99:8080/admin/view', {
      headers: {
        Authorization: `Basic ${encodedUserPswd}`
      }
    }).then(res => res).catch(() => [])
    return {
      name: '',
      buildLink: '',
      price: '',
      minPrice: '',
      description: '',
      square: '',
      address: '',
      date: '',
      file: [],
      buildId: null,
      discountType: [],
      discountValue: '',
      discountDate: '',
      buildName: '',
      buildsName: buildsName,
      discounts,
      buildView
    }
  },

  methods: {
    sendOfferWeelky(form){
      console.log(form)
      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('buildLink', this.buildLink)
      formData.append('price', parseInt(this.price))
      formData.append('minPrice', parseInt(this.minPrice))
      formData.append('description', this.description)
      formData.append('address', this.address)
      formData.append('square', this.square)
      formData.append('date', this.date)
      this.file.forEach(item => {
        formData.append('file', item)
      })
      console.log(formData)
      const encodedUserPswd = this.$cookies.get('token')
      this.$axios.$post('http://185.125.46.99:8080/admin/offer', formData, {
        headers: {
          Authorization: `Basic ${encodedUserPswd}`
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    sendDiscount(){
      const form = {
        guid: this.buildId,
        value: parseInt(this.discountValue),
        types: this.discountType,
        status: true,
        date: this.discountDate
      }
      console.log(form)
      const encodedUserPswd = this.$cookies.get('token')
      this.$axios.$post('http://185.125.46.99:8080/admin/discount', form, {
        headers: {
          Authorization: `Basic ${encodedUserPswd}`
        }
      }).then(async res => {
        console.log(res)
        const discounts = await this.$axios.$get('http://185.125.46.99:8080/api/discount').then(res => res).catch(() => [])
        this.discounts = discounts
      }).catch(err => {
        console.log(err)
      })

    },
    sendDeleteDiscount(id){
      const encodedUserPswd = this.$cookies.get('token')
      this.$axios.$delete(`http://185.125.46.99:8080/admin/discount/${id}`, {
        headers: {
          Authorization: `Basic ${encodedUserPswd}`
        }
      }).then(async res => {
        console.log(res)
        const discounts = await this.$axios.$get('http://185.125.46.99:8080/api/discount').then(res => res).catch(() => [])
        this.discounts = discounts
      }).catch(err => {
        console.log(err)
      })
    },
    saveViewBuilds(){
      const viewBuilds = this.buildView.filter(item => item.view).map(item => item.guid)
      const encodedUserPswd = this.$cookies.get('token')
      this.$axios.$post(`http://185.125.46.99:8080/admin/view`, {
        guids: viewBuilds
      },{
        headers: {
          Authorization: `Basic ${encodedUserPswd}`
        }
      }).then(async res => {
        console.log(res)
        this.buildView = await this.$axios.$get('http://185.125.46.99:8080/admin/view', {
          headers: {
            Authorization: `Basic ${encodedUserPswd}`
          }
        }).then(res => res).catch(() => [])
      }).catch(err => {
        console.log(err)
      })
    },
    onFileChange(e) {
      console.log(e)
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.file = [...files]
    }
  }
}
</script>

<style lang="scss" scoped>
.discounts-delete-box{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: .8rem;
}
.delete-button{
  background-color: orangered;
}
.views-table-box{
  height: 500px;
  overflow-y: auto;
}
.views-table{
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 1.6rem;
  margin-bottom: 1.2rem;
  align-items: center;
  &:hover{
    background: #6a98c5;
  }
}
</style>
