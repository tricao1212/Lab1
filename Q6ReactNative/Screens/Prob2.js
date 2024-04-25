import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native';

const Prob2 = () => {
  const [sum, setSum] = useState();
  const [number, setNumber] = useState(0);
  const handleCal = () => {
    const firstDigit = Number(number.charAt(0));
    const lastDigit = Number(number.charAt(number.length - 1));
    setSum(firstDigit + lastDigit);
  }
  return (
    <View>
        <Text>Calculate sum of first digit and last digit of a number</Text>
        <Text>Enter a number:</Text>
        <TextInput value={number} onChangeText={setNumber}></TextInput>
        <Button title='Calculate' onPress={handleCal}></Button>
        <Text>Answer: {sum}</Text>
    </View>
  )
}

export default Prob2
