import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl, FlatList, SectionList
} from 'react-native';
//Using List ScrollView and Seeing how to ctrl refresh
const App = () => {
  let [data, setData] = useState([
    { value: 'Item 1' },
    { value: 'Item 2' },
    { value: 'Item 3' },
    { value: 'Item 4' },
    { value: 'Item 5' },
    { value: 'Item 6' },
    { value: 'Item 7' },
    { value: 'Item 8' },
    { value: 'Item 9' },
    { value: 'Item 10' },
    { value: 'Item 11' },
    { value: 'Item 12' },
  ]);
  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 2-2', 'Item 3-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1',],
    },
  ]

  const [refresh, setRefresh] = useState(false)
  const onRefresh = () => {
    setRefresh(true)
    setData([...data, { value: 'Item 33' }])
    setRefresh(false)
  }
  return (
    //In order to show nested array
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => {
        return (
          <Text style={styles.text}>{item}</Text>
        )
      }}
      renderSectionHeader={({ section }) => {
        return (
          <View style={styles.items}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )
      }}
    />

    //Use flat list in place pf scroll view because of more props
    //   <FlatList
    //     // numColumns={2}
    //     keyExtractor={(item, index) => index.toString()}
    //     data={data}
    //     renderItem={({ item }) => {
    //       return (
    //         <View style={styles.items}>
    //           <Text style={styles.text}>{item.value}</Text>
    //         </View>
    //       )
    //     }}
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={refresh}
    //         onRefresh={onRefresh}
    //         colors={['#fcf8']} />}
    //   />
    // );
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',

  },
  items: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faa6a5',
    margin: 10,
  },
  text: {
    fontSize: 35,
    margin: 10,
    color: 'black'

  },


});

export default App;
