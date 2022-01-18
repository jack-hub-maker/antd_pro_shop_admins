/*
 * @Author: your name
 * @Date: 2021-10-28 18:01:14
 * @LastEditTime: 2021-11-18 14:07:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /archives-web/src/pages/reportManagement/test/myProFormText.tsx
 */
import { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import type { FieldProps, ProFormFieldItemProps } from '@ant-design/pro-form/lib/interface';
import type { InputProps } from 'antd';
import type { PasswordProps, TextAreaProps } from 'antd/lib/input';

interface IProps {
  isShow?: boolean;
  fieldProps?: FieldProps & InputProps & PasswordProps & TextAreaProps;
  type?: 'password' | 'textArea';
  formProps?: ProFormFieldItemProps<InputProps>;
  className?: string;
  disabled?: boolean;
}
const MyProFormText: React.FC<IProps> = (props) => {
  const createEl = () => {
    const { formProps, fieldProps, className } = props;
    if (props.isShow === false) {
      return null;
    }
    let el = (
      <ProFormText
        // 文本框去除首位空格  有name属性生效
        getValueFromEvent={(e) => {
          return e.target.value.toString().replace(/(^\s*)|(\s*$)/g, '');
        }}
        {...formProps}
        fieldProps={{ className: `${className}`, disabled: props.disabled, ...fieldProps }}
      />
    );

    if (props.type === 'password') {
      el = <ProFormText.Password {...formProps} fieldProps={{ ...fieldProps }} />;
    }
    if (props.type === 'textArea') {
      el = <ProFormTextArea {...formProps} fieldProps={{ ...fieldProps }} />;
    }
    return el;
  };

  return createEl();
};

export default MyProFormText;
