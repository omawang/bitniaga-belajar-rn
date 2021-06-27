import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Space from '../components/Space';

const Login = () => {
  const [email, setEmail] = useState('sdf');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="red"
        barStyle="light-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logo} />
        <Space height={100} />

        <Text style={styles.greater}>{'Hey, \nLogin Now.'}</Text>
        <Space height={16} />

        <View style={styles.subtitleWrapper}>
          <Text style={styles.subtitle}>If you are new / </Text>
          <Text style={[styles.subtitle, {color: '#000'}]}>Create New</Text>
        </View>
        <Space height={120} />

        <TextInput
          value={email}
          onChangeText={v => {
            setEmail(v);
          }}
          style={styles.input}
        />
        <Space height={24} />

        <TextInput
          value={password}
          onChangeText={v => {
            setPassword(v);
          }}
          secureTextEntry={true}
          style={styles.input}
        />
        <Space height={24} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
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
    backgroundColor: '#0000FF',
  },
  greater: {fontSize: 20, color: '#000', fontWeight: 'bold'},
  subtitleWrapper: {flexDirection: 'row'},
  subtitle: {fontSize: 16, color: '#DDDDDD'},
  input: {
    backgroundColor: '#DEDEE8',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 50,
    fontSize: 18,
  },
  button: {
    backgroundColor: 'red',
    height: 50,
    borderRadius: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default Login;
