<template>
    <div class="archive">
        <div class="m-title pt-4 pb-5 mb-2">归档</div>
        <div v-for="Item in li" :key="Item.id">
            <h3>{{ Item.createTime }}</h3>
            <ul>
                <li v-for="item in Item.li">
                    <router-link to="/">{{ item.text }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { getArchiveList } from '../../api/archive';
export default {
    name: 'Archive',
    data() {
        return {
            li:[]
        }
    },
    created(){
        getArchiveList().then(data=>{
            console.log(data)
            this.li=data.archiveLi
        })
    }
}
</script>
