// import { View, Text } from 'react-native'
// import React from 'react'

// const Home = () => {
//   return (
//     <View>
//       <Text>home</Text>
//     </View>
//   )
// }

// export default Home
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Data for each section
  const mostPopular = [
    { title: 'Solo Leveling', image: 'https://i.pinimg.com/236x/0f/22/0f/0f220f8cd8c8613fafbdf6ee7582c835.jpg' },
    { title: 'Golden Kamuy', image: 'https://i.pinimg.com/236x/57/02/d7/5702d792cd6f5075e8148f755b281b19.jpg' },
    { title: 'Beginning After The End', image: 'https://i.pinimg.com/474x/c4/b3/6b/c4b36b560412545e6a71927ff3c46aeb.jpg' },
    { title: 'King\'s Avatar', image: 'https://i.pinimg.com/236x/ef/d4/77/efd477eeff37e930f3dc929ccb7431eb.jpg' },
    { title: 'Heaven\'s Official Blessing', image: 'https://i.pinimg.com/236x/4c/b7/8c/4cb78c530c83cb962f4ac93024b447c7.jpg' },
  ];

  const recommendations = [
    { title: 'One Piece', image: 'https://i.pinimg.com/474x/10/8e/3b/108e3b1df00743bb3ce908a48c8e7e47.jpg' },
    { title: 'Attack on Titan', image: 'https://i.pinimg.com/236x/99/ef/63/99ef63f59161633ccc4f51aceca3afdd.jpg' },
    { title: 'My Hero Academia', image: 'https://i.pinimg.com/474x/b0/85/1a/b0851a4e0e1e5c5d84e5ebbc36385dae.jpg' },
    { title: 'Mo Dao Zu Shi', image: 'https://i.pinimg.com/236x/aa/2e/8c/aa2e8c66f7c9ee7654960d5f3e713fa6.jpg' },
    { title: 'Nobless', image: 'https://i.pinimg.com/236x/41/ce/ff/41ceffb86af58d2db0ed703afa902251.jpg' },
  ];

  const mostRead = [
    { title: 'One Piece', image: 'https://i.pinimg.com/474x/10/8e/3b/108e3b1df00743bb3ce908a48c8e7e47.jpg' },
    { title: 'Solo Leveling', image: 'https://i.pinimg.com/236x/0f/22/0f/0f220f8cd8c8613fafbdf6ee7582c835.jpg' },
    { title: 'Omniscient Reader\'s Viewpoint', image: 'https://i.pinimg.com/236x/10/04/19/100419f94eba4e8226073adc83c2029f.jpg' },
    { title: 'Jujutsu Kaisen', image: 'https://i.pinimg.com/236x/b6/28/a0/b628a0052a0688ae9ba99e2f12e8f1ef.jpg' },
    { title: 'SSS-Class Revival Hunter', image: 'https://i.pinimg.com/236x/3a/e2/54/3ae2549b44f94b52aac2666fbc620cdd.jpg' },
  ];

  // Filter data based on search query
  const filteredMostPopular = mostPopular.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredRecommendations = recommendations.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredMostRead = mostRead.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <View style={styles.container}>
      
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/a8/c5/a6/a8c5a6c26c295d23c22e32a6c6149ddc.jpg' }}
          style={styles.profileImage}
        />
        <TouchableOpacity onPress={() => console.log('Home text pressed')}>
          <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity>

        {/* Search Bar with Icon */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search webtoons..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity onPress={() => console.log('Search for:', searchQuery)}>
            <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/* Most Popular Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Most Popular</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filteredMostPopular.map((item, index) => (
              <View style={styles.imageWrapper} key={index}>
                <Image source={{ uri: item.image }} style={styles.mostPopularImage} />
                <Text style={styles.imageText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Recommendations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filteredRecommendations.map((item, index) => (
              <View style={styles.imageWrapper} key={index}>
                <Image source={{ uri: item.image }} style={styles.thumbnail} />
                <Text style={styles.imageText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Most Read Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Most Read</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filteredMostRead.map((item, index) => (
              <View style={styles.imageWrapper} key={index}>
                <Image source={{ uri: item.image }} style={styles.thumbnail} />
                <Text style={styles.imageText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4a261',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#e76f51',
  },
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    width: '100%',
  },
  searchIcon: {
    marginLeft: 5,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  section: {
    marginTop: 15,
    paddingLeft: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  mostPopularImage: {
    width: 180,
    height: 230,
    marginRight: 10,
    borderRadius: 10,
  },
  imageWrapper: {
    alignItems: 'center',
    marginRight: 10,
  },
  imageText: {
    color: 'black',
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 180,
  },
  thumbnail: {
    width: 120,
    height: 180,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default HomeScreen
