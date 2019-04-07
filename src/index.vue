<template>
    <view class="container">
        <text class="text-color-primary">Login</text>
        <text-input :style="{height: 40, borderColor: 'gray', borderWidth: 1}" v-model="login"/>
        <text class="text-color-primary">Password</text>
        <text-input :style="{height: 40, borderColor: 'gray', borderWidth: 1}" v-model="password"/>
        <text class="text-color-primary">{{message}}</text>
        <Button title="Button" :on-press="onButtonTap"/>
    </view>
</template>

<script>
    import store from "./store/index";
    export default {
        data: {
            login: "",
            password: ""
        },
        computed: {
            message() {
                return store.getters.getCount
            }
        },
        methods: {
            onButtonTap: function () {
                store.dispatch('increment');
            }
        }
    };
</script>

<style>
    .container {
        background-color: white;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    .text-color-primary {
        color: blue;
    }
</style>