<template>
  <div>
    <NuxtLink class="selectWS-link link" :to="`/workspace/${id}`">
      <div class="selectWS-container">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.98958 11.5C4.88958 11.5 4.80958 11.4833 4.74958 11.45C4.69624 11.4233 4.65624 11.3867 4.62958 11.34C4.60291 11.2867 4.58291 11.2367 4.56958 11.19L2.52958 5.15999C2.47624 4.99999 2.46624 4.87999 2.49958 4.79999C2.53958 4.71333 2.64291 4.64333 2.80958 4.58999C2.91624 4.55666 3.00291 4.54333 3.06958 4.54999C3.14291 4.54999 3.20291 4.57666 3.24958 4.62999C3.30291 4.67666 3.34624 4.75333 3.37958 4.85999L5.02958 9.88999L6.53958 4.89999C6.55958 4.83999 6.58291 4.78333 6.60958 4.72999C6.64291 4.67666 6.68958 4.63666 6.74958 4.60999C6.80958 4.57666 6.88958 4.55999 6.98958 4.55999C7.10291 4.55999 7.18958 4.57666 7.24958 4.60999C7.30958 4.64333 7.35291 4.68333 7.37958 4.72999C7.41291 4.76999 7.43291 4.81333 7.43958 4.85999L8.97958 9.91999L10.6196 4.87999C10.6596 4.76666 10.7029 4.68333 10.7496 4.62999C10.7962 4.56999 10.8562 4.53666 10.9296 4.52999C11.0096 4.52333 11.1062 4.53999 11.2196 4.57999C11.3329 4.61333 11.4129 4.65333 11.4596 4.69999C11.5062 4.74666 11.5296 4.80666 11.5296 4.87999C11.5296 4.95333 11.5129 5.04666 11.4796 5.15999L9.43958 11.2C9.42624 11.2467 9.40291 11.2933 9.36958 11.34C9.34291 11.3867 9.29958 11.4233 9.23958 11.45C9.18624 11.4833 9.10958 11.5 9.00958 11.5C8.91624 11.5 8.83958 11.4833 8.77958 11.45C8.71958 11.4167 8.67291 11.3733 8.63958 11.32C8.61291 11.26 8.58958 11.2067 8.56958 11.16L6.99958 6.10999L5.42958 11.16C5.41624 11.2067 5.39291 11.26 5.35958 11.32C5.32624 11.3733 5.27958 11.4167 5.21958 11.45C5.16624 11.4833 5.08958 11.5 4.98958 11.5Z"
            fill="white"
          />
          <rect
            x="0.504944"
            y="1"
            width="13"
            height="13"
            rx="6.5"
            stroke="white"
          />
        </svg>
        <div>
          {{ name }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>


<script>
export default {
  name: "SelectWs",
  props: ["id", "name"],
};
</script>


<style lang="scss">
.selectWS-link {
  width: calc($size-1 - 20px);
  height: 31px;
  background: $grey4;
  border-radius: $radius-2;
  display: flex;
  align-items: center;
  border-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  text-decoration: none;
}
.selectWS-container {
  margin-left: $size-4;
  display: flex;
  align-items: center;
  rect {
    stroke: $grey1;
  }
  path {
    stroke: $grey1;
    fill: $grey1;
  }
  div {
    margin-left: $size-5;
    font-family: $font-fredoka;
    font-weight: 400;
    font-size: $font_size-1;
    color: $grey1;
    width: 110px;
    text-align: left;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }
}
</style>
