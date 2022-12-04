import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  const validate = (id) => {
    setData(prevData => {
      return prevData.filter(todo => todo.id != id)
    })
  }

  const update = () => {
    setData(preData => [...preData, {id: preData.length+1, todo: input}])
  }

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
        onChangeText={(e) => setInput(e)}
        style={todoStyle.inputBox}/>

        {/* Button */}
        <TouchableOpacity
        onPress={update}
        style={todoStyle.button}>  
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>ADD</Text>
        </TouchableOpacity>
      </View>
      {/* InputField Component */}

      {/* List View */}
      <View style={todoStyle.listView}>
        <FlatList 
        data={data}
        renderItem={({item}) => (
          <View style={todoStyle.content} >
            <TouchableOpacity onPress={() => validate(item.id)}>
              <Text>{item.todo}</Text>
            </TouchableOpacity>
          </View>
        )}
        />
      </View>
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
    marginTop: 40,
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
    marginTop: 20,
  },
  content: {
    height: 40,
    marginHorizontal: 40,
    marginTop: 20,
    justifyContent: 'center'
  }
})


{
  /*
  
        <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={todoStyle.content} >
            <TouchableOpacity onPress={() => remove(item.id)}>
              <Text>{item.value}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
  
  */
}

{
  /*
  // ES6 Method
  setData(prevData => {
    return prevData.filter(todo => todo.id != id)
  })

  // Normal Javascript method
  let tempArray = []
  data.forEach((value) => {
    if(value.id != id){
      tempArray.push(value)
    }
  })
  setData(tempArray)
   */
}