import { Redirect, Slot } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function AuthLayout() {
    const isAuthenticated = false; // replace with auth logic

    if (isAuthenticated) return <Redirect href="/" />

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                className="bg-[#020202] h-full"
                keyboardShouldPersistTaps="handled"
            >
                <Slot />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}