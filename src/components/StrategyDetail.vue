<template>
  <div class="strategy-detail">
    <div class="strategy-header">
      <h2>Strategy {{ strategyId }} ({{ strategyName }})</h2>
      <div class="strategy-stats">
        <span>Total P&L: {{ strategy.totalPnl }}</span>
      </div>
    </div>

    <div class="strategy-controls">
      <div class="control-row">
        <div class="control-group">
          <label>From Date</label>
          <DatePicker v-model="strategy.fromDate" />
        </div>
        <div class="control-group">
          <label>To Date</label>
          <DatePicker v-model="strategy.toDate" />
        </div>
        <div class="control-group">
          <label>Candle Timeframe</label>
          <input type="text" v-model="strategy.candleTimeframe" class="form-control">
        </div>
        <div class="control-group">
          <label>Data From</label>
          <select v-model="strategy.dataFrom" class="form-control">
            <option value="Banknifty">Banknifty</option>
            <option value="Nifty">Nifty</option>
            <option value="FinNifty">FinNifty</option>
          </select>
        </div>
        <div class="control-group">
          <label>Action Type</label>
          <select v-model="strategy.actionType" class="form-control">
            <option value="Long Entry">Long Entry</option>
            <option value="Short Entry">Short Entry</option>
          </select>
        </div>
        <div class="control-group">
          <label>Target Points</label>
          <input type="number" v-model="strategy.targetPoints" class="form-control">
        </div>
        <div class="control-group">
          <label>SL Points</label>
          <input type="number" v-model="strategy.slPoints" class="form-control">
        </div>
      </div>
    </div>

    <div class="strategy-settings">
      <h3>RSI settings</h3>
      <div class="settings-grid">
        <div class="settings-row">
          <div class="settings-group">
            <label>RSI Period</label>
            <input type="number" v-model="strategy.rsiPeriod" class="form-control">
          </div>
          <div class="settings-group">
            <label>Center Point</label>
            <input type="number" v-model="strategy.centerPoint" class="form-control">
          </div>
          <div class="settings-group">
            <label>Slippage Percentage</label>
            <input type="number" v-model="strategy.slippagePercentage" class="form-control">
          </div>
          <div class="settings-group submit-group">
            <button class="btn-submit">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <DataTable :data="tradeData" />
  </div>
</template>

<script>
import DatePicker from '@/components/DatePicker.vue'
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'StrategyDetail',
  components: {
    DatePicker,
    DataTable
  },
  props: {
    strategyId: {
      type: Number,
      required: true
    },
    strategyName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      strategy: {
        totalPnl: '0',
        fromDate: '01/01/2022',
        toDate: '31/03/2022',
        candleTimeframe: '5',
        dataFrom: 'Banknifty',
        actionType: 'Long Entry',
        targetPoints: 50,
        slPoints: 30,
        rsiPeriod: 14,
        centerPoint: 50,
        slippagePercentage: 0.05
      },
      tradeData: [] // Empty trade data as per the screenshot showing "No data available in table"
    }
  }
}
</script>

<style scoped>
.strategy-detail {
  padding: 10px 0;
}

.strategy-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.strategy-header h2 {
  font-size: 1.5rem;
  margin: 0;
}

.strategy-stats {
  color: #666;
}

.strategy-controls {
  background-color: #fff;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.control-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.control-group {
  flex: 1;
  min-width: 150px;
}

.control-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
}

.strategy-settings {
  background-color: #fff;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.strategy-settings h3 {
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
}

.settings-grid {
  display: flex;
  flex-direction: column;
}

.settings-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
}

.settings-group {
  flex: 1;
  min-width: 120px;
}

.submit-group {
  display: flex;
  align-items: flex-end;
}

.btn-submit {
  width: 100%;
  padding: 8px 15px;
  background-color: #788F9A;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background-color: #6a7f8a;
}
</style>
