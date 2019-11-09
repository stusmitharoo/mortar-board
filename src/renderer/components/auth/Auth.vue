<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <main>
      <div class="level">
        <span class="level-item is-size-1">mortar-board</span>
      </div>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <button class="button is-info is-outlined is-large" @click="goToMaterials()">Sign-up</button>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <button class="button is-info is-outlined is-large" @click="goToMaterials()">Login</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Auth',
    methods: {
      goToMaterials() {
        this.$router.push('/materials')
      }
    }
  }
</script>
