
import { StyleSheet, Text, View } from 'react-native';
import { Stack, SplashScreen , } from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import React from 'react'

SplashScreen.preventAutoHideAsync();

const MainLayout = () => { 
  const [fontsLoaded, error ] = useFonts({
    'Poppins-Black':require("../assets/fonts/Poppins-Black.ttf"),
    'Poppins-SemiBold':require("../assets/fonts/Poppins-SemiBold.ttf"),
  })

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
}, [fontsLoaded, error]);

if (!fontsLoaded && !error) {
  return null; 
}
    return(
        <Stack>
           
            <Stack.Screen name='index'options={{headerShown:false}}/>
            <Stack.Screen name='(auth)'options={{headerShown:false}}/>
            <Stack.Screen name='(tabs)'options={{headerShown:false}}/>
            
        
        </Stack>
    );
}

export default MainLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


