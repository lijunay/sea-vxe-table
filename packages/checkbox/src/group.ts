import { defineComponent, h, provide, PropType, inject } from 'vue'
import GlobalConfig from '../../v-x-e-table/src/conf'
import XEUtils from 'xe-utils'
import { useSize } from '../../hooks/size'

import { VxeCheckboxGroupConstructor, VxeCheckboxGroupEmits, VxeCheckboxGroupPrivateMethods, CheckboxGroupPrivateMethods, CheckboxGroupMethods, VxeCheckboxGroupPropTypes, VxeFormConstructor, VxeFormPrivateMethods, VxeFormDefines } from '../../../types/all'

export default defineComponent({
  name: 'VxeCheckboxGroup',
  props: {
    modelValue: Array as PropType<VxeCheckboxGroupPropTypes.ModelValue>,
    disabled: Boolean as PropType<VxeCheckboxGroupPropTypes.Disabled>,
    size: { type: String as PropType<VxeCheckboxGroupPropTypes.Size>, default: () => GlobalConfig.checkbox.size || GlobalConfig.size }
  },
  emits: [
    'update:modelValue',
    'change'
  ] as VxeCheckboxGroupEmits,
  setup (props, context) {
    const { slots, emit } = context
    const $xeform = inject<VxeFormConstructor & VxeFormPrivateMethods | null>('$xeform', null)
    const $xeformiteminfo = inject<VxeFormDefines.ProvideItemInfo | null>('$xeformiteminfo', null)

    const xID = XEUtils.uniqueId()

    const $xecheckboxgroup = {
      xID,
      props,
      context
    } as unknown as VxeCheckboxGroupConstructor & VxeCheckboxGroupPrivateMethods

    useSize(props)

    const checkboxGroupMethods: CheckboxGroupMethods = {
      dispatchEvent (type, params, evnt) {
        emit(type, Object.assign({ $checkboxGroup: $xecheckboxgroup, $event: evnt }, params))
      }
    }

    const checkboxGroupPrivateMethods: CheckboxGroupPrivateMethods = {
      handleChecked (params, evnt) {
        const { checked, label } = params
        const checklist = props.modelValue || []
        const checkIndex = checklist.indexOf(label)
        if (checked) {
          if (checkIndex === -1) {
            checklist.push(label)
          }
        } else {
          checklist.splice(checkIndex, 1)
        }
        emit('update:modelValue', checklist)
        $xecheckboxgroup.dispatchEvent('change', Object.assign({ checklist }, params), evnt)
        // 自动更新校验状态
        if ($xeform && $xeformiteminfo) {
          $xeform.triggerItemEvent(evnt, $xeformiteminfo.itemConfig.field, checklist)
        }
      }
    }

    Object.assign($xecheckboxgroup, checkboxGroupMethods, checkboxGroupPrivateMethods)

    const renderVN = () => {
      return h('div', {
        class: 'vxe-checkbox-group'
      }, slots.default ? slots.default({}) : [])
    }

    $xecheckboxgroup.renderVN = renderVN

    provide('$xecheckboxgroup', $xecheckboxgroup)

    return renderVN
  }
})
