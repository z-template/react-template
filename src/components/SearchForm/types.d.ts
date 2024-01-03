import React from 'react'
import { CascaderProps, DatePickerProps, InputProps, RadioGroupProps, SelectProps } from 'antd'
import { CheckboxGroupProps, CheckboxOptionType } from 'antd/es/checkbox'
import type { RangePickerProps } from 'antd/es/date-picker'
import type { FormInstance, FormItemProps, FormProps } from 'antd/es/form'

type newFormItemProps = Omit<FormItemProps, 'hidden'>
type CommonType = {
  /**
   * @description: 改写默认hidden属性
   * @param {string} 依赖更新的字段
   * @param {any} 依赖的字段值
   */
  hidden?: [string, any]
} & newFormItemProps

type FiledCascaderType = {
  itemType: 'cascader'
  options: any
  fieldProps?: CascaderProps
  placeholder?: string
} & CommonType

type FiledSelectType = {
  itemType: 'select'
  options: any
  fieldProps?: SelectProps
  placeholder?: string
} & CommonType

type FiledInputType = {
  itemType: 'input'
  fieldProps?: InputProps
  placeholder?: string
} & CommonType

type FiledRadioType = {
  itemType: 'radio'
  options: CheckboxOptionType[]
  fieldProps?: RadioGroupProps
} & CommonType

type FiledCheckBoxType = {
  itemType: 'checkbox'
  options: CheckboxOptionType[]
  fieldProps?: CheckboxGroupProps
} & CommonType

type FiledDatePickerType = {
  itemType: 'datePicker'
  fieldProps?: DatePickerProps
  placeholder?: string
} & CommonType

type FiledRangePickerType = {
  itemType: 'rangePicker'
  fieldProps?: RangePickerProps
} & CommonType

type FiledCustomType = {
  itemType: 'custom'
  fieldProps?: any
  render?: React.ReactNode
} & CommonType

type FiledHiddenType = {
  itemType: 'hidden'
  noStyle: boolean
  fieldProps?: InputProps
} & CommonType

export type SearchOption =
  | FiledCascaderType
  | FiledSelectType
  | FiledInputType
  | FiledRadioType
  | FiledCheckBoxType
  | FiledDatePickerType
  | FiledRangePickerType
  | FiledHiddenType
  | FiledCustomType

export type SearchConfig = {
  grid?: string
  hideBtn?: boolean
  loading?: boolean
  onChange?: (v: any) => void
  onReset?: () => void
  onResize?: (height: any) => void
  restBtnText?: string
  searchBtnLeft?: boolean
  searchBtnText?: string
  children?: React.ReactNode
  form: FormInstance
  options: SearchOption[]
} & FormProps
