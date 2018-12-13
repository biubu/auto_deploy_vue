<template>
    <div class = "home">
        <HelloWorld msg = "Welcome to Your Vue.js App"/>
        <div @click="increment" class="btn">+</div>
        <div >{{result}}</div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {mapState} from 'vuex';

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    mounted() {
        this.$store.dispatch('example');
    },
    methods: {
        increment() {
            this.$store.dispatch('incrementAction');
        }
    },
    computed:{
        ...mapState({
            result(){
                return this.$store.state.result;
            }
        })
    }

};
</script>
<style scoped>
    .btn{
        width: 100px;
        height: 32px;
        background: #09f;
        cursor: pointer;
        margin: 32px auto;
        color: #fff;
        line-height: 32px;
        font-size: 32px;
    }
</style>
