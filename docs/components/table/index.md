# Table 表格

使用 JSON 创建不算复杂的表格

## 演示

<script setup lang="ts">
import { Basic, Filter, Component, Pagination, Slot, Format } from './demos'
</script>

### 基础

使用表格的基础示例

::: raw
<Basic />
:::

### 渲染组件

默认为渲染文本，还可以渲染成其他组件

::: raw
<Component />
:::

### 格式化渲染

默认为渲染文本数据，还可以格式化渲染的数据

::: raw
<Format />
:::

### 分页

有时需要分页显示很多数据

:::raw
<Pagination />
:::

### 筛选

当需要筛选数据的时候，注意 `remote` 属性默认为 `true`

::: raw
<Filter />
:::

### 插槽

可以自定义表格的 `Loading` 和 `Empty` 样式

::: raw
<Slot />
:::

## Table Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | 表格组件内容，详情见 DataTable Props | `DataTableProps` | - |

## DataTable Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 需要展示的列，详情见 DataTableColumn Properties | `Array<DataTableColumn>` | `[]` |
| pagination | 分页，详情见 Pagination Props | `boolean \| object` | `true` |
| load | 加载数据函数 | `(params: any) => Promise<{ list: Array<RowData>, total: number }>` | - |

### DataTableColumn Properties

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 这一列的 key，不可重复 | `string \| number` | - |
| title | 列的 title 信息，可以是渲染函数 | `string \| (() => VNodeChild)	` | - |
| props | `DataTableColumn` 的属性 | `DataTableColumn` | - |
| component | 渲染组件，渲染这一列的每一行的单元格，详情见 DataTableComponent Props | `DataTableComponentProps` | - |
| format | 格式化渲染内容，详情见 DataTableFormat Props | `DataTableFormatProps` | - |
| render | 渲染函数，渲染这一列的每一行的单元格 | `(rowData: object, rowIndex: number) => VNodeChild	` | - |

### DataTableComponent Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 渲染组件名称 | `'Text' \| 'Tag'` | - |
| props | 渲染组件属性 | - | - |

### DataTableFormat Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 格式化渲染名称 | `'Time'` | - |
| rule | 格式化渲染规则 | `string \| () => string` | - |

## Table Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| empty | 表格数据为空时的展示 | - |
| loading | 表格 loading 时的展示 | - |
