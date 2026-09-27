import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  // Current screen track karne ke liye
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F19" />

      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>CIRCULAR</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.btnText}>❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.btnText}>💬</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content Area (Screen Change Hogi) */}
      <View style={styles.mainContent}>
        {activeTab === 'Home' && (
          <View style={styles.centerBox}>
            <Text style={styles.title}>🏠 Home Feed</Text>
            <Text style={styles.subtitle}>Yahan sabhi users ki posts aur stories dikhengi.</Text>
          </View>
        )}

        {activeTab === 'Reels' && (
          <View style={styles.centerBox}>
            <Text style={styles.title}>🎬 Circular Reels</Text>
            <Text style={styles.subtitle}>Vertical Full-screen Reels (Scroll, Like, Comment, Share)</Text>
          </View>
        )}

        {activeTab === 'Create' && (
          <View style={styles.centerBox}>
            <Text style={styles.title}>➕ Create New</Text>
            <Text style={styles.subtitle}>Post Photo, Upload Reel ya Go Live!</Text>
          </View>
        )}

        {activeTab === 'Chat' && (
          <View style={styles.centerBox}>
            <Text style={styles.title}>💬 Direct Messages</Text>
            <Text style={styles.subtitle}>Friends ke sath real-time private chat.</Text>
          </View>
        )}

        {activeTab === 'Profile' && (
          <View style={styles.centerBox}>
            <Text style={styles.title}>👤 User Profile</Text>
            <Text style={styles.subtitle}>@username | Bio | Followers | Apni Reels</Text>
          </View>
        )}
      </View>

      {/* Bottom Navigation Bar (Instagram Style) */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => setActiveTab('Home')} style={styles.navItem}>
          <Text style={[styles.navIcon, activeTab === 'Home' && styles.activeIcon]}>🏠</Text>
          <Text style={[styles.navLabel, activeTab === 'Home' && styles.activeLabel]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('Reels')} style={styles.navItem}>
          <Text style={[styles.navIcon, activeTab === 'Reels' && styles.activeIcon]}>🎬</Text>
          <Text style={[styles.navLabel, activeTab === 'Reels' && styles.activeLabel]}>Reels</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('Create')} style={styles.createBtn}>
          <Text style={styles.createBtnText}>➕</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('Chat')} style={styles.navItem}>
          <Text style={[styles.navIcon, activeTab === 'Chat' && styles.activeIcon]}>💬</Text>
          <Text style={[styles.navLabel, activeTab === 'Chat' && styles.activeLabel]}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('Profile')} style={styles.navItem}>
          <Text style={[styles.navIcon, activeTab === 'Profile' && styles.activeIcon]}>👤</Text>
          <Text style={[styles.navLabel, activeTab === 'Profile' && styles.activeLabel]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19', // Sleek OLED Dark Background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1E293B',
  },
  logoText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#38BDF8', // Cyan Neon Glow
    letterSpacing: 2,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  iconBtn: {
    padding: 5,
  },
  btnText: {
    fontSize: 20,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  centerBox: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#020617',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#1E293B',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 22,
    opacity: 0.6,
  },
  activeIcon: {
    opacity: 1,
    transform: [{ scale: 1.1 }],
  },
  navLabel: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 3,
  },
  activeLabel: {
    color: '#38BDF8',
    fontWeight: 'bold',
  },
  createBtn: {
    backgroundColor: '#38BDF8',
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  createBtnText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
