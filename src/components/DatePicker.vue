<template>
  <div class="date-picker">
    <input 
      type="text" 
      :value="modelValue" 
      @input="updateValue($event.target.value)"
      class="date-input"
      placeholder="DD/MM/YYYY"
    >
    <span class="date-icon">
      <i class="fas fa-calendar-alt"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style scoped>
.date-picker {
  position: relative;
  width: 100%;
}

.date-input {
  width: 100%;
  padding: 8px 30px 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
}

.date-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
}
</style>
