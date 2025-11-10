import { useAuthContext } from '@/hooks/use-auth-context'
import React from 'react'
import { Text, View } from 'react-native'

const Index = () => {
  const { profile } = useAuthContext()

  return (
    <View className="flex-1 items-center justify-center bg-[#020202]">
      <Text className='text-3xl text-white'>Home</Text>
      <Text className='text-white mt-4'>Welcome, {profile?.name || 'Guest'}!</Text>
    </View>
  )
}

export default Index