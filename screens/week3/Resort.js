import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Signup from '../../components/week3/Signup';
import Hotel from '../../components/week3/Hotel';
//import Card from '../../components/week3/card';
import MyIcon from '../../components/week3/MyIcon';
import Menu from '../../components/week3/Menu';
import Section1 from '../../components/week3/Section1';
import Section2 from '../../components/week3/Section2';
import Section3 from '../../components/week3/Section3';
import Section4 from '../../components/week3/Section4';
import Section5 from '../../components/week3/Section5';
import Section6 from '../../components/week3/Section6';
import Section7 from '../../components/week3/Section7';
import Section8 from '../../components/week3/Section8';
import { useNavigation } from '@react-navigation/native';

export default function Resort() {
  const navigation = useNavigation();
    return (        
        <ScrollView>
        <View style={{ flex: 1, paddingTop : 50 }}>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
          <Section7/>
          <Section8/>
          
        </View>
        
        </ScrollView>

    );
}