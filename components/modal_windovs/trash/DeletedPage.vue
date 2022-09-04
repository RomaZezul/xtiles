<template >
  <div class="deleted_page-root">
    <span>{{ name }}</span>
    <div class="deleted_page-buttons">
      <div class="deleted_page-reestablish" @click="reestablish()">
        <svg
          width="18"
          height="18"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.7564 11.1331C29.1704 11.1208 29.516 11.4464 29.5284 11.8605L29.7665 19.8569C29.7788 20.271 29.4532 20.6166 29.0391 20.6289L21.0427 20.867C20.6286 20.8794 20.283 20.5537 20.2707 20.1397C20.2584 19.7256 20.584 19.38 20.998 19.3677L28.2448 19.1519L28.029 11.9051C28.0167 11.4911 28.3423 11.1455 28.7564 11.1331Z"
            fill="currentColor"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5287 19.5287C3.85091 19.789 4.32312 19.7388 4.58343 19.4166C6.60232 16.9176 10.2613 13.8047 16.0001 13.8047C21.7388 13.8047 25.3978 16.9176 27.4167 19.4166C27.677 19.7388 28.1492 19.789 28.4714 19.5287C28.7936 19.2684 28.8438 18.7961 28.5835 18.4739C26.3993 15.7703 22.3529 12.3047 16.0001 12.3047C9.64724 12.3047 5.60086 15.7703 3.41662 18.474C3.15632 18.7962 3.2065 19.2684 3.5287 19.5287Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div class="deleted_page-del" @click="del()">
        <svg
          width="15"
          height="17"
          viewBox="0 0 15 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_724_626)">
            <path
              d="M15 3.88366C14.9989 3.47763 14.8377 3.08854 14.5514 2.80143C14.2651 2.51432 13.8772 2.35257 13.4724 2.35152H11.2618V1.78142C11.2597 1.30783 11.071 0.854295 10.7367 0.519784C10.4024 0.185273 9.94982 -0.0030485 9.47762 -0.00408936H5.53025C5.05842 -0.00304355 4.6062 0.185409 4.27256 0.520032C3.93893 0.854654 3.75103 1.3082 3.74998 1.78142V2.34756H1.53551C1.1314 2.33968 0.740734 2.49314 0.449436 2.77416C0.158137 3.05518 -0.00992666 3.44075 -0.0177785 3.84605C-0.0256303 4.25135 0.127374 4.64317 0.407568 4.93533C0.687762 5.22749 1.0722 5.39604 1.4763 5.40392C1.46106 5.51816 1.45183 5.63314 1.44867 5.74836V13.7812C1.44971 14.6335 1.78775 15.4505 2.38863 16.0532C2.9895 16.6558 3.80417 16.9949 4.65393 16.9959H10.3539C11.2037 16.9949 12.0184 16.6558 12.6192 16.0532C13.2201 15.4505 13.5582 14.6335 13.5592 13.7812V5.74044C13.556 5.62522 13.5468 5.51025 13.5316 5.396C13.923 5.38081 14.2936 5.21539 14.5669 4.93394C14.8402 4.65248 14.9952 4.27649 15 3.88366ZM4.92235 1.78142C4.92339 1.62319 4.98652 1.47174 5.09808 1.35985C5.20964 1.24797 5.36065 1.18465 5.51841 1.18361H9.46578C9.54523 1.18204 9.6242 1.19631 9.69811 1.2256C9.77202 1.25489 9.83939 1.29861 9.89631 1.35422C9.95323 1.40984 9.99858 1.47625 10.0297 1.54958C10.0608 1.62292 10.0771 1.70172 10.0776 1.78142V2.34756H4.92235V1.78142ZM12.375 13.7812C12.375 14.3188 12.1621 14.8344 11.783 15.2145C11.404 15.5946 10.89 15.8082 10.3539 15.8082H4.64209C4.10608 15.8082 3.59201 15.5946 3.21299 15.2145C2.83397 14.8344 2.62104 14.3188 2.62104 13.7812V5.74044C2.62335 5.62764 2.6339 5.51516 2.65262 5.40392H12.3434C12.3641 5.5149 12.3746 5.62754 12.375 5.74044V13.7812Z"
              fill="#384256"
            />
            <path
              d="M6.19734 7.25293H5.1355V13.0291H6.19734V7.25293Z"
              fill="#384256"
            />
            <path
              d="M9.86445 7.25293H8.80261V13.0291H9.86445V7.25293Z"
              fill="#384256"
            />
          </g>
          <defs>
            <clipPath id="clip0_724_626">
              <rect width="15" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "id"],
  methods: {
    del() {
      this.$store.dispatch("trash/DELETE_PAGE", this.id);
    },
    reestablish() {
      this.$store.dispatch("trash/REESTABLISH", this.id);
    },
  },
};
</script>
<style lang="scss">
.deleted_page-root {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    
    font-weight: 400;
    font-size: $font_size-1;
    color: $grey3;
  }
}
.deleted_page-buttons {
  display: flex;
}
.deleted_page-reestablish {
  transform: rotateY(180deg);
  margin: 0 5px;
  cursor: pointer;
  height: 28px;
  width: 28px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: $grey5;
  }
}
.deleted_page-del {
  margin: 0 5px;
  cursor: pointer;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: $grey5;
  }
}
</style>