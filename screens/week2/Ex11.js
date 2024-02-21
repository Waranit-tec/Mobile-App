import React from 'react';
import { View } from 'react-native';

export default function Ex10() {
  return (    
    <View style={{  flex : 1, flexDirection : 'column-reverse', justifyContent : 'center'}}>    
        <View style={{ backgroundColor : '#50E3C2' , flex : 1 }}></View> 
        <View style={{ backgroundColor : '#4A90E2' , flex : 1 }}></View>     
    </View>
  );
}