<template>
  <div v-if="visible" class="loader">
    <div class="loader-spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true;
      console.log('show')
    },
    hide() {
      this.visible = false;
      console.log('hide')
    },
  },
  created() {
    // 监听全局事件总线
    this.$root.$on('show-loading', this.show);
    this.$root.$on('hide-loading', this.hide);
  },
  beforeDestroy() {
    // 取消监听全局事件总线
    this.$root.$off('show-loading', this.show);
    this.$root.$off('hide-loading', this.hide);
  }
};
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader-spinner {
  border: 4px solid #ddd;
  border-top-color: #2479cc;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: loader-spin 1s linear infinite;
}

@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>