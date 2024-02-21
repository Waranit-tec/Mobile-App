import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ borderTopWidth: 1,borderBottomWidth: 1, marginTop: 10, borderColor: "#bdbdbd",padding : 10 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row"}}>
                <View style={{ padding : 10 }}>
                    <Text style={{ fontSize : 20 , fontWeight : "bold" }}>Hotel Description</Text>
                    <Text style={{ color : '#444444' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
</Text>
                </View>
            </View>
            
        </View>    
    );
}
