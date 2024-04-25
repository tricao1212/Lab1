import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const Prob3 = () => {
  const array = [];
  const [ans, setAns] = useState();
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [number3, setNumber3] = useState();
  const handleFind = () => {
    array.push(number1,number2,number3);
    array.sort(function(a, b){return a - b});
    setAns(array[0]);
  };
  return (
    <View>
      <Text>Find minimum number between three numbers</Text>
      <Text>Enter first number:</Text>
      <TextInput value={number1} onChangeText={setNumber1}></TextInput>
      <Text>Enter second number:</Text>
      <TextInput value={number2} onChangeText={setNumber2}></TextInput>
      <Text>Enter third number:</Text>
      <TextInput value={number3} onChangeText={setNumber3}></TextInput>
      <Button title="Find" onPress={handleFind}></Button>
      <Text>Minimum number is: {ans}</Text>
    </View>
  );
};

export default Prob3;
