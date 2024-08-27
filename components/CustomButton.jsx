import { TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, containerStyles, handlePress, textStyles, isLoading}) => {
  return (
    <TouchableOpacity className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center`}>
      <Text className="text-primary font-psemibold text-lg">CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton