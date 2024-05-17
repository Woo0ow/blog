import axios from 'axios'
import gccMD from './data/gcc-linux.md'
import sshAuthMD from './data/ssh-authorized.md'
import encode from './data/encode.md'
function getArticleList() {
    return axios.get('/article/list').then(res => {
        res.data.articleLi.unshift(
            {
                id: '1',
                title: 'ssh免密登录',
                abstract: '关于ssh的免密登录',
                tag: 'ssh',
                createdAt: '2024-5-4'
            },
            {
                id: '2',
                title: '源码编译安装gcc',
                abstract: '用编译源码的方式安装gcc',
                tag: 'gcc',
                createdAt: '2024-5-4'
            },
            {
                id: '3',
                title: '原码、反码、补码以及浮点数存储方式',
                abstract: '介绍一下原码、反码、补码以及浮点数的存储方式',
                tag: 'data-structure',
                createdAt: '2024-5-15'
            }
        )
        res.data.articleLi.sort((a,b)=>parseInt(b.createdAt.replace(/-/g,''))-parseInt(a.createdAt.replace(/-/g,'')))
        return res.data
    })
}
function getArticleDetail(id) {
    return axios.get('/article').then(res => {
        console.log(res.data)
        let data=res.data;
        switch(id){
            case '1':
                data={
                    article:{
                        id:1,
                        content:sshAuthMD
                    }
                }
                break;
            case '2':
                data={
                    article:{
                        id:2,
                        content:gccMD
                    }
                }
                break;
            case '3':
                data={
                    article:{
                        id:3,
                        content:encode
                    }
                }
        }
        return data;
    })
}
export {
    getArticleList,
    getArticleDetail
}