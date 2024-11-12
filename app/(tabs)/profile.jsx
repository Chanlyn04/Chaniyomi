import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons for icons

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go Back')} style={styles.backButton}>
          <Icon name="chevron-back" size={30} color="#000" />
        </TouchableOpacity>
        
        {/* Centered Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/a8/c5/a6/a8c5a6c26c295d23c22e32a6c6149ddc.jpg' }} // Replace with the profile image URL
            style={styles.profileImage}
          />
          <Text style={styles.username}>Chanlyn_lariz24</Text>
        </View>
      </View>

      {/* Coins and Voucher Section */}
      <View style={styles.currencySection}>
        <View style={styles.currencyItem}>
          <Icon name="cash-outline" size={40} color="#e6ac00" />
          <Text style={styles.currencyText}>Coins</Text>
        </View>
        <View style={styles.currencyItem}>
          <Icon name="pricetag-outline" size={40} color="#000" />
          <Text style={styles.currencyText}>Voucher</Text>
        </View>
      </View>

      {/* Menu List Section */}
      <ScrollView style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Icon name="cart-outline" size={30} color="#e6ac00" />
          <Text style={styles.menuText}>Purchase Coin</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="ticket-outline" size={30} color="#ff3300" />
          <Text style={styles.menuText}>Reading Coupons</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="person-outline" size={30} color="#6633ff" />
          <Text style={styles.menuText}>My Profile Frame</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="information-circle-outline" size={30} color="#0099ff" />
          <Text style={styles.menuText}>About Us</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="chatbubble-outline" size={30} color="#33cc33" />
          <Text style={styles.menuText}>My Comments</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="log-out-outline" size={30} color="#ff3300" />
          <Text style={styles.menuText}>Log Out</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#e76f51',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center', // Center all items
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 20,
  },
  profileContainer: {
    alignItems: 'center', // Center items in this container
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  currencySection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  currencyItem: {
    alignItems: 'center',
  },
  currencyText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  menuContainer: {
    backgroundColor: '#000',
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ProfileScreen;
