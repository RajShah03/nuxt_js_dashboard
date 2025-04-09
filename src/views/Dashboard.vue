<template>
  <div class="dashboard">
    <h1>Trading Strategies Dashboard</h1>
    <p>Select a strategy from the sidebar to view details.</p>
    
    <div class="strategy-cards">
      <div 
        v-for="strategy in strategies" 
        :key="strategy.id" 
        class="strategy-card"
        @click="goToStrategy(strategy.id)"
      >
        <h3>{{ strategy.name }}</h3>
        <div class="strategy-number">#{{ strategy.id }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['getAllStrategies']),
    strategies() {
      return this.getAllStrategies
    }
  },
  methods: {
    goToStrategy(id) {
      this.$router.push({ name: 'strategy', params: { id } })
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #333;
}

p {
  margin-bottom: 30px;
  color: #666;
}

.strategy-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.strategy-card {
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.strategy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.strategy-card h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #333;
}

.strategy-number {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 0.8rem;
  color: #999;
}
</style>
