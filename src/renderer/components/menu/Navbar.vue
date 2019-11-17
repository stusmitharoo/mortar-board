<template>
  <nav class="level">
    <!-- Left side -->
    <div class="level-left">
      <div class="level-item">
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="text" placeholder="type name or code">
          </p>
          <p class="control">
            <button class="button">Search</button>
          </p>
        </div>
      </div>
    </div>

    <!-- Right side -->
    <div class="level-right">
      <p class="level-item">
        <a>Materials</a>
      </p>
      <p class="level-item">
        <a>Customers</a>
      </p>
      <p class="level-item">
        <a>Users</a>
      </p>
      <p class="level-item">
        <button class="button is-success" @click="logout()">Log out</button>
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  methods: {
    logout() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.level:not(:last-child) {
  margin-bottom: 0px;
}
</style>
