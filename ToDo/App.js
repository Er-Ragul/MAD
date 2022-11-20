import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

export default function App() {
  return (
    <View style={todoStyle.container}>
      {/* Header Component */}
      <View style={todoStyle.header}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>ToDo</Text>
      </View>
      {/* Header Component */}

      {/* InputField Component */}
      <View style={todoStyle.inputField}>
        {/* Input box */}
        <TextInput 
        placeholder='Add Item'
        style={todoStyle.inputBox}/>

        {/* Button */}
        <TouchableOpacity
        style={todoStyle.button}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>ADD</Text>
        </TouchableOpacity>
      </View>
      {/* InputField Component */}

      {/* List View */}
      <View style={todoStyle.listView}></View>
      {/* List View */}
    </View>
  )
}

const todoStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    height: 45,
    backgroundColor: 'orange',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    width: '84%',
    height: 80,
    marginTop: 40
  },
  inputBox: {
    width: '100%',
    borderBottomWidth: 1
  },
  button: {
    width: '100%',
    height: 30,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  listView: {
    width: '100%',
    height: '100%',
  }
})