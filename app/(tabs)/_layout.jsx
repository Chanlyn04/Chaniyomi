
// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import { Tabs, Redirect} from'expo-router'
// import { icons } from '../../constants'

// const TabIcon=({icon, color, name, focused})=>{
//     return (
//         <View>
//             <Image
//                 source={icon}
//                 resizeMode="contain"
//                 className="w-6 h-6"
//             />
//         </View>
//     )
// }


// const TabsLayout = () => {
//   return (
//     <>
//         <Tabs>
//             <Tabs.Screen
//                 name="home"
//                 options={{
//                     title:'Home',
//                     headerShown:false,
//                     tabBarIcon: ({color, focused}) =>(
//                         <TabIcon
//                             icon={icons.home}
//                             color={color}
//                             name="Home"
//                             focused={focused}
//                         />
//                     )
//                 }}
//             /> 
            
//             <Tabs.Screen
//                 name="home"
//                 options={{
//                     title:'Home',
//                     headerShown:false,
//                     tabBarIcon: ({color, focused}) =>(
//                         <TabIcon
//                             icon={icons.home}
//                             color={color}
//                             name="Home"
//                             focused={focused}
//                         />
//                     )
//                 }}
//             /> 

//         </Tabs>
//     </>
    
//   )
// }

// export default TabsLayout
import { View, Text, Image } from 'react-native';
import React from 'react';
import { icons } from '../../constants';
import { Tabs } from 'expo-router'; // Make sure you are importing correctly

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image
        style={{ width: 25, height: 25 }}
        source={icon}
        resizeMode="contain"
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.Profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.Home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.library}
              color={color}
              name="Library"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="download"
        options={{
          title: 'Download',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.download}
              color={color}
              name="Download"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: 'Category',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.category}
              color={color}
              name="Category"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
