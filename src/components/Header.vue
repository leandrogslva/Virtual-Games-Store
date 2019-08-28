<template>
    <div>
        <component-toolbar @abreMenu="categoriesMenu = $event"></component-toolbar>
        <component-drawer :categoriesMenu="categoriesMenu"></component-drawer>
    </div>
</template>

<script>
import Drawer from './Drawer'
import Toolbar from './Toolbar'

export default {
    data(){
        return{
            categoriesMenu: false
        }
    },  
    
    components: {
        'component-drawer': Drawer,
        'component-toolbar': Toolbar,
    },
} 
</script>

<style>
</style>
