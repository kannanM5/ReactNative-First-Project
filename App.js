import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [arr, setArr] = useState([]);
  const setMyName = () => {
    setName(name);
  };

  const handleSubmit = () => {
    setArr(arr => [...arr, name]);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'red'} />
      <Text style={styles.first}>Firtst App</Text>
      <Text style={{color: 'blue', fontSize: 30}}>kjkjhhjh</Text>

      <TextInput
        placeholder="your name"
        style={styles.inputBox}
        onChangeText={setMyName}
        value={name}
      />

      <View style={styles.check}>
        {/* <Text style={styles.check}></Text>
        <Text style={styles.checkbox}></Text> */}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  first: {
    color: 'red',
    marginBottom: 10,
  },
  inputBox: {
    height: 40,
    borderColor: 'gray',
    width: 300,
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 5,
  },
  Btn: {
    backgroundColor: 'orange',
    height: '20',
    width: 90,
    borderRadius: 10,
  },
  BtnText: {
    color: 'white',
    fontSize: 20,
  },
  check: {
    backgroundColor: 'wheat',
    width: 20,
    margin: 10,
    borderRadius: 10,
    height: 30,
  },
  checkbox: {
    width: 20,
    backgroundColor: 'black',
  },
});
