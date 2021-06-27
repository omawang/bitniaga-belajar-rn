import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import Space from './components/Space';

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="red"
        barStyle="light-content"
      />
      <View style={styles.logo} />
      <Space height={100} />

      <Text style={styles.greater}>{'Hey, \nLogin Now.'}</Text>
      <Space height={16} />

      <View style={styles.subtitleWrapper}>
        <Text style={styles.subtitle}>If you are new / </Text>
        <Text style={[styles.subtitle, {color: '#000'}]}>Create New</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  logo: {
    width: 25,
    height: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: 'blue',
  },
  greater: {fontSize: 20, color: '#000', fontWeight: 'bold'},
  subtitleWrapper: {flexDirection: 'row'},
  subtitle: {fontSize: 16, color: '#DDDDDD'},
});

export default Login;
