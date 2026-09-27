import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import ProfileScreen from './ProfileScreen';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050811" />

      {/* 🌊 Liquid Glowing Ambient Orbs (Sheeshe ke piche chamakne wale liquid blobs) */}
      <View style={styles.liquidOrbCyan} />
      <View style={styles.liquidOrbPurple} />
      <View style={styles.liquidOrbPink} />

      {/* 🪟 Liquid Glass Header (Floating Frosted Glass) */}
      <View style={styles.glassHeaderContainer}>
        <View style={styles.glassHeader}>
          <View style={styles.logoRow}>
            <View style={styles.liquidMiniDot} />
            <Text style={styles.logoText}>CIRCULAR</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.glassIconBtn}>
              <Text style={styles.iconEmoji}>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.glassIconBtn}>
              <Text style={styles.iconEmoji}>💬</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Main Content Area */}
      <View style={styles.contentArea}>
        {activeTab === 'Home' && (
          <View style={styles.glassCard}>
            <Text style={styles.cardEmoji}>🏠</Text>
            <Text style={styles.cardTitle}>Home Feed</Text>
            <Text style={styles.cardSubtitle}>
              Liquid glass experience me stories aur posts scroll honge.
            </Text>
          </View>
        )}

        {activeTab === 'Reels' && (
          <View style={styles.glassCard}>
            <Text style={styles.cardEmoji}>🎬</Text>
            <Text style={styles.cardTitle}>Circular Reels</Text>
            <Text style={styles.cardSubtitle}>
              Full Screen vertical liquid video flow.
            </Text>
          </View>
        )}

        {activeTab === 'Create' && (
          <View style={styles.glassCard}>
            <Text style={styles.cardEmoji}>➕</Text>
            <Text style={styles.cardTitle}>Create Studio</Text>
            <Text style={styles.cardSubtitle}>
              Reel upload, photo post ya Go Live stream.
            </Text>
          </View>
        )}

        {activeTab === 'Chat' && (
          <View style={styles.glassCard}>
            <Text style={styles.cardEmoji}>💬</Text>
            <Text style={styles.cardTitle}>Liquid Messages</Text>
            <Text style={styles.cardSubtitle}>
              Encrypted real-time personal direct messages.
            </Text>
          </View>
        )}

        {/* 👤 Real Profile Screen connected directly */}
        {activeTab === 'Profile' && <ProfileScreen />}
      </View>

      {/* 🚀 Floating Liquid Glass Bottom Dock (Apple VisionOS Style) */}
      <View style={styles.dockWrapper}>
        <View style={styles.glassDock}>
          <TouchableOpacity onPress={() => setActiveTab('Home')} style={styles.dockItem}>
            <Text style={[styles.dockIcon, activeTab === 'Home' && styles.dockIconActive]}>🏠</Text>
            {activeTab === 'Home' && <View style={styles.activeLiquidGlow} />}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('Reels')} style={styles.dockItem}>
            <Text style={[styles.dockIcon, activeTab === 'Reels' && styles.dockIconActive]}>🎬</Text>
            {activeTab === 'Reels' && <View style={styles.activeLiquidGlow} />}
          </TouchableOpacity>

          {/* Glowing Center Liquid Action Button */}
          <TouchableOpacity onPress={() => setActiveTab('Create')} style={styles.liquidCenterBtn}>
            <Text style={styles.centerBtnPlus}>➕</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('Chat')} style={styles.dockItem}>
            <Text style={[styles.dockIcon, activeTab === 'Chat' && styles.dockIconActive]}>💬</Text>
            {activeTab === 'Chat' && <View style={styles.activeLiquidGlow} />}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('Profile')} style={styles.dockItem}>
            <Text style={[styles.dockIcon, activeTab === 'Profile' && styles.dockIconActive]}>👤</Text>
            {activeTab === 'Profile' && <View style={styles.activeLiquidGlow} />}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050811', // Deep liquid space black
  },

  /* 🌌 Liquid Ambient Glow Orbs (Background me tairne wale) */
  liquidOrbCyan: {
    position: 'absolute',
    top: -40,
    left: -40,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#38BDF8',
    opacity: 0.22,
  },
  liquidOrbPurple: {
    position: 'absolute',
    top: height * 0.35,
    right: -60,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#8B5CF6',
    opacity: 0.18,
  },
  liquidOrbPink: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#EC4899',
    opacity: 0.15,
  },

  /* 🪟 Floating Liquid Glass Header */
  glassHeaderContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    zIndex: 10,
  },
  glassHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: 'rgba(15, 23, 42, 0.65)', // Glass Translucent
    borderRadius: 24,
    borderWidth: 1.2,
    borderColor: 'rgba(255, 255, 255, 0.15)', // Glass shine border
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  liquidMiniDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#38BDF8',
    shadowColor: '#38BDF8',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 2.5,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  glassIconBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 0.8,
    borderColor: 'rgba(255, 255, 255, 0.12)',
  },
  iconEmoji: {
    fontSize: 16,
  },

  /* Main Area */
  contentArea: {
    flex: 1,
  },
  glassCard: {
    margin: 24,
    padding: 30,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderRadius: 28,
    borderWidth: 1.2,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.15,
  },
  cardEmoji: {
    fontSize: 50,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 20,
  },

  /* 🚀 Floating Liquid Glass Dock (Bottom Bar) */
  dockWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  glassDock: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.75)', // Glassy Dark Frost
    paddingVertical: 10,
    borderRadius: 35,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    shadowColor: '#38BDF8',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 12,
  },
  dockItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  dockIcon: {
    fontSize: 22,
    opacity: 0.5,
  },
  dockIconActive: {
    opacity: 1,
    transform: [{ scale: 1.15 }],
  },
  activeLiquidGlow: {
    width: 16,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#38BDF8',
    marginTop: 4,
  },
  liquidCenterBtn: {
    backgroundColor: '#38BDF8',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#38BDF8',
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 10,
  },
  centerBtnPlus: {
    fontSize: 22,
    color: '#050811',
    fontWeight: 'bold',
  },
});
