import { Slot } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function AuthLayout() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                className="bg-background h-full"
                keyboardShouldPersistTaps="handled"
            >
                <Slot />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}