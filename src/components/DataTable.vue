<template>
  <div class="data-table-container">
    <div class="table-controls">
      <div class="export-buttons">
        <button class="export-btn" @click="exportData('copy')">Copy</button>
        <button class="export-btn" @click="exportData('csv')">CSV</button>
        <button class="export-btn" @click="exportData('excel')">Excel</button>
        <div class="show-rows">
          <span>Show</span>
          <select v-model="rowsPerPage">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span>rows</span>
        </div>
      </div>
      <div class="search-control">
        <label>Search:</label>
        <input type="text" v-model="searchQuery" class="search-input">
      </div>
    </div>

    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th @click="sortBy('entryDate')">ENTRY DATE <i class="fas fa-sort"></i></th>
            <th @click="sortBy('exitDate')">EXIT DATE <i class="fas fa-sort"></i></th>
            <th @click="sortBy('strikePrice')">STRIKE PRICE <i class="fas fa-sort"></i></th>
            <th @click="sortBy('entryPrice')">ENTRY PRICE <i class="fas fa-sort"></i></th>
            <th @click="sortBy('exitPrice')">EXIT PRICE <i class="fas fa-sort"></i></th>
            <th @click="sortBy('qt')">QT <i class="fas fa-sort"></i></th>
            <th @click="sortBy('lot')">LOT <i class="fas fa-sort"></i></th>
            <th @click="sortBy('sellSymbol')">SELL SYMBOL <i class="fas fa-sort"></i></th>
            <th @click="sortBy('pnl')">P&L <i class="fas fa-sort"></i></th>
            <th @click="sortBy('netPnl')">NET P&L <i class="fas fa-sort"></i></th>
            <th @click="sortBy('drawDown')">DRAW DOWN <i class="fas fa-sort"></i></th>
            <th @click="sortBy('symbol')">SYMBOL <i class="fas fa-sort"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredData.length === 0">
            <td colspan="12" class="no-data">No data available in table</td>
          </tr>
          <tr v-for="(item, index) in paginatedData" :key="index">
            <td>{{ item.entryDate }}</td>
            <td>{{ item.exitDate }}</td>
            <td>{{ item.strikePrice }}</td>
            <td>{{ item.entryPrice }}</td>
            <td>{{ item.exitPrice }}</td>
            <td>{{ item.qt }}</td>
            <td>{{ item.lot }}</td>
            <td>{{ item.sellSymbol }}</td>
            <td>{{ item.pnl }}</td>
            <td>{{ item.netPnl }}</td>
            <td>{{ item.drawDown }}</td>
            <td>{{ item.symbol }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination-controls">
      <div class="showing-entries">
        Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ filteredData.length }} entries
      </div>
      <div class="pagination-buttons">
        <button class="pagination-btn" @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <button class="pagination-btn" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentPage: 1,
      rowsPerPage: 10,
      searchQuery: '',
      sortColumn: null,
      sortDirection: 'asc'
    }
  },
  computed: {
    filteredData() {
      if (!this.searchQuery) {
        return this.data
      }
      
      const query = this.searchQuery.toLowerCase()
      return this.data.filter(item => {
        return Object.values(item).some(
          value => value && value.toString().toLowerCase().includes(query)
        )
      })
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.rowsPerPage) || 1
    },
    startIndex() {
      return (this.currentPage - 1) * this.rowsPerPage
    },
    endIndex() {
      const end = this.startIndex + parseInt(this.rowsPerPage)
      return Math.min(end, this.filteredData.length)
    },
    paginatedData() {
      return this.filteredData.slice(this.startIndex, this.endIndex)
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortColumn = column
        this.sortDirection = 'asc'
      }
      
      this.data.sort((a, b) => {
        const valueA = a[column]
        const valueB = b[column]
        
        if (valueA === valueB) return 0
        
        if (this.sortDirection === 'asc') {
          return valueA < valueB ? -1 : 1
        } else {
          return valueA > valueB ? -1 : 1
        }
      })
    },
    exportData(type) {
      switch (type) {
        case 'copy':
          // Copy to clipboard functionality
          alert('Copy to clipboard functionality would go here')
          break
        case 'csv':
          // Export to CSV functionality
          alert('Export to CSV functionality would go here')
          break
        case 'excel':
          // Export to Excel functionality
          alert('Export to Excel functionality would go here')
          break
      }
    }
  },
  watch: {
    rowsPerPage() {
      this.currentPage = 1 // Reset to first page when changing rows per page
    },
    searchQuery() {
      this.currentPage = 1 // Reset to first page when searching
    }
  }
}
</script>

<style scoped>
.data-table-container {
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.table-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
}

.export-buttons {
  display: flex;
  align-items: center;
  gap: 5px;
}

.export-btn {
  padding: 5px 10px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.85rem;
}

.export-btn:hover {
  background-color: #e9e9e9;
}

.show-rows {
  display: flex;
  align-items: center;
  margin-left: 15px;
  gap: 5px;
  font-size: 0.85rem;
}

.show-rows select {
  padding: 3px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.search-control {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
}

.search-input {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 200px;
}

.table-responsive {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.data-table th {
  text-align: left;
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
}

.data-table th i {
  margin-left: 5px;
  font-size: 0.8rem;
  color: #999;
}

.data-table td {
  padding: 8px 15px;
  border-bottom: 1px solid #eee;
}

.no-data {
  text-align: center;
  padding: 20px !important;
  color: #666;
}

.pagination-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
  font-size: 0.85rem;
}

.pagination-buttons {
  display: flex;
  gap: 5px;
}

.pagination-btn {
  padding: 5px 10px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-btn:not(:disabled):hover {
  background-color: #e9e9e9;
}

@media screen and (max-width: 768px) {
  .table-controls {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .pagination-controls {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
