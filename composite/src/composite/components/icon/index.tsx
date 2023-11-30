import { View } from '@tarojs/components';
import './index.scss';

interface IProps {
  name: string;
  size?: string;
  color?: string;
  onClick?: () => {};
}

export default function (props: IProps) {
  const { name, size = '24px', color, onClick } = props;
  return (
    <View
      className={`composite-icon composite-icon-${name}`}
      style={{ color: color, fontSize: size }}
      onClick={onClick}
    />
  );
}
