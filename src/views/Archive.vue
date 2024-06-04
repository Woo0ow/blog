<template>
    <div class="archive">
        <div class="m-title pt-4 pb-5 mb-2">归档</div>
        <div v-for="Item in li" :key="Item.createdAt">
            <h3>{{ Item.createdAt }}</h3>
            <ul>
                <li v-for="item in Item.data">
                    <router-link :to="'/articles/' + item.id">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Archive',
    data() {
        return {
            li: []
        }
    },
    created() {
        this.$store.dispatch('getArchive').then(() => {
            const archive = this.$store.state.archive.archive
            this.li = archive
        })
    }
}
</script>
