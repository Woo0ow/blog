<template>
    <div>
        <div>
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
export default {
    name: 'Home',
    data() {
        return {
        }
    },
    components: {
        RightContainer: () => ({component:import('./RightContainer.vue')}),
        LeftContainer: () => ({component:import('./LeftContainer.vue')}),
        TopContainer: () => ({component:import('./TopContainer.vue')})
    }
}
</script>
<style lang="scss" scoped></style>
