<template>
    <b-container class="bv-example-row">
        <perfect-scrollbar>
            <b-table striped hover :items="elementos" :fields="campos"></b-table>
        </perfect-scrollbar>
        
    </b-container>
</template>

<script>
    export default {
        props: ['campos', 'elementos']
    }
</script>