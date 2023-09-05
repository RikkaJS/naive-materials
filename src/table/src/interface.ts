import type { DataTableProps as NDataTableProps } from 'naive-ui'

export interface DataTableProps extends NDataTableProps {
  columns: any[]
  data: Object[]
}

export interface TableProps {
  props?: DataTableProps
}
