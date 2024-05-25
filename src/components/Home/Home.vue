<template>
    <div>
        <div class="row">
            <!-- top-container -->
            <top-container />
            <!-- left-container -->
            <left-container />
            <!-- right-container -->
            <right-container />
        </div>
    </div>
</template>
<script>
import Loading from '@/components/Loading.vue'
export default {
    name: 'Home',
    data() {
        return {
        }
    },
    components: {
        RightContainer: () => ({component:import('../RightContainer/RightContainer.vue'),loading:Loading}),
        LeftContainer: () => ({component:import('../LeftContainer.vue'),loading:Loading}),
        TopContainer: () => ({component:import('../TopContainer.vue'),loading:Loading})
    }
}
</script>
<style lang="scss" scoped></style>
