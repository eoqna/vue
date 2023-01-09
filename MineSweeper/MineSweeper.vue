<template>
    <div>
        <mine-form />
        <div>{{ timer }}</div>
        <table-component></table-component>
        <div>{{ result }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TableComponent from './TableComponent';
import MineForm from './MineForm';
import store, { INCREMENT_TIMER } from './store';

let interval;

    export default {
        store,
        components: {
            MineForm,
            TableComponent,
        },
        computed: {
            ...mapState(['timer', 'result', 'halted']),
        },
        methods: {
            
        },
        watch: {
            halted(value, oldValue) {
                if(value === false) { // false : 게임이 시작될 때
                    interval = setInterval(() => {
                        this.$store.commit(INCREMENT_TIMER);
                    }, 1000);
                } else { // 게임 중단
                    clearInterval(interval);
                }
            }
        }
    };
</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>
