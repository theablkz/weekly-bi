<template>
  <div class="update-modal">
    <div class="update-modal-box">
      <h2>форма добавления скидок</h2>
      <form class="indent_bottom-h3" @submit.prevent="sendDiscount">
        <label for="buildId">buildId
          <select v-model="updateData.guid" name="buildId" id="buildId">
            <option v-for="item in buildsName" :value="item.guid">{{item.name}}</option>
          </select>
        </label>
        <label for="discountValue">выберите для чего распространяется скидка
          <select v-model="updateData.types" name="discountType" multiple id="discountType">
            <option value="office">офисы</option>
            <option value="flat">квартиры</option>
            <option value="parking">парковки</option>
            <option value="storage">кладовые</option>
          </select>
        </label>
        <label for="discountValue">Значение скидки<input v-model="updateData.value" id="discountValue" type="text"></label>
        <label for="discountDate">Действует до<input v-model="updateData.date" id="discountDate" type="date"></label>
        <button>редактировать</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'updateDiscount',
    props: ['updateData', 'buildsName'],
    methods: {
      sendDiscount(){
        this.$emit('updateDiscount')
      }
    }
  }
</script>

<style lang="scss" scoped>
.update-modal{
  background-color: rgba(45, 62, 80, .95);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .update-modal-box{
    margin: auto;
    max-width: 700px;
  }
}
</style>
