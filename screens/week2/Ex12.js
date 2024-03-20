import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export default function Ex12() {

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>

        <View style={{ flex: 1, backgroundColor: '#fe706e' }}></View>
        <View style={{ flex: 1, backgroundColor: '#ffcb65' }}></View>
        <View style={{ flex: 1, backgroundColor: '#8bd7b1' }}></View>

      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex01")} />
    </View>

  );
}