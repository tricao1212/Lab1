import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

const Prob4 = () => {
  const [number, setNumber] = useState();
  let temp = number;
  let ans = [];
  const [arr, setArr] = useState();
  const handleCal = () => {
    while (temp !== 1) {
      ans.push(temp);
      console.log(temp);
      temp % 2 == 0 ? temp = temp / 2 : temp = temp * 3 + 1; 
    }
    ans.push(1);
    setArr(ans);
  };
  return (
    <View>
      <Text>Hailstone sequence:</Text>
      <Text>Enter a number:</Text>
      <TextInput value={number} onChangeText={setNumber}></TextInput>
      <Button title="Calculate" onPress={handleCal}></Button>
      <Text>
        Answer:{' '}
        {arr.map((item, index) => (
          <Text key={index}>{item} </Text>
        ))}
      </Text>
    </View>
  );
};

export default Prob4;
