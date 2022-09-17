<template>
  <button class="page_miniature-root">
    <div class="page_miniature-1" @click="route()">
      <div class="page_miniature-2"></div>
    </div>
    <div class="page_miniature-conteiner">
      <div class="page_miniature-info">
        <div class="page_miniature-name">{{ name }}</div>
        <div class="page_miniature-date">{{ correctDate() }}</div>
      </div>
      <button
        :id="PageMiniatureId"
        class="page_miniature-button"
        @click.stop="SETshowModal()"
      >
        <svg
          :class="{ active_svg: isActive }"
          width="8"
          height="20"
          viewBox="0 0 1 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cy="2" r="2" />
          <circle cy="8" r="2" />
          <circle cy="14" r="2" />
        </svg>
      </button>
    </div>
  </button>
</template>

<script>
export default {
  name: "PageMiniature",
  props: ["name", "date", "id", "favorite"],
  data() {
    return { show: false,
      PageMiniatureId: this.id + 'pm'};
  },

  methods: {
    route() {
      this.$store.commit("pagge/SET_CURENT_PAGE", {
        id: this.id,
      });
      this.$router.push("/page");
    },
    SETshowModal() {
      this.show = true;
      console.log(this.id);
      var c = document.querySelector(".app").getBoundingClientRect();
      var elem = document.getElementById(this.PageMiniatureId).getBoundingClientRect();
      var x = c.width - (elem.x + 200) > elem.x ? elem.x + 10 : elem.x - 190;
      var y = c.height - (elem.y + 61) > elem.y ? elem.y + 40 : elem.y - 81;
      this.$store.commit("pagge/toolmenu/SET_COORDS", {
        left: x + "px",
        top: y + "px",
      });
      this.$store.commit("pagge/toolmenu/SET_SHOW_MODAL", true);
      this.$store.commit("pagge/toolmenu/SET_PAGE", {
        name: this.name,
        id: this.id,
        favorite: this.favorite,
      });
    },
    correctDate() {
      return this.date.substr(0, 10);
    },
  },
  computed: {
    isActive() {
      if (!this.$store.state.pagge.toolmenu.showModal)
        return (this.show = false);
      if (this.$store.state.pagge.toolmenu.showModal) return this.show;
    },
  },
};
</script>

<style lang="scss">
.page_miniature-root {
  border-style: none;
  background: #ffffff;
  margin: 0;
  padding: 0;
  text-align: left;
  cursor: pointer;
  &:hover {
    button {
      svg {
        circle {
          fill: $black1;
        }
      }
    }
  }
}
.page_miniature-1 {
  height: $size-7;
  background: $gradient-1;
  border-radius: $radius-3;
  align-items: center;
  justify-content: center;
  padding: 4px;
  &:hover {
    background: $pink1;
  }
  &:active {
    background: $gradient-1;
  }
}
.page_miniature-2 {
  background: $grey5;
  border-radius: $radius-4;
  height: inherit;
  &:active {
    opacity: $opasity_hov;
  }
}
.page_miniature-conteiner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.page_miniature-button {
  width: 30px;
  height: 30px;
  border-style: none;
  border-radius: 15px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  &:hover {
    background: $pink1;
  }
}

.page_miniature-info {
  margin: 10px;
  display: grid;
  div {
    
    font-weight: 400;
    font-size: $font_size-1;
    text-align: left;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.active_svg {
  circle {
    fill: $black1;
  }
}
.page_miniature-name{
  margin:  5px 0;
  color: $pink1;
}
.page_miniature-date{
  color: $grey1;

}
</style>