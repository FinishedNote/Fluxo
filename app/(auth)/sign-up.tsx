import CustomInput from '@/components/CustomInput'
import { useAuth } from '@/hooks/useAuth'
import { signUpWithEmail } from '@/services/authService'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SignUp = () => {
    const { session } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignUp = async () => {
        setLoading(true)
        await signUpWithEmail(email, password, confirm)
        setLoading(false)
    }

    return (
        <View className='flex-1 items-center bg-[#020202] pt-12'>
            <Text className='text-7xl font-medium text-white'>Fluxo</Text>
            <View className="mt-6">
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
                <CustomInput placeholder="email@address.com" value={email} onChangeText={(text) => setEmail(text)} />
                <CustomInput placeholder="Password" value={password} secureTextEntry onChangeText={(text) => setPassword(text)} />
                <CustomInput placeholder="Repeat password" value={confirm} onChangeText={(text) => setConfirm(text)} secureTextEntry />
            </View>
            <TouchableOpacity className="mt-10 bg-[#F6FF00] rounded-2xl px-14 py-3" onPress={() => handleSignUp()} disabled={loading}>
                <Text className="text-2xl text-black font-medium">Get Started</Text>
            </TouchableOpacity>
            <View className='w-3/4 h-0.5 bg-[#151515] mt-6'></View>
            <Text className="mt-6 text-[#ccc] text-center">By signing up, you agree to our Terms & Conditions</Text>
            <Text className="mt-2 text-white text-center">Already have an account? <Link href="/(auth)/sign-in"><Text className='text-[#F6FF00]'>Sign in</Text></Link></Text>
        </View>
    )
}

export default SignUp