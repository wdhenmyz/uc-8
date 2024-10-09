import { Stack } from "expo-router";
import React from "react";

// rota para listar cetegorias
export default function CategoryLayout(){
    return (
        <Stack>
            <Stack.Screen name="list" options={{title:"Categorias"}}/>

            <Stack.Screen name="[id]"/>
        </Stack>
    );
}