import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

const Prob1 = props => {
  const [fullName, setFullName] = useState(props.info.fullName);
  const [age, setAge] = useState(props.info.age);
  const [occupation, setOccupation] = useState(props.info.occupation);
  const handleUpdate = () => {
    Alert.alert("Successfull");
  };
  return (
    <View>
      <Text>Infomation</Text>
      <View>
        <Text>Full Name: </Text>
        <TextInput value={fullName} onChangeText={setFullName}/>
      </View>
      <View>
        <Text>Age: </Text>
        <TextInput onChangeText={setAge}>{age}</TextInput>
      </View>
      <View>
        <Text>Occupation: </Text>
        <TextInput value={occupation} onChangeText={setOccupation}/>
      </View>
      <Button title="Update" onPress={handleUpdate}/>
    </View>
  );
};

export default Prob1;
