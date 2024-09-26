// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';

// Import màn hình Login
import LoginScreen from './LoginScreen';
import Grow  from './Grow';
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
      <Button
        title="Go to Grow"
        onPress={() => navigation.navigate('Grow')}
      />
    </View>
  );
};
///aaaaa
////ấkfhsakfhskfhsakjfhsajk
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name='Grow' component={Grow}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
