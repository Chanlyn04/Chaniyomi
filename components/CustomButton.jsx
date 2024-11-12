import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-gray-600 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}`}
      disabled={isLoading}
    >
      <Text className={`font-bold text-lg text-white ${textStyles}`}>{title}</Text>

      {isLoading && (
 <ActivityIndicator
 animating={isLoading}
 color="#fff"
 size="small"
 className="ml-2"
 />
 )}


    </TouchableOpacity>
  )
}

export default CustomButton