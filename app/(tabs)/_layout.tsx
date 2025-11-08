import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 60,
                paddingTop: 10,
                backgroundColor: "#020202",
                borderTopWidth: 1,
                borderTopColor: "#151515",
            },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Ionicons
                            name="home"
                            color={focused ? "#fff" : "#888"}
                            size={size}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="transfers"
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Ionicons
                            name="albums"
                            color={focused ? "#fff" : "#888"}
                            size={size}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Ionicons
                            name="person"
                            color={focused ? "#fff" : "#888"}
                            size={size}
                        />
                    )
                }}
            />
        </Tabs>
    )
}