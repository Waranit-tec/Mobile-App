import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ padding : 0  }}>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 3/1 }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
        </View>    
    );
}