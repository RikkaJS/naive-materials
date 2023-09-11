import type { PaginationProps } from 'naive-ui'
import type { RowData } from 'naive-ui/es/data-table/src/interface'
import type { VNodeChild } from 'vue'

export type DataTableComponentType = 'Tag' | 'Text'

export type DataTableFormatType = 'Time'

export interface DataTableComponentProps {
  name?: DataTableComponentType
  props?: any
}

export interface DataTableFormatProps {
  name: DataTableFormatType
  rule?: string | (() => string)
}

export interface DataTableColumn {
  key?: string | number
  title?: string | (() => VNodeChild)
  props?: any
  component?: DataTableComponentProps
  format?: DataTableFormatProps
  render?: (rowData: object, rowIndex: number) => VNodeChild
}

export interface DataTableLoad {
  list: RowData[]
  total: number
}

export interface DataTableProps {
  columns?: DataTableColumn[]
  pagination?: boolean | PaginationProps
  load: (params: any) => Promise<DataTableLoad>
}

export interface TableProps {
  props: DataTableProps
  slots?: any
}
