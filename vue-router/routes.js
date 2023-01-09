import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../NumberBaseball/NumberBaseball';
import ReactionVelocity from '../ReactionVelocity/ReactionVelocity';
import RockScissorsPaper from '../RSP/RockScissorsPaper';
import LottoGenerator from '../Lotto/LottoGenerator';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/number-baseball', component: NumberBaseball },
        { path: '/response-check', component: ReactionVelocity },
        { path: '/rsp', component: RockScissorsPaper },
        { path: '/lotto-generator', component: LottoGenerator },
    ]
});
