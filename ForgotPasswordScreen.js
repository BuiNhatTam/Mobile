import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    // Simple validation
    if (email.length === 0) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    // Logic to handle password reset (API request, etc.)
    Alert.alert('Success', 'Password reset link has been sent to your email.');
  };

  return (
    <View style={styles.container}>
       <Image source={require('./assets/lock-152879 1.png')} style={styles.icon} />
      <Text style={styles.title}>FORGET PASSWORD</Text>
      <Text style={styles.description}>Provide your account's email for which you want to reset your password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#7f7f7f"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lockIcon: {
    fontSize: 100,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FDD835',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
