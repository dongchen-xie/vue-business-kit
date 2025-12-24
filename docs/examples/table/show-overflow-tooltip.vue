<template>
  <bk-table :raw-data="tableData" :columns="columns" style="width: 100%"> </bk-table>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from "vue-business-kit"

interface User {
  date: string
  name: string
  address: string
}
const tableData: User[] = [
  {
    date: "2016-05-04",
    name: "Aleyna Kutzner",
    address: "Lohrbergstr. 86c, Süd Lilli, Saarland"
  },
  {
    date: "2016-05-03",
    name: "Helen Jacobi",
    address: "760 A Street, South Frankfield, Illinois"
  },
  {
    date: "2016-05-02",
    name: "Brandon Deckert",
    address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen"
  },
  {
    date: "2016-05-01",
    name: "Margie Smith",
    address: "23618 Windsor Drive, West Ricardoview, Idaho"
  }
]

const columns: TableColumnCtx[] = [
  {
    type: "selection",
    width: 55
  },
  {
    prop: "date",
    label: "Date",
    width: 120
  },
  {
    prop: "name",
    label: "Name",
    width: 120
  },
  {
    prop: "address",
    label: "use show-overflow-tooltip",
    width: 240,
    showOverflowTooltip: true
  },
  {
    prop: "address",
    label: "Address"
  }
]
</script>
