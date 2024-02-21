import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
export default function Section7() {
    return (
        <View style={{borderBottomWidth: 1, marginTop: 10, borderColor: "#bdbdbd",padding : 20 }}>
            <View style={{ marginTop : 10 }}>
                <Text style={{ fontSize : 20 ,fontWeight : "bold"}}>Room Type</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ flex : 1 , width : 90,height : 110, borderRadius : 20}} source={require("../../assets/week3/room-8.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize : 20 , fontWeight : "bold"}} >Standard Twin Room</Text> 
                    <View style={{ paddingLeft: 10 , marginTop : 40}}>
                        <Text style={{ fontSize : 20 , color : 'red'}} >$399.99</Text> 
                        <Text style={{ fontSize : 16 , color : 'blue'}}>Hurry Up! This is your last room!</Text>
                    </View>
                </View>
         
            </View>
        </View>    
    );
}
