<template>
    <div>
        <div id="left-container" :class="`col-6 left-container collapse collapse-horizontal
             d-md-none col-md-3 col-xl-2`" style="background-color: #202020;">
            <div class="profile pt-5 d-flex justify-content-center flex-wrap">
                <img @click="() => { $router.replace({ path: '/' }).catch(err => { }); }" :src="imgSrc" alt="">
                <div class="title text-center mt-3">{{ title }}</div>
                <div class="description text-center mt-2">{{ description }}</div>

                <!-- nav -->
                <ul class="nav-container mt-4 row">
                    <li v-for="item in navLi" :key="item.id" class=" mb-2" @click="navChange(item)">
                        <router-link
                            :class="`d-flex align-items-center pt-2 pb-2 justify-content-center ${item.active ? 'nav-active' : ''}`"
                            :to="item.path">
                            <i :class="`bi ${item.icon}`"></i>
                            <span style="padding-left:1.5rem;">{{ item.text }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="d-flex justify-content-end model" style="width:100%;">
                <div class="btn d-block" @click="close" data-bs-toggle="collapse" data-bs-target="#left-container" style="color:#fff;font-size: 2rem;"><i
                        class="bi bi-arrow-bar-left"></i>
                </div>
            </div>
        </div>
        <div :class="`col-12 d-md-none ${isShow ? 'd-block' : 'd-none'}`" @click="close" data-bs-toggle="collapse" data-bs-target="#left-container"
            style="z-index:2;position:fixed;left:0;top:0; background-color: transparent;height:100vh;"></div>
        <div class="left-container col-md-3 col-xl-2 d-none d-md-block">
            <div class="profile pt-5 d-flex justify-content-center flex-wrap">
                <img :src="imgSrc" alt="">
                <div class="title text-center mt-3">{{ title }}</div>
                <div class="description text-center mt-2">{{ description }}</div>

                <!-- nav -->
                <ul class="nav-container mt-4 row">
                    <li v-for="item in navLi" :key="item.id" class=" mb-2" @click="navChange(item)">
                        <router-link
                            :class="`d-flex align-items-center pt-2 pb-2 justify-content-center ${item.active ? 'nav-active' : ''}`"
                            :to="item.path">
                            <i :class="`bi ${item.icon}`"></i>
                            <span style="padding-left:1.5rem;">{{ item.text }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LeftContainer',
    data() {
        return {
            imgSrc: require('@/assets/avatar.png'),
            title: 'hola_world',
            description: '你好，世界',
            navLi: [
                { id: 1, text: '首页', icon: 'bi-house-door', path: '/', active: true },
                { id: 2, text: '归档', icon: 'bi-folder', path: '/archive', active: false },
                { id: 3, text: '标签', icon: 'bi-tags', path: '/tags', active: false },
                { id: 4, text: '关于', icon: 'bi-info-circle', path: '/about', active: false },
                { id: 5, text: '友链', icon: 'bi-link-45deg', path: '/links', active: false }]

        }
    },
    watch: {
        '$route'(newRoute) {
            this.navLi.forEach(item => {
                item.active = newRoute.path === item.path
            })
        }
    },
    computed: {
        isShow: {
            get() {
                return this.$store.state.common.navIsShow;
            },
            set() {

            }
        }
    },
    methods: {
        navChange(item) {
            this.navLi.forEach(element => {
                element.active = false
            });
            item.active = true
        },
        close(e) {
            this.isShow = false
            this.$store.commit('toggle', false)
        }
    },
    mounted() {
        // init
        this.navLi.forEach(item => {
            item.active = this.$route.path === item.path
        })
        this.isShow = this.$store.state.common.navIsShow;
    }
}
</script>
<style lang="scss" scoped>
@media(max-width:768px) {
    .left-container {
        transition: width .2s linear !important;

    }
}

.left-container {
    background-color: #202020;

    font-size: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100vh;
    overflow: auto;
    z-index: 999;

    .profile {

        img {
            width: 9.8rem;
            height: 9.8rem;
            border-radius: 50%;
            cursor: pointer;
        }

        .title {
            font-size: 1.4rem;
            color: #fff;
            width: 100%;
        }

        .description {
            font-size: .8rem;
            color: #ddd;
        }

        .nav-container {
            font-size: 1rem;
            padding: 0;

            li {
                width: 100%;

                a {
                    color: #999;
                }

                // padding-left:3rem !important;
                &:hover a {
                    color: #fff;

                }

                i {
                    font-size: 1.3rem;
                }
            }

        }
    }
}
</style>