import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';
import React from 'react';
import { Image, Text, View } from 'react-native';

const StyledLinearGradient = styled(LinearGradient)

const Index = () => {
  return (
    <View className="flex-1 items-center bg-[#020202] px-5 pt-14">
      <StyledLinearGradient
        colors={['#111111', '#0f0f0f', '#0c0c0c']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="w-full h-52 rounded-3xl border-2 border-[#333] px-6 py-4 justify-between"
      >
        <Text className='text-2xl text-[#949494] mb-2'>Account Balance</Text>
        <Text className='text-4xl text-white font-bold mt-2'>$ 312,345.67</Text>
        <View className='flex-row justify-between items-center mt-2'>
          <Text className='text-xl text-[#949494]'>US 5475 4141 0918 1234</Text>
          <Image source={require('../../assets/mastercard.png')} className='w-6 h-4' />
        </View>
      </StyledLinearGradient>
      <View className='mt-10 w-full'>
        <Text className='text-white text-2xl font-semibold mb-4'>Recent Transactions</Text>
      </View>
    </View>
  )
}

export default Index