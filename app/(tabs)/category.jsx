import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GenreScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const genres = [
    { title: 'Romance', imageUrl: 'https://images.saymedia-content.com/.image/t_share/MTk4OTk1MjMyMjEyMTMzODQ0/the-best-modern-romance-manhwa-webtoons-you-must-read.png' },
    { title: 'Slice of Life', imageUrl: 'https://booksandbao.com/wp-content/uploads/2021/10/slice-of-life-manga-e1633535262739.jpg' },
    { title: 'Boys Love', imageUrl: 'https://i.pinimg.com/564x/63/a1/74/63a174d0709a38a488e5cab6573bbfa9.jpg' },
    { title: 'Horror', imageUrl: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/Untitled-design-2021-10-30T180046.962.jpg' },
    { title: 'Isekai', imageUrl: 'https://booksandbao.com/wp-content/uploads/2021/08/isekai-manga.jpg' },
    { title: 'Adventure', imageUrl: 'http://img01.deviantart.net/52ac/i/2015/119/6/e/anime_manga_collage_by_monklordey-d3fsy6l.jpg' },
    { title: 'Action', imageUrl: 'https://i.pinimg.com/originals/72/9b/00/729b003b4c828ff3ff90e125abbeb942.jpg' },
    { title: 'Comedy', imageUrl: 'https://waifuheaven.in/wp-content/uploads/2023/09/5-Must-Read-Comedy-Manhwa-of-2023-That-Will-Make-You-Laugh-Out-Loud-1024x576.webp' },
  ];

  const filteredGenres = genres.filter(genre =>
    genre.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Genre</Text>
        <TouchableOpacity onPress={() => setIsSearching(!isSearching)}>
          <Icon name="search" size={24} color="#fff" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      {isSearching && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search genres..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoFocus={true}
        />
      )}

      {/* Genres Section */}
      <ScrollView contentContainerStyle={styles.genresContainer}>
        {filteredGenres.length > 0 ? (
          filteredGenres.map((genre, index) => (
            <TouchableOpacity key={index} style={styles.genreItem}>
              <View style={styles.genreContent}>
                <Image source={{ uri: genre.imageUrl }} style={styles.genreImage} blurRadius={2} />
                <Text style={styles.genreTitle}>{genre.title}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noResultsText}>No genres found</Text>
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
    backgroundColor: '#e76f51', // Header background color
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
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 15,
  },
  genresContainer: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  genreItem: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#000',
    alignItems: 'center',
    position: 'relative',
  },
  genreContent: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  genreImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  genreTitle: {
    position: 'absolute',
    top: '80%',
    left: '60%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  noResultsText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default GenreScreen;


