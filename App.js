import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';
//Using List ScrollView and Seeing how to ctrl refresh
const App = () => {
  let [items, setItems] = useState([
    { key: 1, value: 'Item 1' },
    { key: 2, value: 'Item 2' },
    { key: 3, value: 'Item 3' },
    { key: 4, value: 'Item 4' },
    { key: 5, value: 'Item 5' },
    { key: 6, value: 'Item 6' },
    { key: 7, value: 'Item 7' },
    { key: 8, value: 'Item 8' },
    { key: 9, value: 'Item 9' },
    { key: 10, value: 'Item 10' },
    { key: 11, value: 'Item 11' },
    { key: 12, value: 'Item 12' },
  ]);
  const [refresh, setRefresh] = useState(false)
  const onRefresh = () => {
    setRefresh(true)
    setItems([...items, { key: 33, value: 'Item 33' }])
    setRefresh(false)
  }
  return (
    // On refresh it will add one more item in the objects
    <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} colors={['#fcf8']} />} style={styles.body} refre >
      {
        items.map((obj) => {
          return (
            <View style={styles.items} key={obj.key}>
              <Text style={styles.text}>{obj.value}</Text>
            </View>
          )
        })
      }
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',

  },
  items: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faa6a5',
    margin: 10,

  },
  text: {
    fontSize: 35,
    margin: 10

  },


});

export default App;
