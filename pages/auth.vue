<template>
<div class="grid">
  <div class="grid-col_1-6">
    <form @submit.prevent="authSend" >
      <div class="indent_bottom-h3">
        <label for="login">
          <p>login</p>
          <input v-model="login" id="login" type="text">
        </label>
        <label for="passwd">
          <p>password</p>
          <input v-model="password" id="passwd" type="password">
        </label>
      </div>
      <button>Отправить</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
name: "auth",
  data: () => ({
    login: '',
    password: ''
  }),
  methods: {
    authSend(){
      const encodedUserPswd = btoa(`${this.login}:${this.password}`);
      this.$axios.$get('http://offersapi.bi.group/admin/login', {
        headers: {
          Authorization: `Basic ${encodedUserPswd}`
        }
      }).then(res => {
        console.log(res)
        this.$cookies.set('token', encodedUserPswd, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$router.push('/admin')
      }).catch(err => {
        console.error('not auth')
      })

    }
  }
}
</script>

<style scoped>

</style>
