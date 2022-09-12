<template >
  <div id="googleButton"></div>
</template>
<script>
export default {
  beforeMount() {
    // initialize Google Sign in
    google.accounts.id.initialize({
      client_id:
        "824867412701-fgqpga536giig7p9uto5n7175q6d1195.apps.googleusercontent.com",
      auto_select: true,
      callback: this.handleCredentialResponse, //method to run after user clicks the Google sign in button
      context: "signin",
    });
    google.accounts.id.prompt();
  },
  mounted() {
    // render button
    google.accounts.id.renderButton(document.getElementById("googleButton"), {
      type: "standard",
      size: "large",
      text: "signin_with",
      shape: "rectangular",
      logo_alignment: "center",
      width: 250,
    });
  },
  methods: {
    async handleCredentialResponse(response) {
      await this.$auth.loginWith("local1", {
        data: { tokenID: response.credential },
      });
      // call your backend API here

      // the token can be accessed as: response.credential
    },
  },
};
</script>
<style lang="scss">
.google_login-root {
  width: 100%;
  height: $size-12;
  background: $white;
  border-radius: $radius-6;
  border: 1px solid $grey1;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: $font_size-1;

    margin-left: 7px;
    color: $grey1;
  }
}
.google_login-root:hover {
  cursor: pointer;
  border: 1px solid $grey2;
  img {
    opacity: 0.5;
  }
  span {
    color: $grey2;
  }
}
</style>