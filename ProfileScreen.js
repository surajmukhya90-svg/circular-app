import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Modal
} from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = (width - 40) / 3; // 3 columns for Reels Grid

export default function ProfileScreen() {
  // User Profile Data (Unique Username System)
  const [username, setUsername] = useState('circular_creator');
  const [name, setName] = useState('Rohit Kumar');
  const [bio, setBio] = useState('Exploring the Circular world 🌀 | Creator');
  const [activeTab, setActiveTab] = useState('reels');

  // Edit Modal State
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);

  // User ke dummy Reels (Views ke sath)
  const userReels = [
    { id: '1', views: '24.5K', emoji: '🔥' },
    { id: '2', views: '110K', emoji: '⚡' },
    { id: '3', views: '8.2K', emoji: '🎧' },
    { id: '4', views: '45.1K', emoji: '✨' },
    { id: '5', views: '12K', emoji: '🚀' },
    { id: '6', views: '95.4K', emoji: '🌌' },
  ];

  const handleSaveProfile = () => {
    // Unique username formatting (No spaces, lowercase)
    const formattedUsername = tempUsername.replace(/\s+/g, '_').toLowerCase();
    setUsername(formattedUsername);
    setIsEditOpen(false);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Bar: Username & Menu */}
      <View style={styles.topBar}>
        <Text style={styles.usernameTitle}>@{username}</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.menuIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Info Header */}
      <View style={styles.profileHeader}>
        {/* Avatar with Circular Glowing Ring */}
        <View style={styles.avatarBorder}>
          <View style={styles.avatarInner}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>
        </View>

        {/* Stats: Reels, Followers, Following */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Reels</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1.2M</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>340</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Name & Bio */}
      <View style={styles.bioContainer}>
        <Text style={styles.displayName}>{name}</Text>
        <Text style={styles.bioText}>{bio}</Text>
      </View>

      {/* Action Buttons: Edit Profile & Share */}
      <View style={styles.btnRow}>
        <TouchableOpacity 
          style={styles.editBtn} 
          onPress={() => { setTempUsername(username); setIsEditOpen(true); }}
        >
          <Text style={styles.editBtnText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareBtn}>
          <Text style={styles.shareBtnText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs: Reels vs Posts */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          onPress={() => setActiveTab('reels')} 
          style={[styles.tabItem, activeTab === 'reels' && styles.activeTab]}
        >
          <Text style={styles.tabText}>🎬 Reels</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setActiveTab('posts')} 
          style={[styles.tabItem, activeTab === 'posts' && styles.activeTab]}
        >
          <Text style={styles.tabText}>📸 Posts</Text>
        </TouchableOpacity>
      </View>

      {/* Reels Grid (3x3 Layout) */}
      <View style={styles.gridContainer}>
        {userReels.map((item) => (
          <TouchableOpacity key={item.id} style={styles.gridItem}>
            <Text style={styles.gridEmoji}>{item.emoji}</Text>
            <View style={styles.viewsOverlay}>
              <Text style={styles.viewsText}>▶ {item.views}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Edit Username Modal */}
      <Modal visible={isEditOpen} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalCard}>
            <Text style={styles.modalHeading}>Edit Unique Username</Text>
            <Text style={styles.inputLabel}>Username (@)</Text>
            <TextInput
              style={styles.input}
              value={tempUsername}
              onChangeText={setTempUsername}
              placeholder="unique_username"
              placeholderTextColor="#64748B"
              autoCapitalize="none"
            />
            <View style={styles.modalActions}>
              <TouchableOpacity onPress={() => setIsEditOpen(false)} style={styles.cancelBtn}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSaveProfile} style={styles.saveBtn}>
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  usernameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8FAFC',
    letterSpacing: 0.5,
  },
  menuIcon: {
    fontSize: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  avatarBorder: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 2.5,
    borderColor: '#38BDF8', // Cyan Neon Circular Accent
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInner: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarEmoji: {
    fontSize: 34,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 2,
  },
  bioContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  displayName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  bioText: {
    color: '#CBD5E1',
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
  },
  btnRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 18,
    gap: 10,
  },
  editBtn: {
    flex: 1,
    backgroundColor: '#1E293B',
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  editBtnText: {
    color: '#F8FAFC',
    fontWeight: '600',
    fontSize: 13,
  },
  shareBtn: {
    flex: 1,
    backgroundColor: '#1E293B',
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  shareBtnText: {
    color: '#F8FAFC',
    fontWeight: '600',
    fontSize: 13,
  },
  tabBar: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#38BDF8',
  },
  tabText: {
    color: '#F8FAFC',
    fontWeight: '600',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 5,
    gap: 5,
  },
  gridItem: {
    width: itemWidth,
    height: itemWidth * 1.4,
    backgroundColor: '#1E293B',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 5,
  },
  gridEmoji: {
    fontSize: 28,
  },
  viewsOverlay: {
    position: 'absolute',
    bottom: 5,
    left: 6,
  },
  viewsText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    backgroundColor: '#0F172A',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#38BDF8',
  },
  modalHeading: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputLabel: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#1E293B',
    color: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  cancelText: {
    color: '#94A3B8',
  },
  saveBtn: {
    backgroundColor: '#38BDF8',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  saveText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
