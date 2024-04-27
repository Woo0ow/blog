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
export default {
    name: 'Home',
    data() {
        return {
        }
    },
    components: {
        RightContainer: () => import('../RightContainer/RightContainer.vue'),
        LeftContainer: () => import('../LeftContainer.vue'),
        TopContainer: () => import('../TopContainer.vue')
    }
}
</script>
<style lang="scss" scoped></style>