<template>
  <div class="sidebar" :class="{ collapsed: isSidebarCollapsed }">
    <div class="logo-container">
      <img src="@/assets/logo.svg" alt="Logo" class="logo">
      <span class="logo-text" v-if="!isSidebarCollapsed">Trading Dashboard</span>
    </div>
    
    <div class="sidebar-menu">
      <div class="menu-item" @click="navigateToDashboard">
        <i class="fas fa-tachometer-alt"></i>
        <span class="menu-text" v-if="!isSidebarCollapsed">Dashboard</span>
      </div>
      
      <div class="menu-item active">
        <div class="menu-header" @click="toggleStrategiesDropdown">
          <i class="fas fa-chart-line"></i>
          <span class="menu-text" v-if="!isSidebarCollapsed">Strategies</span>
          <i v-if="!isSidebarCollapsed" class="fas dropdown-icon" 
            :class="isStrategiesOpen ? 'fa-chevron-down' : 'fa-chevron-right'"></i>
        </div>
        
        <div class="submenu" v-if="isStrategiesOpen || isSidebarCollapsed">
          <div 
            v-for="strategy in strategies" 
            :key="strategy.id" 
            class="submenu-item"
            :class="{ 'active': activeStrategy === strategy.id }"
            @click="selectStrategy(strategy.id)"
          >
            <span class="strategy-number">#{{ strategy.id }}</span>
            <span class="strategy-text" v-if="!isSidebarCollapsed">{{ strategy.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isSidebarCollapsed: {
      type: Boolean,
      default: false
    },
    strategies: {
      type: Array,
      required: true
    },
    activeStrategy: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      isStrategiesOpen: true
    }
  },
  methods: {
    toggleStrategiesDropdown() {
      if (!this.isSidebarCollapsed) {
        this.isStrategiesOpen = !this.isStrategiesOpen
      }
    },
    selectStrategy(strategyId) {
      this.$emit('select-strategy', strategyId)
    },
    navigateToDashboard() {
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
  background-color: #f5f5f5;
  transition: width 0.3s ease;
  overflow-y: auto;
  border-right: 1px solid #ddd;
}

.sidebar.collapsed {
  width: 60px;
}

.logo-container {
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid #ddd;
}

.logo {
  width: 40px;
  height: 40px;
}

.logo-text {
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
}

.sidebar-menu {
  padding: 10px 0;
}

.menu-item {
  cursor: pointer;
}

.menu-header {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #444;
}

.menu-header i {
  margin-right: 10px;
  width: 20px;
  text-align: center;
}

.menu-text {
  flex: 1;
}

.dropdown-icon {
  font-size: 12px;
}

.submenu {
  margin-left: 15px;
}

.submenu-item {
  display: flex;
  align-items: center;
  padding: 8px 15px 8px 25px;
  color: #666;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.submenu-item:hover {
  background-color: #e9e9e9;
}

.submenu-item.active {
  background-color: #e0e0e0;
  color: #333;
  font-weight: bold;
}

.strategy-number {
  margin-right: 10px;
  font-size: 12px;
  color: #888;
  min-width: 25px;
}

.sidebar.collapsed .submenu {
  margin-left: 0;
  position: relative;
}

.sidebar.collapsed .submenu-item {
  padding: 8px 10px;
  justify-content: center;
}

.sidebar.collapsed .strategy-number {
  font-size: 11px;
  margin-right: 0;
}

.menu-item.active {
  background-color: #e9e9e9;
}
</style>
