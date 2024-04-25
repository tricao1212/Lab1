import React from 'react';
import Data from './Data';
import Square from './Square';
import styles from './style';
import {ScrollView, View} from 'react-native';

const App = () => {
  console.log(Data);
  return (
    <ScrollView style={styles.container}>
      {Data.map((item, index) => (
        <Square key={index} text={`Square ${item}`}/>
      ))}
    </ScrollView>
  );
};

export default App;
