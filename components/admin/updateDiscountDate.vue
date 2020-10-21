<template>
  <div class="update-modal">
    <div class="update-modal-box">
      <h2>форма добавления скидок</h2>
      <form class="indent_bottom-h3" @submit.prevent="sendDiscount">
        <label for="discountDate">Действует до<input v-model="date" id="discountDate" type="date"></label>
        <div class="indent_bottom-h3">

        </div>
        <button class="indent_bottom-h2">редактировать</button>
        <button @click="$emit('close')" style="background-color: #e63b12;">отмена</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'updateDiscountDate',
    data: () => ({
      date: ''
    }),
    methods: {
      sendDiscount(){
        this.$emit('updateDiscountDate', this.date)
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
