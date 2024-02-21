import React from 'react';
import { View } from 'react-native';

export default function Ex10() {
  return (   
    <View style={{  flex : 1, flexDirection : 'column', justifyContent : 'space-between'}}> 
        <View style={{  flex : 1, flexDirection : 'column', justifyContent : 'flex-start'}}>    
            <View style={{ backgroundColor : '#FFEBB6' , flex : 1 }}></View>    
        </View>
        <View style={{  flex : 1, flexDirection : 'row', justifyContent : 'center'}}>    
            <View style={{ backgroundColor : '#8BD7B1' , flex : 1 }}></View> 
            <View style={{ backgroundColor : '#FE706E' , flex : 2 }}></View>     
        </View>
        <View style={{  flex : 1, flexDirection : 'row', justifyContent : 'flex-end'}}>    
            <View style={{ backgroundColor : '#8BD7B1' , flex : 1 }}></View> 
            <View style={{ backgroundColor : '#FFCB65' , flex : 1 }}></View>
            <View style={{ backgroundColor : '#FE706E' , flex : 1 }}></View>     
        </View>
    </View>
  );
}