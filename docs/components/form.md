# Form 表单

使用 JSON 创建表单

## 演示

<script setup lang="ts">
import { Basic, Nested, Special } from '../../src/components/form/demos/index.ts'
</script>

### 基础

使用表单的基础示例，只有一个输入框

<Basic />

### 嵌套

某些情况下会在组件中嵌套一些输入框

<Nested />

### 特殊

某些情况下会使用到一些特殊或自定义组件

<Special />

## Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | `NForm` 的属性 | `FormProps` | - |
| gridProps | `NGrid` 的属性 | `GridProps` | - |
| items | 子组件内容，详情见 FormItem Props | `Array<FormItemProps>` | `[]` |

## FormItem Props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | `NFormItem` 的属性 | `FormItemProps` | - |
| giProps | `NGi` 的属性 | `GridItemProps` | - |
| slots | `NFormItem` 的插槽 | - | - |
| field | 将值收集到表单 model 对象的路径，会覆盖 `NFormItem` 的 `path` 属性 | `string` | - |
| label | 标签信息，会覆盖 `NFormItem` 的 `label` 属性 | `string` | - |
| component | 子组件内容，详情见 FormComponent Props | `FormComponentProps` | - |
| items | 嵌套组件的子组件内容，详情见 FormItem Props | `Array<FormItemProps>` | `[]` |

## FormComponent Props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | 组件的属性 | - | - |
| slots | 组件的插槽 | - | - |
| name | 组件的名称 | `Card \| Divider \| Input \| Tabs \| Tab \| TabPane` | - |
| items | 特殊组件的子组件内容，详情见 FormTabs Props | `Array<FormTabsProps>` | `[]` |
