import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Button, Image, Text, View } from 'react-native';
export default function Section8() {
    return (
        <View style={{flexDirection : "row" ,justifyContent :"space-between",borderTopWidth: 0.5,borderTopColor: 'gray',borderBottomWidth:0.5,borderBottomColor :'gray',padding : 20  }}>
            
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "column", marginTop : 1 }}>
                
                <Text style={{ fontSize : 12, color : 'black' }}>Price</Text>
                <Text style={{ fontSize: 20, color: 'red' }} >$399.99</Text>
                <Text style={{ fontSize : 12, color : 'black' }}>AVG/Night</Text>

            </View>
            <View style={{ flexDirection : "column", marginTop : 10 }}>
                <Button title="Book Now" color="red" /> 
              
            </View>
            
              
        </View>    
    );
}