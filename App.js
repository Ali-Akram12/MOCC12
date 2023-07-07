import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './Screen/LoginScreen';
import Dashboard from './Screen/Dashboard';


const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      {/* <StatusBar style="auto" /> */}
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Dash" component={Dashboard} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


