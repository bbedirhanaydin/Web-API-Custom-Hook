import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from './src/pages/Products';
import Detail from './src/pages/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            title: 'Dükkan',
            headerStyle: {
              backgroundColor: '#62CDFF',
            },
            headerTitleStyle: {color: 'white'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Detay',
            headerStyle: {
              backgroundColor: '#62CDFF',
            },
            headerTitleStyle: {color: 'white'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
