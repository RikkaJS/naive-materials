<script setup lang="ts">
import { NCard } from 'naive-ui'
import { computed, ref, unref } from 'vue'
import ConfigProvider from '../../demo/ConfigProvider.vue'
import { type FormProps, RForm } from '@/index'

const form: FormProps = {
  action: true,
  props: {
    labelWidth: 110,
  },
  items: [
    {
      field: 'text',
      label: 'Text',
      defaultValue: '默认文本展示',
    },
    {
      field: 'input',
      label: 'Input',
      component: {
        name: 'Input',
      },
    },
    {
      field: 'textarea',
      label: 'Textarea',
      component: {
        name: 'Input',
        props: {
          type: 'textarea',
        },
      },
    },
    {
      field: 'inputNumber',
      label: 'InputNumber',
      component: {
        name: 'InputNumber',
      },
    },
    {
      field: 'select',
      label: 'Select',
      component: {
        name: 'Select',
        props: {
          load: () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve([
                  { value: 1, label: '选项 1' },
                  { value: 2, label: '选项 2' },
                ])
              }, 1000)
            })
          },
        },
      },
    },
    {
      field: 'cascader',
      label: 'Cascader',
      component: {
        name: 'Cascader',
        props: {
          load: () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve([
                  {
                    value: 1,
                    label: '选项 1',
                    children: [
                      {
                        value: 11,
                        label: '选项 11',
                        children: [

                        ],
                      },
                      { value: 12, label: '选项 12' },
                    ],
                  },
                  { value: 2, label: '选项 2' },
                ])
              }, 1000)
            })
          },
        },
      },
    },
    {
      field: 'datePicker',
      label: 'DatePicker',
      component: {
        name: 'DatePicker',
      },
    },
    {
      field: 'timePicker',
      label: 'TimePicker',
      component: {
        name: 'TimePicker',
      },
    },
    {
      field: 'colorPicker',
      label: 'ColorPicker',
      component: {
        name: 'ColorPicker',
      },
    },
    // {
    //   field: 'autoComplete',
    //   label: 'AutoComplete',
    //   component: ({ model }: FormItemContext) => {
    //     return {
    //       name: 'AutoComplete',
    //       props: {
    //         options: ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    //           const prefix = model.autoComplete?.split('@')[0]
    //           return {
    //             label: prefix + suffix,
    //             value: prefix + suffix,
    //           }
    //         }),
    //       },
    //     }
    //   },
    // },
    {
      field: 'radio',
      label: 'Radio',
      component: {
        name: 'Radio',
        props: {
          load: () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve([
                  { value: 1, label: '选项 1' },
                  { value: 2, label: '选项 2' },
                ])
              }, 1000)
            })
          },
        },
      },
    },
    {
      field: 'radioButton',
      label: 'RadioButton',
      component: {
        name: 'Radio',
        props: {
          type: 'button',
          options: [
            { value: 1, label: '选项 1' },
            { value: 2, label: '选项 2' },
          ],
        },
      },
    },
    {
      field: 'checkbox',
      label: 'Checkbox',
      component: {
        name: 'Checkbox',
        props: {
          load: () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve([
                  { value: 1, label: '选项 1' },
                  { value: 2, label: '选项 2' },
                ])
              }, 1000)
            })
          },
        },
      },
    },
    {
      field: 'switch',
      label: 'Switch',
      component: {
        name: 'Switch',
      },
    },
    {
      field: 'slider',
      label: 'Slider',
      component: {
        name: 'Slider',
      },
    },
    {
      field: 'dynamicInput',
      label: 'DynamicInput',
      component: {
        name: 'DynamicInput',
      },
    },
    {
      field: 'dynamicInput2',
      label: 'DynamicInput',
      component: {
        name: 'DynamicInput',
        props: {
          preset: 'pair',
          keyPlaceholder: '环境变量名',
          valuePlaceholder: '环境变量值',
        },
      },
    },
    {
      field: 'dynamicTags',
      label: 'DynamicTags',
      component: {
        name: 'DynamicTags',
      },
    },
    {
      field: 'mention',
      label: 'Mention',
      component: {
        name: 'Mention',
        props: {
          load: () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve([
                  { value: '张三', label: '张三' },
                  { value: '李四', label: '李四' },
                ])
              }, 1000)
            })
          },
        },
      },
      defaultValue: '@',
    },
    {
      field: 'rate',
      label: 'Rate',
      component: {
        name: 'Rate',
      },
    },
    {
      field: 'transfer',
      label: 'Transfer',
      component: {
        name: 'Transfer',
        props: {
          load: () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve([
                  { value: 1, label: '选项 1' },
                  { value: 2, label: '选项 2' },
                ])
              }, 1000)
            })
          },
        },
      },
    },
    {
      component: {
        name: 'Divider',
        slots: {
          default: () => '分割线',
        },
      },
    },
    {
      component: {
        name: 'Card',
        props: {
          title: '住址信息',
        },
      },
      items: [
        {
          field: 'address',
          label: '地址',
          component: {
            name: 'Input',
          },
        },
        {
          field: 'zip',
          label: '邮编',
          component: {
            name: 'Input',
          },
        },
      ],
    },
    {
      component: {
        name: 'Tabs',
        props: {
          type: 'card',
        },
      },
      items: [
        {
          name: '0',
          tab: '标签1',
          items: [
            {
              field: 'tab1.input1',
              label: '输入框 1',
              component: {
                name: 'Input',
              },
            },
            {
              field: 'tab1.input2',
              label: '输入框 2',
              component: {
                name: 'Input',
              },
            },
          ],
        },
        {
          name: '1',
          tab: '标签2',
          slot: () => '标签2的内容',
        },
        {
          name: '2',
          tab: '标签3',
          items: [
            {
              field: 'tab3.input1',
              label: '输入框 3',
              component: {
                name: 'Input',
              },
            },
          ],
        },
      ],
    },
  ],
}

const formRef = ref()

const model = computed(() => unref(formRef)?.getModel())
</script>

<template>
  <ConfigProvider>
    <NCard>
      <RForm
        ref="formRef"
        v-bind="form"
      />
      <pre>{{ model }}</pre>
    </NCard>
  </ConfigProvider>
</template>
