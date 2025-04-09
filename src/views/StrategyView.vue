<template>
  <div class="strategy-view">
    <StrategyDetail 
      :strategyId="strategyId" 
      :strategyName="strategyName" 
    />
  </div>
</template>

<script>
import StrategyDetail from '@/components/StrategyDetail.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'StrategyView',
  components: {
    StrategyDetail
  },
  props: {
    strategyId: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getStrategyById']),
    strategy() {
      return this.getStrategyById(this.strategyId)
    },
    strategyName() {
      return this.strategy ? this.strategy.name : 'Unknown Strategy'
    }
  },
  mounted() {
    // When the component is mounted, update the store with the current strategy
    this.$store.dispatch('selectStrategy', this.strategyId)
  }
}
</script>

<style scoped>
.strategy-view {
  min-height: 100%;
}
</style>
