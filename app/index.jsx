import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, ScrollView } from 'react-native';
import { Link, router , Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../constants/images';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: '#D5724A', flex: 1 }}>
      <ScrollView contentContainerStyle={{height: '100%' ,}}>
        <View className=" w-full justify-center items-center min-h-screen h-[85vh] px-4">
          <Image 
            source={images.logo}
            className="w-[300px] h-[70px] pt-10"
            resizeMethod='contain'
          />
          <Image 
            source={images.applogo}
            className="w-[200px] h-[200px] pt-10"
            resizeMethod='contain'
          />
         <View className="relative mt-5">
          <Text className=" text-3xl text-black font-bold text-center">
           "Your gateway to endless webtoon adventures – only on Chaniyomi!"
          </Text>
          </View>
         
         
            <Text className="text-sm font-semibold mt-5 text-center ">"Your Escape, Your Adventure – Join Now!"</Text>
         
          <CustomButton 
            title="Sign in"
            handlePress={()=> router.push('/sign-in')}
            containerStyles=" w-full mt-5"
          >
          </CustomButton>

          
        </View>
      </ScrollView>

      
       <StatusBar style="auto" />

    </SafeAreaView>
   
  );
}