<template>
    <div v-if="currentGame === 'number-baseball'">
        <number-baseball></number-baseball>
    </div>
    <div v-else-if="currentGame === 'reaction-velocity'">
        <reaction-velocity></reaction-velocity>
    </div>
    <div v-else-if="currentGame === 'rock-scissors-paper'">
        <rock-scissors-paper></rock-scissors-paper>
    </div>
    <div v-else-if="currentGame === 'lotto-generator'">
        <lotto-generator></lotto-generator>
    </div>
    <div v-else>일치하는 게임이 없습니다.</div>
</template>

<script>
import NumberBaseball from '../NumberBaseball/NumberBaseball';
import ReactionVelocity from '../ReactionVelocity/ReactionVelocity';
import RockScissorsPaper from '../RSP/RockScissorsPaper';
import LottoGenerator from '../Lotto/LottoGenerator';

    export default {
        components: {
            NumberBaseball,
            ReactionVelocity,
            RockScissorsPaper,
            LottoGenerator,
        },
        mounted() {
            console.log(this.$router);
            console.log(this.$route);
        },
        computed: {
            currentGame() {
                return this.$route.params.name;
            }
        }
    }
</script>

