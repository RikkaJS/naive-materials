# Form 表单

使用 JSON 创建不算复杂的表单

## 演示

<script setup lang="ts">
import { Basic, Path, Hook, Nested, Special, Verify, Linkage } from './demos'
</script>

### 基础

使用表单的基础示例，只有一个输入框

<Basic />

::: details 显示代码
::: code-group
```ts
const form: FormProps = {
  props: {
    labelWidth: 80,
  },
  action: true,
  items: [
    {
      field: 'name',
      label: '姓名',
      defaultValue: 'Rikka',
      component: {
        name: 'Input',
        props: {
          placeholder: '请输入姓名',
        },
        slots: {
          suffix: () => 'suffix',
        },
      },
    },
  ],
}
```
```html
<RForm v-bind="form" />
```
:::

### 多级路径

有时数据可能是多层级的，此时需要使用某层级的值

<Path />

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

### 钩子函数

表单在取值或赋值时的钩子函数

<Hook />

## Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | `NForm` 的属性 | `FormProps` | - |
| gridProps | `NGrid` 的属性 | `GridProps` | - |
| items | 子组件内容，详情见 FormItem Props | `Array<FormItemProps>` | `[]` |
| action | 是否显示提交、重置按钮，或修改按钮属性，详情见 FormAction Type | `boolean \| FormAction` | `false` |

### FormAction Properties

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| submit | 提交按钮属性 | `{ title: string } & NButtonProps` | `{ title: '提交', type: 'primary' }` |
| reset | 重置按钮属性 | `{ title: string } & NButtonProps` | `{ title: '重置' }` |

## FormItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | `NFormItem` 的属性 | `FormItemProps \| (ctx: FormItemContext) => FormItemProps` | - |
| giProps | `NGi` 的属性 | `GridItemProps \| (ctx: FormItemContext) => GridItemProps` | - |
| slots | `NFormItem` 的插槽 | - | - |
| field | 将值收集到表单 model 对象的路径，会覆盖 `NFormItem` 的 `path` 属性 | `string` | - |
| label | 标签信息，会覆盖 `NFormItem` 的 `label` 属性 | `string` | - |
| defaultValue | 默认值，会覆盖 `FormComponentProps` 里的 `defaultValue` 属性 | `any` | - |
| rule | 验证表单项的规则 | `FormItemRule \| Array<FormItemRule> \| (ctx: FormItemContext) => FormItemRule \| Array<FormItemRule>` | - |
| visible | 显示状态，`false \| 'none'` 隐藏不会返回表单项值，`'hidden'` 隐藏但会返回表单项值 | `true \| false \| 'visible' \| 'none' \| 'hidden' \| (ctx: FormItemContext) => true \| false \| 'visible' \| 'none' \| 'hidden'` | `true` |
| hook | 取值、赋值时的钩子函数，详情见 FormItemHook Properties | `FormItemHook` | - |
| component | 子组件内容，详情见 FormComponent Props | `FormComponentProps` | - |
| items | **嵌套组件**的子组件内容，详情见 FormItem Props | `Array<FormItemProps>` | `[]` |

### FormItemHook Properties

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| get | 表单项赋值时的钩子函数 | `(ctx: FormItemContext) => void` | - |
| set | 表单项取值时的钩子函数 | `(ctx: FormItemContext) => void` | - |

### FormItemContext Type

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 表单的值 | `Object` | `{}` |
| field | 将值收集到表单 model 对象的路径 | `string` | - |

## FormComponent Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | 组件的属性 | - | - |
| slots | 组件的插槽 | - | - |
| name | 组件的名称 | `'Card' \| 'Divider' \| 'Input' \| 'Radio' \| 'Tabs'` | - |
| items | **多子页面组件**的子组件内容，详情见 FormTabs Props | `Array<FormTabsProps>` | `[]` |

## Form Events

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| submit | 当 `action` 为 `true` 点击提交时触发 | `(model: Object) => void` |
| reset | 当 `action` 为 `true` 点击重置时触发 | `() => void` |
| validateError | 当 `action` 为 `true` 点击提交表单验证失败时触发 | `(validateCallback?: (errors?: Array<FormValidationError>) => void) => Promise<void>` |

## Form Methods

| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| getModel | 获取表单的值 | `() => Object` |
| setModel | 赋予表单的值 | `() => Object` |
| validate | 验证表单，Promise rejection 的返回值类型是 `Array<FormValidationError>` | `(validateCallback?: (errors?: Array<FormValidationError>) => void) => Promise<void>` |
| restoreValidation | 还原到未校验的状态 | `() => void` |

## Form Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| action | 自定义操作按钮 | - |
