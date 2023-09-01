import { createInjectionKey } from '@/_utils/create-injection-key'
import type { FormGridInjection, FormModelInjection } from './interface'

export const formModelInjectionKey = createInjectionKey<FormModelInjection>('r-form-model')
export const formGridInjectionKey = createInjectionKey<FormGridInjection>('r-form-grid')
