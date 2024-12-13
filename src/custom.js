import {
    elFormItem,
    elFormplaceholder,
    AttrType,
    ComponentType,
    JSONType,
    compontent,
  } from "element-easy-form";
  
  const attrsJson = [
    {
      label: "类型",
      prop: "type",
      type: AttrType.COMPONENT,
      defaultValue: "text",
  
      componentName: ComponentType.ElSelect,
      attrs: {
        placeholder: "请选择类型",
        clearable: true,
      },
  
      rules: [{ required: true, message: "类型不能为空", trigger: "change" }],
      children: [
        {
          componentName: ComponentType.ElOption,
          value: "text",
          label: "文本框",
        },
        {
          componentName: ComponentType.ElOption,
          label: "密码框",
          value: "password",
        },
        {
          componentName: ComponentType.ElOption,
          label: "文本域",
          value: "textarea",
        },
        {
          componentName: ComponentType.ElOption,
          label: "数字",
          value: "number",
        },
      ],
    },
    ...elFormItem({
      label: "客户",
      prop: "customer",
    }),
    {
      type: AttrType.COMPONENT,
      label: "默认值",
      prop: "defaultValue",
  
      defaultValue: "",
      componentName: ComponentType.ElInput,
      attrs: {
        placeholder: "请输入",
      },
      rules: [{ required: false, message: "", trigger: "change" }],
    },
    elFormplaceholder("请输入"),
    {
      type: AttrType.COMPONENT,
      label: "最大输入长度",
      prop: "maxlength",
  
      defaultValue: "",
      componentName: ComponentType.ElInput,
      attrs: {
        placeholder: "请输入",
      },
      rules: [{ required: false, message: "名字不能为空", trigger: "change" }],
    },
    {
      type: AttrType.COMPONENT,
      label: "最小输入长度",
      prop: "minlength",
  
      componentName: ComponentType.ElInput,
      defaultValue: "",
      attrs: {
        placeholder: "请输入",
      },
      rules: [{ required: false, message: "名字不能为空", trigger: "change" }],
    },
  ];
  
  export const custom = [
    compontent,
    {
      title: "主表字段",
      attrs: {},
      prop: "container",
      type: AttrType.LAYOUT,
      children: [
        {
          label: "选择客户",
          formType: JSONType.ALL,
          type: AttrType.COMPONENT,
          title: "选择客户",
          formItemAttrs: {},
          attrs: {
            placeholder: "请输入",
          },
          rules: [],
          prop: "",
          attrsJson: attrsJson,
          componentName: ComponentType.ElInput, // 组件名称，用于生成代码
        },
      ],
    },
  ];