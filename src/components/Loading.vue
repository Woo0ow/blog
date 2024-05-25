<template>
  <div v-if="visible" id="loader">
    <div id="loader-spinner"></div>
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
    },
    hide() {
      this.visible = false;
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
