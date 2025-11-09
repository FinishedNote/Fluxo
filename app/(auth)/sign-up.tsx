import CustomInput from '@/components/CustomInput'
import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SignUp = () => {
    return (
        <View className='flex-1 items-center bg-[#020202] pt-24'>
            <Text className='text-7xl font-medium text-white'>Fluxo</Text>
            <View className="mt-8">
                <Text className="text-4xl text-white text-center">
                    Where tech runs your
                </Text>
                <View className="flex-row justify-center mt-3">
                    <Text className="text-4xl text-white mr-2">money</Text>
                    <View className="bg-[#F6FF00] rounded-xl px-3 py-1 justify-center">
                        <Text className="text-4xl text-black">smarter</Text>
                    </View>
                </View>
            </View>
            <View className="mt-12 px-8">
                <Text className="text-lg text-white text-center">
                    Join Fluxo today and experience the future of financial management with AI-powered insights and seamless transactions.
                </Text>
            </View>
            <View className="w-full mt-12 gap-4 px-8">
                <CustomInput placeholder="Email" />
                <CustomInput placeholder="Password" secureTextEntry />
                <CustomInput placeholder="Repeat password" secureTextEntry />
            </View>
            <TouchableOpacity className="mt-10 bg-[#F6FF00] rounded-2xl px-16 py-4">
                <Text className="text-2xl text-black font-medium">Get Started</Text>
            </TouchableOpacity>
            <View className='w-3/4 h-0.5 bg-[#151515] mt-6'></View>
            <Text className="mt-6 text-white">By signing up, you agree to our Terms & Conditions</Text>
            <Text className="mt-2 text-white">Already have an account? <Link href="/(auth)/sign-up"><Text className='text-[#F6FF00]'>Sign in</Text></Link></Text>
        </View>
    )
}

export default SignUp