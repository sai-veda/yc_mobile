import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';
import HomeScreen from '../screens/home_screen';
import CompanyDetailScreen from '../screens/company_detail_screen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="YC Startup Directory" 
        component={HomeScreen} 
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: 'https://bookface-static.ycombinator.com/assets/ycdc/favicon-c8a914eeeba9fe6f7a863b35608b55aeedd7c1ff409c97b9ecb96b7a6c278d70.ico' }}
                style={{ width: 30, height: 30, marginRight: 10 }}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Startup Directory</Text>
              </View>
          ),
        }}
      />
      <Stack.Screen name="CompanyDetail" component={CompanyDetailScreen} />
    </Stack.Navigator>
  );
}
