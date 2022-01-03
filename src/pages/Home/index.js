import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main View')}>
        <Text style={styles.button.text}>Bali Proceed</Text>
      </TouchableOpacity>
      <View style={styles.gap} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Web To Native')}>
        <Text style={styles.button.text}>Web To Native</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#D8E2DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FAE1DD',
    padding: 10,
    borderRadius: 8,
    text: {
      color: '#3a3a3a',
    },
  },
  gap: {
    height: 25,
  },
});

export default Home;
