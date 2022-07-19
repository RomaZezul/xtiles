<template>
  <button class="personal_page-root">
    <div class="personal_page-container">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="13" height="13" rx="6.5" stroke="white" />
        <path
          d="M3.63011 12.1742C3.60545 12.1615 3.58101 12.1506 3.55726 12.1414C4.09892 10.7698 5.43675 9.8 7.00001 9.8C8.56327 9.8 9.90111 10.7698 10.4428 12.1414C10.419 12.1506 10.3946 12.1615 10.3699 12.1742C10.2739 12.2238 10.172 12.3039 10.098 12.4282C10.0942 12.4346 10.0905 12.4411 10.0869 12.4476L8.94365 13.0192L7.00001 13.3431L5.05637 13.0192L3.91315 12.4476C3.90958 12.4411 3.90587 12.4346 3.90203 12.4282C3.82807 12.3039 3.72609 12.2238 3.63011 12.1742ZM10.8339 12.0683C10.8335 12.0684 10.8331 12.0685 10.8327 12.0685L10.8339 12.0683ZM3.1673 12.0685C3.16691 12.0685 3.16652 12.0684 3.16615 12.0683L3.1673 12.0685ZM9.30001 5.8C9.30001 7.07025 8.27027 8.1 7.00001 8.1C5.72976 8.1 4.70001 7.07025 4.70001 5.8C4.70001 4.52975 5.72976 3.5 7.00001 3.5C8.27027 3.5 9.30001 4.52975 9.30001 5.8Z"
          fill="white"
          stroke="white"
        />
      </svg>
      <div>Personal Pages</div>
    </div>
  </button>
</template>


<script>
</script>

<style lang="scss">
.personal_page-root {
  width: 150px;
  height: 24px;
  background: $color-1;
  border-radius: $radius-2;
  display: flex;
  align-items: center;
  border-style: none;
  padding: 0;
  margin: 0;
}
.personal_page-root:hover {
  background: $color-4;
  div {
    rect {
      stroke: $color-2;
    }
    path {
      stroke: $color-2;
      fill: $color-2;
    }
    div {
      color: $color-2;
    }
  }
}
.personal_page-root:active{
      background: $color-6;
  div {
    rect {
      stroke: $color-2;
    }
    path {
      stroke: $color-2;
      fill: $color-2;
    }
    div {
      color: $color-2;
    }
  }

}
.personal_page-container {
  margin-left: $size-4;
  display: flex;
  align-items: center;
  rect {
    stroke: $color-5;
  }
  path {
    stroke: $color-5;
    fill: $color-5;
  }
  div {
    margin-left: $size-5;
    font-family: $font-fredoka;
    font-style: normal;
    font-weight: 400;
    font-size: $font_size-1;
    line-height: 15px;
    color: $color-5;
  }
}
</style>