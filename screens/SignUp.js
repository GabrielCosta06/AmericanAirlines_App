import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

import Button from './components/Button';
import Background from './components/Background';
import Logo from './components/Logo';

const PlaceholderImage = require('./assets/background.jpg');
const LogoPlaceholder = require('./assets/Logo.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Background placeholderImageSource={PlaceholderImage} />
        <Logo ImageSrc={LogoPlaceholder} />
      </View>
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonSignUp}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.buttonSignIn}>
          <Button label="Sign in" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 40,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: 310, // Adjusted marginBottom
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#3498db', // Border color for focused state
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 18,
    color: '#333', // Text color
  },
  buttonSignUp: {
    backgroundColor: '#27ae60',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonSignIn: {
    backgroundColor: '#3498db',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 10,
  },
});
