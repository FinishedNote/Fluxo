// /hooks/useAuth.ts
import { supabase } from '@/utils/supabase'
import { Session } from '@supabase/supabase-js'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'

export function useAuth() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            if (session) router.replace('/(tabs)')
        })

        const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            if (session) router.replace('/(tabs)')
        })

        return () => subscription.subscription.unsubscribe()
    }, [])

    return { session }
}
