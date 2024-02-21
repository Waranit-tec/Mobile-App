import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Ex01() {
  return (
    <View style={styles.container}>    
       <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={30}
        multiline={false}
        placeholder="Please enter your email"
        returnKeyType="next"
        onChangeText={(text)=>{}}
        defaultVaslue="Default text"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECD4D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});