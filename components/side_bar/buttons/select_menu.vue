<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <Nuxt-Link class="btn" :to="link">
      <i :class="fa"></i>
      {{ txt }}
    </Nuxt-Link>
  </div>
</template>


<script>

export default {
  name: 'ButtonBar',
  props: ['link', 'txt', 'fa'],
}
</script>


<style>
.btn {
  background-color: DodgerBlue; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
}

.btn:hover {
  background-color: RoyalBlue;
}
</style>