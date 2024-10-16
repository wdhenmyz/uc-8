import { Stack } from "expo-router";
import React from "react";

export default function RootLayout(){
    return (
        <Stack 
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="index"/>

            <Stack.Screen name="(tabs)"/>

            <Stack.Screen 
                name="product/[id]" 
                options={{
                }}/>

        </Stack>
    );
}