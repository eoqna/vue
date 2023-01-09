import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../NumberBaseball/NumberBaseball';
import ReactionVelocity from '../ReactionVelocity/ReactionVelocity';
import RockScissorsPaper from '../RSP/RockScissorsPaper';
import LottoGenerator from '../Lotto/LottoGenerator';
import GameMatcher from './GameMatcher'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/number-baseball', component: NumberBaseball },
        { path: '/reaction-velocity', component: ReactionVelocity },
        { path: '/rock-scissors-paper', component: RockScissorsPaper },
        { path: '/lotto-generator', component: LottoGenerator },
        { path: '/game/:name', component: GameMatcher}
    ]
});
