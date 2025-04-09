<template>
  <nav class="navbar">
    <div class="navbar-left">
      <button class="toggle-btn" @click="toggleSidebar">
        <i class="fas" :class="isSidebarCollapsed ? 'fa-bars' : 'fa-times'"></i>
      </button>
    </div>
    <div class="navbar-center">
      <h1 class="strategy-title">{{ currentStrategy ? currentStrategy.name : 'Dashboard' }}</h1>
    </div>
    <div class="navbar-right">
      <!-- You can add user profile, notifications, etc. here -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    isSidebarCollapsed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentStrategy() {
      const strategyId = Number(this.$route.params.id);
      return this.$parent.strategies.find(s => s.id === strategyId);
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar')
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  background-color: #788F9A;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-center {
  flex: 1;
  text-align: center;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px 10px;
}

.strategy-title {
  font-size: 1.2rem;
  margin: 0;
  font-weight: normal;
}
</style>
