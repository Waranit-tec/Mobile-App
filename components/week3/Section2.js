import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
export default function Section2() {
    return (
        <View style={{ padding : 20}}>
            {/* View ก้อนที่ 3 */}
            <View style={{ marginTop : -50 , padding : 20,backgroundColor : '#f5f5f5' , borderRadius : 10 }}>
                
                <View>
                    <Text style={{ fontSize : 20 ,textAlign : 'center', fontWeight: 'bold'}}>Hilton San Francisco</Text>
                </View>
                {/* View ก้อนที่ 4 */}
                {/* <View style={{ flexDirection : "row", marginTop : 10  }}> */}

                    <View style = {{alignItems : "center"}}>
                        <View style={{ flexDirection : "row"}}>
                            <FontAwesome name="star" size={20} color="orange" />
                            <FontAwesome name="star" size={20} color="orange" />
                            <FontAwesome name="star" size={20} color="orange" />
                            <FontAwesome name="star" size={20} color="orange" />
                            <FontAwesome name="star-half" size={20} color="orange" />
                        </View>
                    </View>
                {/* </View> */}
                {/* View ก้อนที่ 5 */}
                <View style={{ marginTop : 10 }}>
                    <Text  style={{ fontSize : 14,textAlign : 'center' }} >Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                </View>
            </View>
        </View>    
    );
}
