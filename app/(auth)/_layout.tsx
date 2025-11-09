import { Redirect, Slot } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
    const isAuthenticated = false; // Replace with actual authentication logic

    if (isAuthenticated) return <Redirect href="/" />


    return (
        <Slot />
    )
}