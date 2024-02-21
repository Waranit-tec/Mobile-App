import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{borderTopWidth: 1,borderBottomWidth: 1, marginTop: 10, borderColor: "#bdbdbd",padding : 20  }}>
            {/* View ก้อนที่ 3 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 , fontWeight : "bold"}}>Location</Text>
                <Text style={{ color : '#444444' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../../assets/week3/map.jpg")} />
            </View>
            
        </View>    
    );
}
