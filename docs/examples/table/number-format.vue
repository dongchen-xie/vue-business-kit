<template>
  <bk-table
    :raw-data="tableData"
    :columns="columns"
    :number-format="{
      separator: true
    }"
  >
  </bk-table>
</template>

<script setup lang="ts">
import type { TableColumnCtx } from "vue-business-kit"

const tableData = [
  {
    product: "iPhone 15",
    price: 999.99,
    sales: 1234567,
    profit: 123456.789,
    commission: 12345.6789
  },
  {
    product: "MacBook Pro",
    price: 2499.0,
    sales: 987654,
    profit: 987654.321,
    commission: 98765.4321
  },
  {
    product: "iPad Air",
    price: 599.99,
    sales: 2468135,
    profit: 456789.123,
    commission: 45678.9123
  },
  {
    product: "Apple Watch",
    price: 399.0,
    sales: 3691470,
    profit: 789123.456,
    commission: 78912.3456
  }
]

const columns: TableColumnCtx[] = [
  {
    prop: "product",
    label: "Product"
  },
  {
    prop: "price",
    label: "Price ($)",
    width: 120
  },
  {
    prop: "sales",
    label: "Sales",
    width: 120
  },
  {
    prop: "profit",
    label: "Profit ($)",
    width: 120
  },
  {
    prop: "commission",
    label: "Commission ($)",
    width: 140,
    numberFormat: {
      separator: true,
      prec: 4
    }
  }
]
</script>
