import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout (){
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'início',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>
                }}
            />

            <Tabs.Screen
                name="categories"
                options={{
                    title: 'categorias',
                    headerShown:false,
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="archive" color={color}/>
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: 'sobre a loja',
                    headerShown:false,
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="user" color={color}/>
                }}
            />

            <Tabs.Screen
                name="menu"
                options={{
                    title: 'menu',
                    headerShown:false,
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="cogs" color={color}/>
                }}
            />


        </Tabs>
    )
}