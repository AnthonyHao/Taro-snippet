import { View, Button } from '@tarojs/components'

import './index.scss'

export default function (props) {
  const handleClick = () => {
    // props.$scope.triggerEvent('onClick', {pops: props.title + props.text + Math.random() * 100 })
    props.onTap({pops: props.title + props.text + Math.random() * 100 })
  }

  return (
    <View className='button'>
      <View className='label'>Label: {props.title}</View>
      <Button className='bg' onClick={handleClick}>PickerItem: {props.text}</Button>
    </View>
  )
}