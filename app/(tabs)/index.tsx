import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';
import React from 'react';
import { Image, Text, View } from 'react-native';

const StyledLinearGradient = styled(LinearGradient)

const Index = () => {
  return (
    <View className="flex-1 items-center bg-background px-5 pt-14">
      <StyledLinearGradient
        colors={['#121212', '#020202', '#000000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="w-full h-52 rounded-3xl border border-border px-6 py-4 justify-between"
      >
        <Text className='text-2xl text-[#949494] mb-2'>Account Balance</Text>
        <Text className='text-4xl text-tintLight font-semibold mt-2'>$ 312,345.67</Text>
        <View className='flex-row justify-between items-center mt-2'>
          <Text className='text-xl text-[#949494]'>US 5475 4141 0918 1234</Text>
          <Image source={require('../../assets/mastercard.png')} />
        </View>
      </StyledLinearGradient>
      <View className='mt-10 w-full'>
        <Text className='text-tintLight text-2xl font-semibold mb-4'>Recent Transactions</Text>
      </View>
    </View>
  )
}

export default Index