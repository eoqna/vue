<template>
    <div>
        <div id="screen">{{msg }}</div>
        <div>
            <div>평균 시간 : {{ }}</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                result: [],
                state: 'waiting',
                msg: '클릭해서 시작하세요.',
            }
        },
        methods: {
            onReset() {

            },
        },
    };
</script>

<style scoped>

</style>
