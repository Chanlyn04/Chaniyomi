import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For the download icon and settings icon

const DownloadScreen = () => {
  const chapters = [
    {
      title: 'Who Made Me a Princess Chapter 1',
      imageUrl: 'https://i.pinimg.com/564x/b8/20/98/b82098e6b4a4387fce2cbf61853f3d00.jpg',
    },
    {
      title: 'Who Made Me a Princess Chapter 2',
      imageUrl: 'https://i.pinimg.com/564x/b8/20/98/b82098e6b4a4387fce2cbf61853f3d00.jpg',
    },
    {
      title: 'Solo Leveling Chapter 1',
      imageUrl: 'https://i.pinimg.com/736x/0f/22/0f/0f220f8cd8c8613fafbdf6ee7582c835.jpg',
    },
    {
      title: 'Solo Leveling Chapter 2',
      imageUrl: 'https://i.pinimg.com/736x/0f/22/0f/0f220f8cd8c8613fafbdf6ee7582c835.jpg',
    },
    {
      title: 'Solo Leveling Chapter 3',
      imageUrl: 'https://i.pinimg.com/736x/0f/22/0f/0f220f8cd8c8613fafbdf6ee7582c835.jpg',
    },
    {
      title: 'Who Made Me a Princess Chapter 23',
      imageUrl: 'https://i.pinimg.com/564x/b8/20/98/b82098e6b4a4387fce2cbf61853f3d00.jpg',
    },
    {
      title: 'Who Made Me a Princess Chapter 24',
      imageUrl: 'https://i.pinimg.com/564x/b8/20/98/b82098e6b4a4387fce2cbf61853f3d00.jpg',
    },
    {
      title: 'PayBack Chapter 53',
      imageUrl: 'https://i.pinimg.com/564x/d6/6e/2f/d66e2f976305cc791aa023bcfce027c0.jpg',
    },
    {
      title: 'PayBack Chapter 54',
      imageUrl: 'https://i.pinimg.com/564x/d6/6e/2f/d66e2f976305cc791aa023bcfce027c0.jpg',
    },
    {
      title: 'PayBack Chapter 55',
      imageUrl: 'https://i.pinimg.com/564x/d6/6e/2f/d66e2f976305cc791aa023bcfce027c0.jpg',
    },

    // Add more chapters as needed
  ];

  const handleDownload = (chapter) => {
    console.log(`Downloading ${chapter.title}`);
    // Implement download logic here
  };

  return (
    <View style={styles.container}>
      {/* Header with title and settings icon */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Download</Text>
        <Icon name="settings-outline" size={24} color="#fff" style={styles.settingsIcon} />
      </View>

      <ScrollView>
        {chapters.map((chapter, index) => (
          <View key={index} style={styles.chapterContainer}>
            <Image source={{ uri: chapter.imageUrl }} style={styles.chapterImage} />
            <Text style={styles.chapterTitle}>{chapter.title}</Text>
            <TouchableOpacity onPress={() => handleDownload(chapter)}>
              <Icon name="download-outline" size={24} color="#000" style={styles.downloadIcon} />
            </TouchableOpacity>
          </View>
        ))}
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
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e76f51',
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000', // Shadow color
    textShadowOffset: { width: 1, height: 1 }, // Shadow offset (x, y)
    textShadowRadius: 3, // Shadow blur radius
  },
  settingsIcon: {
    alignSelf: 'center',
  },
  chapterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chapterImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  chapterTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  downloadIcon: {
    marginLeft: 10,
  },
});

export default DownloadScreen;
