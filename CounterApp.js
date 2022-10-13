import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Button title="PLUS" onPress={() => setCount(prevCount => prevCount + 1)}/>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{count}</Text>
      <Button title="MINUS" onPress={() => setCount(prevCount => prevCount - 1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})