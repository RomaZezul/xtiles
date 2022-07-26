<template>
  <div class="login-root">
    <div class="login-form">
        <LogIn/>
    </div>
    <div class="login-info">
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
.login-root {
  background: $grey4;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
}
.login-form {
  max-height: 614px;
  max-width: 482px;
  height: 100%;
  width: 100%;
  margin: 80px;
}
.login-info {
  max-height: 831px;
  max-width: 1000px;
  height: 100%;
  width: 100%;
}
</style>