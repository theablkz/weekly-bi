<template>
  <div class="layout">
    <div>
      <header-component>
        <logo />
        <header-contacts class="mobile_none" />
      </header-component>
      <nuxt />
    </div>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '~/components/layouts/headerComponent'
import FooterComponent from '~/components/layouts/footerComponent'
export default {
  component: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style lang="scss">
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
