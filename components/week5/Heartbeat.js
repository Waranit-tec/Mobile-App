import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "../week3/MyIcon";
import { Text } from "react-native-paper";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";

export default function Heartbeat() {
    const [count] = useState('0');
    console.log("STATE : ",count);
    const onPressButton = () => {
        console.log("");
        let count = (count);
        console.log(output);

    };
    return (

        <View style={{ flexDirection: "row", padding: 20, justifyContent: "space-around" }}>

            <TouchableOpacity onPress={onPressButton}>
                <FontAwesome name="heart" size={30} color="red" />

            </TouchableOpacity>
            
                <Text style={{ fontSize: 20 }}>{count}</Text>
                
        </View>
    );
}