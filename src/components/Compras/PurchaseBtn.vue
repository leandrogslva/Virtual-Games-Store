<template>
    <div>
        <v-btn
        :disabled="formOK">Finalizar Compra</v-btn>
    </div>    
</template>
<script>
export default {
    props: ['formOK']
}
</script>
<style>

</style>