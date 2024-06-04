<template>
    <div id="app">
        <!-- top-container -->
        <top-container />
        <!-- left-container -->
        <left-container />
        <!-- right-container -->
        <right-container />
    </div>
</template>
  
<script>
export default {
    name: 'App',
    components: {
        RightContainer: () => ({component:import('./components/RightContainer.vue')}),
        LeftContainer: () => ({component:import('./components/LeftContainer.vue')}),
        TopContainer: () => ({component:import('./components/TopContainer.vue')})
    }
}
</script>
<style></style>