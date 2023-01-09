import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // this.$store 생성
//Vue.use(axios); //this.$axios 생성

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({
    state: {
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        turn: 'O',
        winner: '',
    }, // Vue의 data와 비슷
    mutations: {
        [SET_WINNER](state, winner) {
            state.winner = winner;
        },
        [CLICK_CELL](state, { row, cell }) {
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === 'O' ? 'X' : 'O';
        },
        [RESET_GAME](state) {
            state.turn = 'O';
            state.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ];
        },
        [NO_WINNER](state) {
            state.winner = '';
        }
    }, // Vue의 computed와 비슷
    getters: {
        turnMsg(state) {
            return state.turn + '님이 승리하셨습니다.';
        },
    }, // state를 수정할 때 사용, 동기적
    actions: {

    }, // 비동기를 사용할 때, 또는 여러 뮤테이션을 연달아 실행할 때
});