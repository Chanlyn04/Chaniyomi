import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm]=useState({
    username:'',
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{}
  return (
    <SafeAreaView style={{ backgroundColor: '#D5724A', flex: 1 }}>
      <ScrollView>
          <View className="w-full justify-center items-center h-full px-4 my-1">
               
              <Image
                 source={require("../../assets/images/applogo.png")}
                style={{ width: 150, height: 150, alignSelf:'center'}}
                 />
              <Image
                 source={require("../../assets/images/logo.png")}
                style={{width: 190, height: 40, alignSelf:'center'}}
                 /> 
              <Text className="text-2xl text-white mt-3 font-u_regular ">Sign up Form</Text>
              <FormField
                  title="Username"
                  value={form.username}
                  handleChangeText={(e) => setForm({ ...form, username: e })}
                  otherStyles="mt-4"
              />
              <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-4"
                  keyboardType="email-address"
              />
              <FormField
                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-4"
              />
              <CustomButton
                  title="Sign In"
                  handlePress={submit}
                  containerStyles="w-full mt-7"
                  isLoading={isSubmitting}
              />
        <View className="flex justify-center pt-5 flex-row      gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an Account?
            </Text>  
            <Link
              href="/sign-in"
              className="text-lg font-u_bold text-violet-700 "
            >
              Sign in
            </Link>
          </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
export default SignUp
