import { supabase } from '@/utils/supabase'
import { Alert } from 'react-native'

export async function signUpWithEmail(email: string, password: string, confirm: string) {
    if (!email || !password) return Alert.alert('Please fill in all fields')
    if (password !== confirm) return Alert.alert('Passwords do not match')

    const { data: { session }, error } = await supabase.auth.signUp({ email, password })

    if (error) return Alert.alert(error.message)
    if (!session) return Alert.alert('Please check your inbox for email verification!')
}
