import CustomInput from '@/components/CustomInput';
import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// const { width } = Dimensions.get("window");

const SignUp = () => {
    return (
        <View className='flex-1 items-center bg-background pt-12'>
            <Text className='text-7xl font-medium text-tintLight'>Fluxo</Text>
            <View className="mt-6">
                <Text className="text-3xl text-tintLight text-center">
                    Where tech runs your
                </Text>
                <View className="flex-row justify-center mt-3">
                    <Text className="text-3xl text-tintLight mr-2">money</Text>
                    <View className="bg-primary rounded-xl px-3 py-1 justify-center">
                        <Text className="text-3xl text-black">smarter</Text>
                    </View>
                </View>
            </View>
            <View className="mt-12 px-8">
                <Text className="text-lg text-tintLight text-center">
                    Join Fluxo today and experience the future of financial management with AI-powered insights and seamless transactions.
                </Text>
            </View>
            <View className="w-full mt-12 gap-4 px-8">
                <CustomInput placeholder="Email" />
                <CustomInput placeholder="Password" secureTextEntry />
                <CustomInput placeholder="Repeat password" secureTextEntry />
            </View>
            <TouchableOpacity className="mt-10 bg-primary rounded-2xl px-14 py-3">
                <Text className="text-2xl text-black font-medium">Get Started</Text>
            </TouchableOpacity>
            <View className='w-3/4 h-0.5 bg-[#ccc] mt-6'></View>
            <Text className="mt-6 text-[#ccc] text-center">By signing up, you agree to our Terms & Conditions</Text>
            <Text className="mt-2 text-tintLight text-center">Already have an account? <Link href="/(auth)/sign-up"><Text className='text-primary'>Sign in</Text></Link></Text>
        </View>
    )
}

export default SignUp