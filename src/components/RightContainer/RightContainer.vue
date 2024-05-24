<template>
    <div class="right-container col-12 offset-0 offset-md-3 col-md-9 offset-xl-2 col-xl-10 pt-sm-4">
        <loading  style="width:95%;margin:0 auto;" />
        <router-view style="width: 95%;margin:0 auto;" />
    </div>
</template>
<script>
import Loading from '@/components/Loading.vue'
export default {
    name: 'RightContainer',
    data() {
        return {
        }
    },
    components: {
        Loading
    }
}
</script>
<style lang="scss" scoped>
.right-container {
    padding-top: 7rem;
}
</style>
