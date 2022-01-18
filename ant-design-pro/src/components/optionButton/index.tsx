import type { ReactChild, ReactFragment, ReactPortal } from 'react';
import type { SpaceProps } from 'antd';
import { Space } from 'antd';
interface IProps {
  isShow?: boolean;
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
  className?: string;
  fileProps?: SpaceProps;
}
const OptionButton = (props: IProps) => {
  return (
    // {props.isShow===false?null:}
    <Space wrap className={props.className || 'action'} {...props.fileProps}>
      {props.isShow === false ? null : props.children}
    </Space>
  );
};

export default OptionButton;
