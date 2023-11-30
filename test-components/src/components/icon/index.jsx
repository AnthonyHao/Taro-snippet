import { View } from '@tarojs/components';
import './index.scss';


export default function (props) {
  const { name, size = '24px', color, onClick } = props;
  return (
    <View
      className={`composite-icon composite-icon-${name}`}
      style={{ color: color, fontSize: size }}
      onClick={onClick}
    >
      { name }
    </View>
  );
}
