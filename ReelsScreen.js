import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

// Sample Reels Data (Real app me ye database se aayega)
const REELS_DATA = [
  {
    id: '1',
    username: 'aarav_vibe',
    caption: 'Midnight neon vibes in Mumbai 🌃✨ #circular #nightvibes',
    song: 'Original Audio - Aarav Sound',
    likes: 1240,
    comments: 89,
    shares: 45,
    bgGradient: '#1E1B4B', // Deep Indigo
    emoji: '🌌',
  },
  {
    id: '2',
    username: 'rohit_tech',
    caption: 'Circular App ka Liquid Glass UI kaisa laga guys? 💎🚀 #coding #ui',
    song: 'Cyberpunk 2077 - Liquid Theme',
    likes: 4520,
    comments: 310,
    shares: 182,
    bgGradient: '#064E3B', // Deep Emerald
    emoji: '⚡',
  },
  {
    id: '3',
    username: 'priya_creations',
    caption: 'New fluid art piece completed today! Rate 1-10 🎨🌀',
    song: 'Aesthetic Beats - Lofi Chill',
    likes: 9800,
    comments: 654,
    shares: 412,
    bgGradient: '#4C0519', // Deep Crimson
    emoji: '🎨',
  },
];

export default function ReelsScreen() {
  const [reels, setReels] = useState(REELS_DATA);
  const [likedReels, setLikedReels] = useState({});
  const [followingUsers, setFollowingUsers] = useState({});

  // Like Toggle Function
  const handleLike = (id) => {
    setLikedReels((prev) => {
      const isLiked = prev[id];
      return { ...prev, [id]: !isLiked };
    });
  };

  // Follow Toggle Function
  const handleFollow = (username) => {
    setFollowingUsers((prev) => ({
      ...prev,
      [username]: !prev[username],
    }));
  };

  const renderReelItem = ({ item }) => {
    const isLiked = likedReels[item.id];
    const isFollowing = followingUsers[item.username];
    const currentLikes = isLiked ? item.likes + 1 : item.likes;

    return (
      <View style={[styles.reelContainer, { backgroundColor: item.bgGradient }]}>
        {/* Ambient Video Visual Simulation */}
        <View style={styles.centerVisual}>
          <Text style={styles.bigVisualEmoji}>{item.emoji}</Text>
          <Text style={styles.videoSimulationText}>[ Video Playing Live ]</Text>
        </View>

        {/* Right Side Liquid Glass Action Buttons */}
        <View style={styles.rightActionsBar}>
          {/* Like Button */}
          <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.glassActionBtn}>
            <Text style={[styles.actionIcon, isLiked && styles.likedHeart]}>
              {isLiked ? '❤️' : '🤍'}
            </Text>
            <Text style={styles.actionCount}>{currentLikes}</Text>
          </TouchableOpacity>

          {/* Comment Button */}
          <TouchableOpacity style={styles.glassActionBtn}>
            <Text style={styles.actionIcon}>💬</Text>
            <Text style={styles.actionCount}>{item.comments}</Text>
          </TouchableOpacity>

          {/* Share Button */}
          <TouchableOpacity style={styles.glassActionBtn}>
            <Text style={styles.actionIcon}>🚀</Text>
            <Text style={styles.actionCount}>{item.shares}</Text>
          </TouchableOpacity>

          {/* Spinning Music Track Icon */}
          <View style={styles.musicDiscBtn}>
            <Text style={styles.musicDiscEmoji}>💿</Text>
          </View>
        </View>

        {/* Bottom Info: Username, Caption & Song */}
        <View style={styles.bottomInfoContainer}>
          <View style={styles.userRow}>
            <View style={styles.smallAvatar}>
              <Text style={{ fontSize: 14 }}>👤</Text>
            </View>
            <Text style={styles.usernameText}>@{item.username}</Text>

            {/* Follow/Following Button */}
            <TouchableOpacity 
              onPress={() => handleFollow(item.username)} 
              style={[styles.followBtn, isFollowing && styles.followingBtn]}
            >
              <Text style={[styles.followBtnText, isFollowing && styles.followingBtnText]}>
                {isFollowing ? 'Following' : 'Follow'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Caption */}
          <Text style={styles.captionText}>{item.caption}</Text>

          {/* Music Audio Bar */}
          <View style={styles.musicRow}>
            <Text style={styles.musicEmoji}>🎵</Text>
            <Text style={styles.musicTitleText}>{item.song}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        renderItem={renderReelItem}
        keyExtractor={(item) => item.id}
        pagingEnabled={true} // Full screen snap like Instagram
        showsVerticalScrollIndicator={false}
        snapToInterval={height - 130}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050811',
  },
  reelContainer: {
    width: width,
    height: height - 130, // Bottom dock ke liye space
    justifyContent: 'flex-end',
    position: 'relative',
  },
  centerVisual: {
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bigVisualEmoji: {
    fontSize: 90,
  },
  videoSimulationText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 13,
    marginTop: 10,
    letterSpacing: 2,
    fontWeight: 'bold',
  },

  /* 🪟 Liquid Glass Right Actions */
  rightActionsBar: {
    position: 'absolute',
    right: 14,
    bottom: 40,
    alignItems: 'center',
    gap: 16,
  },
  glassActionBtn: {
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    shadowColor: '#38BDF8',
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  actionIcon: {
    fontSize: 24,
  },
  likedHeart: {
    transform: [{ scale: 1.2 }],
  },
  actionCount: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 3,
  },
  musicDiscBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#38BDF8',
    marginTop: 5,
  },
  musicDiscEmoji: {
    fontSize: 20,
  },

  /* Bottom User & Caption Area */
  bottomInfoContainer: {
    paddingHorizontal: 18,
    paddingBottom: 25,
    width: width * 0.78,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  smallAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1E293B',
    borderWidth: 1.5,
    borderColor: '#38BDF8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  usernameText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 12,
  },
  followBtn: {
    backgroundColor: '#38BDF8',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 14,
  },
  followingBtn: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  followBtnText: {
    color: '#050811',
    fontWeight: 'bold',
    fontSize: 11,
  },
  followingBtnText: {
    color: '#FFFFFF',
  },
  captionText: {
    color: '#E2E8F0',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 10,
  },
  musicRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicEmoji: {
    fontSize: 12,
    marginRight: 6,
  },
  musicTitleText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
  },
});
