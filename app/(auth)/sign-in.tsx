import CustomInput from '@/components/CustomInput'
import { supabase } from '@/utils/supabase'
import { router } from 'expo-router'
import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

const SignIn = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSignIn = async () => {
        if (!email || !password) return Alert.alert('Please fill in all fields')
        try {
            await supabase.auth.signInWithPassword({ email, password })
            router.replace("/");
        } catch (error: any) {
            Alert.alert(error)
        }
    }

    return (
        <View>
            <Text>SignIn</Text>
            <View>
                <CustomInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
                <CustomInput placeholder="Password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity className="mt-10 bg-[#F6FF00] rounded-2xl px-14 py-3" onPress={() => handleSignIn()}>
                    <Text className="text-2xl text-black font-medium">Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn