import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function CreateScreen() {
  const [selectedMode, setSelectedMode] = useState('REEL'); // 'POST', 'REEL', 'LIVE'
  const [caption, setCaption] = useState('');
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [liveViewers, setLiveViewers] = useState(1280);

  // Live Stream toggle
  const toggleLive = () => {
    setIsLiveActive(!isLiveActive);
  };

  // Upload Simulation
  const handleUpload = () => {
    if (!caption.trim()) {
      alert('Pehle caption likho bhai!');
      return;
    }
    alert(`🎉 Circular par aapki ${selectedMode} successfully upload ho gayi!`);
    setCaption('');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Top Studio Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {selectedMode === 'LIVE' ? '🔴 Live Broadcast' : '✨ Create Studio'}
        </Text>
        <Text style={styles.headerSubtitle}>Liquid Glass Creator Space</Text>
      </View>

      {/* 🔴 AGAR USER NE 'LIVE' CHUNA HAI */}
      {selectedMode === 'LIVE' ? (
        <View style={styles.liveContainer}>
          <View style={styles.liveViewFinder}>
            <View style={styles.liveBadgeRow}>
              <View style={styles.redLiveBadge}>
                <Text style={styles.liveBadgeText}>LIVE</Text>
              </View>
              <View style={styles.viewersBadge}>
                <Text style={styles.viewersText}>👁️ {isLiveActive ? liveViewers : 0}</Text>
              </View>
            </View>

            <View style={styles.liveCenterVisual}>
              <Text style={styles.liveEmoji}>{isLiveActive ? '🎙️ 🎥' : '📹'}</Text>
              <Text style={styles.liveStatusText}>
                {isLiveActive ? 'Aap Live broadcast kar rahe ho!' : 'Camera Ready. Go Live dabao!'}
              </Text>
            </View>

            {/* Simulated Live Audience Chat Stream */}
            {isLiveActive && (
              <View style={styles.liveChatStream}>
                <Text style={styles.chatMessage}>
                  <Text style={styles.chatUser}>@priya_09: </Text>Hello Rohit bhai!! ❤️
                </Text>
                <Text style={styles.chatMessage}>
                  <Text style={styles.chatUser}>@tech_guru: </Text>Circular app looking insane 🔥
                </Text>
                <Text style={styles.chatMessage}>
                  <Text style={styles.chatUser}>@vibe_master: </Text>Big fan bhai! 🚀
                </Text>
              </View>
            )}
          </View>

          {/* Go Live / End Live Button */}
          <TouchableOpacity
            onPress={toggleLive}
            style={[styles.goLiveBtn, isLiveActive && styles.endLiveBtn]}
          >
            <Text style={styles.goLiveBtnText}>
              {isLiveActive ? '⏹ END BROADCAST' : '🔴 START GO LIVE'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        /* 🎬 YA 📸 AGAR USER NE 'REEL' YA 'POST' CHUNA HAI */
        <View style={styles.createCard}>
          {/* Media Preview Box */}
          <TouchableOpacity style={styles.uploadArea}>
            <Text style={styles.uploadIcon}>
              {selectedMode === 'REEL' ? '🎬' : '🖼️'}
            </Text>
            <Text style={styles.uploadPrompt}>
              Tap to choose {selectedMode === 'REEL' ? 'Video from Gallery' : 'Photo'}
            </Text>
            <Text style={styles.uploadSubPrompt}>Supports 4K, 60FPS Fluid Media</Text>
          </TouchableOpacity>

          {/* Caption Input */}
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Caption & Hashtags</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Write something cool... #circular #trending"
              placeholderTextColor="#64748B"
              value={caption}
              onChangeText={setCaption}
              multiline
            />
          </View>

          {/* Options (Audio, Tag Friends) */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.optionPill}>
              <Text style={styles.optionPillText}>🎵 Add Music</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionPill}>
              <Text style={styles.optionPillText}>🏷️ Tag Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionPill}>
              <Text style={styles.optionPillText}>📍 Location</Text>
            </TouchableOpacity>
          </View>

          {/* Submit Post / Reel Button */}
          <TouchableOpacity onPress={handleUpload} style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>
              Share {selectedMode === 'REEL' ? 'Reel' : 'Post'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 🎛️ Bottom Mode Selector Slider */}
      <View style={styles.modeSelector}>
        <TouchableOpacity
          onPress={() => setSelectedMode('POST')}
          style={[styles.modeTab, selectedMode === 'POST' && styles.activeModeTab]}
        >
          <Text style={[styles.modeText, selectedMode === 'POST' && styles.activeModeText]}>
            POST
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedMode('REEL')}
          style={[styles.modeTab, selectedMode === 'REEL' && styles.activeModeTab]}
        >
          <Text style={[styles.modeText, selectedMode === 'REEL' && styles.activeModeText]}>
            REEL
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedMode('LIVE')}
          style={[styles.modeTab, selectedMode === 'LIVE' && styles.activeModeTab]}
        >
          <Text style={[styles.modeText, selectedMode === 'LIVE' && styles.activeLiveModeText]}>
            🔴 LIVE
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050811',
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#38BDF8',
    marginTop: 2,
    fontWeight: '600',
  },
  createCard: {
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    borderRadius: 24,
    borderWidth: 1.2,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    padding: 18,
    marginTop: 10,
  },
  uploadArea: {
    height: 180,
    backgroundColor: 'rgba(30, 41, 59, 0.6)',
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: 'rgba(56, 189, 248, 0.4)',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {
    fontSize: 42,
    marginBottom: 8,
  },
  uploadPrompt: {
    color: '#F8FAFC',
    fontWeight: 'bold',
    fontSize: 14,
  },
  uploadSubPrompt: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 4,
  },
  inputBox: {
    marginTop: 18,
  },
  inputLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
  textInput: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 12,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    minHeight: 70,
    textAlignVertical: 'top',
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 8,
    flexWrap: 'wrap',
  },
  optionPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
  },
  optionPillText: {
    color: '#E2E8F0',
    fontSize: 12,
    fontWeight: '500',
  },
  submitBtn: {
    backgroundColor: '#38BDF8',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#38BDF8',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },
  submitBtnText: {
    color: '#050811',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },

  /* 🔴 LIVE STYLING */
  liveContainer: {
    marginTop: 10,
  },
  liveViewFinder: {
    height: 380,
    backgroundColor: '#0F172A',
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#EF4444',
    padding: 16,
    justifyContent: 'space-between',
  },
  liveBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  redLiveBadge: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  liveBadgeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  viewersBadge: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  viewersText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  liveCenterVisual: {
    alignItems: 'center',
  },
  liveEmoji: {
    fontSize: 60,
  },
  liveStatusText: {
    color: '#CBD5E1',
    fontSize: 13,
    marginTop: 8,
  },
  liveChatStream: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 12,
    gap: 4,
  },
  chatMessage: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  chatUser: {
    color: '#38BDF8',
    fontWeight: 'bold',
  },
  goLiveBtn: {
    backgroundColor: '#EF4444',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 15,
  },
  endLiveBtn: {
    backgroundColor: '#334155',
  },
  goLiveBtnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },

  /* 🎛️ Mode Selector */
  modeSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
  },
  modeTab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  activeModeTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  modeText: {
    color: '#94A3B8',
    fontWeight: 'bold',
    fontSize: 13,
  },
  activeModeText: {
    color: '#38BDF8',
  },
  activeLiveModeText: {
    color: '#EF4444',
  },
});
