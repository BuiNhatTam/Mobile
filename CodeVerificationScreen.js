import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function CodeVerificationScreen() {
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (text, index) => {
    if (isNaN(text)) return;

    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Tự động chuyển đến ô tiếp theo khi nhập xong 1 ký tự
    const nextInput = text.length === 1 ? index + 1 : index;
    if (nextInput < otp.length && text.length === 1) {
      inputs[nextInput].focus();
    }
  };

  const handleVerifyCode = () => {
    // Thêm logic xử lý xác minh mã OTP ở đây
    Alert.alert('OTP Entered', otp.join(''));
  };

  let inputs = [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.subTitle}>VERIFICATION</Text>
      <Text style={styles.description}>Enter ontime password sent on {"\n"}++849092605798</Text>

      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs[index] = input)}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleChange(text, index)}
            value={otp[index]}
            textAlign="center"
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
 //   justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
 //   justifyContent: 'center',
    textAlign: "center",    
    paddingTop: 90,
  },
  subTitle: {
    fontSize: 24,
    margin:90,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpBox: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    fontSize: 20,
    width: 40,
    height: 40,
    textAlign: 'center',
    margin: 100,
  },
  button: {
    backgroundColor: '#FDD835',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    margin: 100,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
   
  },
});
