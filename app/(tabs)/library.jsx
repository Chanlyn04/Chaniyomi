// import { View, Text } from 'react-native'
// import React from 'react'

// const Library = () => {
//   return (
//     <View>
//       <Text>Library</Text>
//     </View>
//   )
// }

// export default Library

import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LibraryScreen = () => {
  // State for managing search input and search mode
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // State for controlling expanded summaries
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Example webtoons data (replace with actual data)
  const webtoons = [
    {
      title: 'Solo Leveling',
      status: '*Completed* 270 Chapters',
      description: 'In this world where Hunters with various magical powers battle monsters from invading the defenseless humanity...',
      imageUrl: 'https://i.pinimg.com/736x/0f/22/0f/0f220f8cd8c8613fafbdf6ee7582c835.jpg',
    },
    {
      title: 'Who Made Me a Princess',
      status: '*Completed* 219 Chapters',
      description: 'Then I opened my eyes and had become a princess! But out of all the characters in this romance novel, why is it the princess who has the fate of dying by her own blood-related dad, the emperor?',
      imageUrl: 'https://i.pinimg.com/564x/b8/20/98/b82098e6b4a4387fce2cbf61853f3d00.jpg',
    },
    {
      title: 'Pay Back',
      status: '*On-Going* 40 Chapters',
      description: 'While other students were preparing to take their SAT exams, Lee Yoonsuk was swept up in debauchery, living a lifestyle of crime and revenge, while working for a loan shark.',
      imageUrl: 'https://i.pinimg.com/564x/d6/6e/2f/d66e2f976305cc791aa023bcfce027c0.jpg',
    },
  ];

  // Function to handle "See More" toggle
  const handleSeeMoreToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked item
    }
  };

  // Filter the webtoons based on search query
  const filteredWebtoons = webtoons.filter(webtoon =>
    webtoon.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* Library Title (Fixed on the left side) */}
          <Text style={styles.headerTitle}>Library</Text>
        </View>
        <View style={styles.headerRight}>
          {/* Search Icon */}
          {!isSearching && (
            <TouchableOpacity onPress={() => setIsSearching(true)}>
              <Icon name="search" size={24} color="#fff" style={styles.searchIcon} />
            </TouchableOpacity>
          )}

          {/* Search Bar with Close Button */}
          {isSearching && (
            <View style={styles.searchBarContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus={true}
              />
              <TouchableOpacity onPress={() => { setIsSearching(false); setSearchQuery(''); }}>
                <Icon name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Your Library Section */}
      <ScrollView contentContainerStyle={styles.libraryContainer}>
        {filteredWebtoons.length > 0 ? (
          filteredWebtoons.map((webtoon, index) => (
            <View style={styles.libraryItem} key={index}>
              <Image
                source={{ uri: webtoon.imageUrl }}
                style={styles.libraryImage}
              />
              <View style={styles.libraryDetails}>
                <Text style={styles.title}>{webtoon.title}</Text>
                <Text style={styles.status}>{webtoon.status}</Text>

                {/* Show full description if expanded, otherwise truncate */}
                <Text style={styles.description}>
                  {expandedIndex === index ? webtoon.description : `${webtoon.description.substring(0, 100)}...`}
                </Text>

                {/* Toggle between "See More" and "See Less" */}
                <TouchableOpacity onPress={() => handleSeeMoreToggle(index)}>
                  <Text style={styles.seeMore}>
                    {expandedIndex === index ? 'See Less' : 'See More'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.readButton}>
                  <Text style={styles.readButtonText}>Read</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>No webtoons found</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4a261', // Adjust background color
   
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e76f51', // Background color for header
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2, // Ensure it takes enough space
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000', // Shadow color
    textShadowOffset: { width: 1, height: 1 }, // Shadow offset (x, y)
    textShadowRadius: 3, // Shadow blur radius
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchBarContainer: {
   
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '100%', // Make sure the search bar takes the full width of the header
    height: 40, // Adjust height for better visibility
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 15,
  },
  
  libraryContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  libraryItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    backgroundColor: '#000', // Background color for each item
    borderRadius: 10,
    padding: 10,
  },
  libraryImage: {
    width: 120,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  libraryDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    color: '#00ff00', // Color for completed/on-going status
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#ccc', // Description text color
    marginBottom: 10,
  },
  seeMore: {
    color: '#ff9800', // Color for "See More"
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  readButton: {
    backgroundColor: '#e76f51',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  readButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noResultsText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LibraryScreen;


