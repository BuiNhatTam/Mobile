import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';


const Register= () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState(null);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleRegister = () => {
    // Handle registration logic here
    console.log({ name, phone, email, password, birthday, gender });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
        <Image source={require('./assets/lock-152879 1.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="BirthDay"
        value={birthday}
        onChangeText={setBirthday}
        
      />


      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setGender('Male')}
        >
          <View style={styles.radioCircle}>
            {gender === 'Male' && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setGender('Female')}
        >
          <View style={styles.radioCircle}>
            {gender === 'Female' && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E8F5E9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
  },
  eyeIcon: {
    padding: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 15,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  radioText: {
    marginLeft: 5,
  },
  registerButton: {
    width: '90%',
    backgroundColor: '#D84315',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  registerText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#000',
  },
});

export default Register;
