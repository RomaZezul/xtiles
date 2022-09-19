<template>
  <div class="index-root">
    <div class="main">
      <nav>
        <Logo class="index_logo" />
        <div class="sign">
          <span class="link1" @click="reg(true)"> Sign In </span>
          <button @click="reg(false)" class="index-button">Try for free</button>
        </div>
      </nav>
      <section>
        <div class="content">
          <h1>Organize your ideas & projects visually</h1>
          <p>Personal workspace favored by creatives</p>
          <button @click="reg(false)" class="index-button">
            Get started - it’s free
          </button>
        </div>
        <div class="video">
          <iframe
            src="https://www.youtube.com/embed/Uzc5bJiF2S0?autoplay=1&mute=1"
          >
          </iframe>
        </div>
      </section>
    </div>

    <!-- <span class="link1" @click="reg(true)"> Sign In </span>
    <span class="link1" @click="reg(false)"> Sign Up For Free </span> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  auth: false,
  methods: {
    reg(b) {
      this.$store.commit("SET_SHOW_FORM", b);
      this.$router.push("/user");
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/mixin/buttton_stile.scss";
.link1 {
  @include link;
}
body {
  margin: 0;
}
.index-root {
  background: linear-gradient(
    104.11deg,
    #d2dcf5 0%,
    rgba(210, 220, 245, 0) 100%,
    rgba(210, 220, 245, 0) 100%
  );
  font-family: "Fredoka", cursive;
  min-height: 100vh;
  margin: 0;
}
.main {
  padding: 23px 80px;
  height: 85vh;
  nav {
    display: flex;
    justify-content: space-between;
  }
  section {
    display: flex;
    justify-content: space-between;
    margin-top: 28px;
    height: 85%;
  }
}
.sign {
  span {
    font-size: 24px;
    margin-right: 24px;
  }
}
.index-button {
  padding: 12px 15px;
  color: #fff;
  font-weight: 400;
  background-color: #e83c70;
  border: none;
  border-radius: 6px;
  font-size: 24px;
  cursor: pointer;
}

.content {
  width: 50%;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;
    color: #384256;
    margin-bottom: 0px;
  }
  p {
    font-size: 32px;
    color: #384256;
    margin-top: 20px;
    margin-bottom: 39px;
  }
}
.video {
  width: 50%;
}
.video iframe,
video {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
}
</style>
