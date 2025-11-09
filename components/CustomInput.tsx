import React from 'react'
import { TextInput, View } from 'react-native'

const CustomInput = ({
    placeholder = "Enter text",
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = "default",
}: CustomInputProps) => {
    return (
        <View>
            <TextInput
                className='input'
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor="#888"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export default CustomInput