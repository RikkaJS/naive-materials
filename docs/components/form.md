# Form 表单

使用 JSON 创建表单

## 演示

<script setup lang="ts">
import { Basic, Nested, Special, Verify, Linkage } from '../../src/components/form/demos/index.ts'
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

### 验证

验证表单是否填写完成

<Verify />

### 联动

表单项之间的联动，在业务中经常遇到

<Linkage />

## Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | `NForm` 的属性 | `FormProps` | - |
| gridProps | `NGrid` 的属性 | `GridProps` | - |
| items | 子组件内容，详情见 FormItem Props | `Array<FormItemProps>` | `[]` |

## FormItem Props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | `NFormItem` 的属性 | `FormItemProps \| (ctx: { model: any, field: string }) => FormItemProps` | - |
| giProps | `NGi` 的属性 | `GridItemProps \| (ctx: { model: any, field: string }) => GridItemProps` | - |
| slots | `NFormItem` 的插槽 | - | - |
| field | 将值收集到表单 model 对象的路径，会覆盖 `NFormItem` 的 `path` 属性 | `string` | - |
| label | 标签信息，会覆盖 `NFormItem` 的 `label` 属性 | `string` | - |
| defaultValue | 默认值，会覆盖 `FormComponentProps` 里的 `defaultValue` 属性 | `any` | - |
| rule | 验证表单项的规则 | `FormItemRule \| Array<FormItemRule> \| (ctx: { model: any, field: string }) => FormItemRule \| Array<FormItemRule>` | - |
| visible | 显示状态，`false \| 'none'` 隐藏不会返回表单项值，`'hidden'` 隐藏但会返回表单项值 | `true \| false \| 'visible' \| 'none' \| 'hidden' \| (ctx: { model: any, field: string }) => true \| false \| 'visible' \| 'none' \| 'hidden'` | `true` |
| component | 子组件内容，详情见 FormComponent Props | `FormComponentProps` | - |
| items | **嵌套组件**的子组件内容，详情见 FormItem Props | `Array<FormItemProps>` | `[]` |

## FormComponent Props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | 组件的属性 | - | - |
| slots | 组件的插槽 | - | - |
| name | 组件的名称 | `'Card' \| 'Divider' \| 'Input' \| 'Radio' \| 'Tabs'` | - |
| items | **多子页面组件**的子组件内容，详情见 FormTabs Props | `Array<FormTabsProps>` | `[]` |
