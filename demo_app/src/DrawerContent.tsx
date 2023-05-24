import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Table, Row, Rows } from 'react-native-table-component';

const DrawerContent = ({ navigation }: any) => {
    const state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    }
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
//   const handleNavigation = (screenName: any) => {
//     navigation.navigate(screenName);
//   };

//   return (
//     <View>
//       <DrawerContentScrollView>
//         <TouchableOpacity onPress={() => handleNavigation('Products')}>
//           <Text>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleNavigation('Product Details')}>
//           <Text>Details</Text>
//         </TouchableOpacity>
//       </DrawerContentScrollView>
//     </View>
//   );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

export default DrawerContent;