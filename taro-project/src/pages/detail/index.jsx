import { View } from '@tarojs/components'
import Button from '../../components/button'

import './index.scss'

const cls = {
  color: 'red'
}

export default function Index() {
  var handleTap = (event) => {
    console.log(event)
  }


    return (
      <View className='blue'>
        <Button title='labelname' text='DDD' style={cls} onClick={handleTap}></Button>
      </View>
    )

}
