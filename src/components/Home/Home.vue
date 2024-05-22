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
        RightContainer: () => ({component:import('../RightContainer/RightContainer.vue'),
	loading:Loading,
	delay:3000
	}),
        LeftContainer: () => import('../LeftContainer.vue'),
        TopContainer: () => import('../TopContainer.vue')
    }
}
</script>
<style lang="scss" scoped></style>
