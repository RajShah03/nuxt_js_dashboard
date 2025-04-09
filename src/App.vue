<template>
  <div class="app-container" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
    <Navbar 
      @toggle-sidebar="toggleSidebar" 
      :isSidebarCollapsed="isSidebarCollapsed" 
    />
    <div class="content-container">
      <Sidebar 
        :isSidebarCollapsed="isSidebarCollapsed" 
        :strategies="strategies" 
        :activeStrategy="activeStrategy"
        @select-strategy="selectStrategy"
      />
      <main class="main-content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      isSidebarCollapsed: false,
      activeStrategy: 6,
      strategies: [
        { id: 1, name: 'Option SIP' },
        { id: 2, name: 'H1S-MS Range BO' },
        { id: 3, name: 'SMALL Intraday Range BO' },
        { id: 4, name: 'H1 & L1 in premium' },
        { id: 5, name: 'RSI 50 Unbs Line' },
        { id: 6, name: 'RSI 50 unit line' },
        { id: 7, name: 'MACD D line' },
        { id: 8, name: 'BB: SD. 2' },
        { id: 9, name: 'copstock curve' },
        { id: 10, name: 'Ichimoku Cloud' },
        { id: 11, name: 'Pivot points - PP and R1/S1' },
        { id: 12, name: 'MA/EMA cross' },
        { id: 13, name: 'RST' },
        { id: 14, name: 'VORTEX' }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed
    },
    selectStrategy(strategyId) {
      this.activeStrategy = strategyId
      this.$router.push({ 
        name: 'strategy', 
        params: { id: strategyId } 
      })
    }
  },
  created() {
    // Set initial route to the active strategy
    if (this.$route.name !== 'strategy') {
      this.$router.push({ 
        name: 'strategy', 
        params: { id: this.activeStrategy } 
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #fff;
}

.sidebar-collapsed .sidebar {
  width: 60px;
}

.sidebar-collapsed .sidebar .strategy-text,
.sidebar-collapsed .sidebar .dropdown-icon {
  display: none;
}

.sidebar-collapsed .main-content {
  margin-left: 60px;
}
</style>
