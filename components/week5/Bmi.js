
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
export default function Bmi() {
    const [weight , setWeight] = useState('');
    const [height , setHeight] = useState('');
    const [bmi , setBmi] = useState('');
    const [description , setDescription] = useState('');

    
    console.log("STATE : ", weight, height, bmi);
    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));
        console.log(bmi);  //Print ค่าเก่าออกมา
        console.log(output); //Print ค่าใหม่ออกมา
        let description = "";
        if (output<18.5)
                description ="Underweight ";
        else if (output>=18.5 && output<=24.99)
                description ="Normal ";
        else if (output>=25 && output<=29.99)
                description ="Overweight ";
        else if (output>=30 && output<=39.99)
                description ="Obese ";
        else
        description ="Morbidly Obese ";

        setDescription(description)
 };

    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
                <TextInput
                    value={weight}
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    onChangeText={(newWeight) => setWeight(newWeight)}
                    placeholder="Input your weight..." />
            </View>
            {/* แถวที่ 2 */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
                <TextInput
                    value={height}
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    onChangeText={(newHeight) => setHeight(newHeight)}


                    placeholder="Input your height..." />
            </View>
            {/* แถวที่ 3 */}
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                {/* ซ้าย */}
                <View style={{ flex: 1, backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>BMI : {bmi}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>{description}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}



            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>


        </View>
    );
}