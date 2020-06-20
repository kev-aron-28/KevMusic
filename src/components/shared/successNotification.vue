<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <div class="notification is-success">
          <slot name="success"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  margin: 10px;
}
</style>
