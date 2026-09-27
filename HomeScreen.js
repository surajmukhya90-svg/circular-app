import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

const { width } = Dimensions.get('window');

// 🌀 Stories Data
const STORIES_DATA = [
  { id: '1', username: 'Your Story', isUser: true, emoji: '😎' },
  { id: '2', username: 'priya_09', isUser: false, emoji: '🌸' },
  { id: '3', username: 'aarav_vibe', isUser: false, emoji: '⚡' },
  { id: '4', username: 'rohit_tech', isUser: false, emoji: '💻' },
  { id: '5', username: 'vikram_art', isUser: false, emoji: '🎨' },
  { id: '6', username: 'neha_travel', isUser: false, emoji: '✈️' },
];

// 📸 Posts Feed Data
const POSTS_DATA = [
  {
    id: '101',
    username: 'aarav_vibe',
    location: 'Cyber Hub, Gurugram',
    caption: 'Neon lights and deep thoughts. Circular ecosystem is 🔥 #neon #vibe',
    likes: 842,
    comments: 48,
    time: '2 hours ago',
    postVisual: '🌃',
    bgGradient: '#1E1B4B',
  },
  {
    id: '102',
    username: 'priya_09',
    location: 'Goa Beach',
    caption: 'Sunset hues & peaceful waves 🌊🌅 Living the fluid life!',
    likes: 1920,
    comments: 112,
    time: '5 hours ago',
    postVisual: '🌅',
    bgGradient: '#831843',
  },
  {
    id: '103',
    username: 'vikram_art',
    location: 'Digital Art Studio',
    caption: '3D Liquid Glass sphere rendering done in Blender 💎🌀',
    likes: 3410,
    comments: 205,
    time: 'Yesterday',
    postVisual: '🔮',
    bgGradient: '#064E3B',
  },
];

export default function HomeScreen() {
  const [likedPosts, setLikedPosts] = useState({});

  const togglePostLike = (id) => {
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* 🌀 CIRCULAR STORIES BAR */}
      <View style={styles.storiesSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.storiesList}>
          {STORIES_DATA.map((story) => (
            <TouchableOpacity key={story.id} style={styles.storyItem}>
              <View style={[styles.storyRing, story.isUser ? styles.userStoryRing : styles.activeStoryRing]}>
                <View style={styles.storyAvatarInner}>
                  <Text style={styles.storyEmoji}>{story.emoji}</Text>
                </View>
                {story.isUser && (
                  <View style={styles.addStoryPlus}>
                    <Text style={styles.plusIcon}>+</Text>
                  </View>
                )}
              </View>
              <Text style={styles.storyUsername} numberOfLines={1}>
                {story.username}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* 📸 POSTS FEED */}
      <View style={styles.feedSection}>
        {POSTS_DATA.map((post) => {
          const isLiked = likedPosts[post.id];
          const postLikes = isLiked ? post.likes + 1 : post.likes;

          return (
            <View key={post.id} style={styles.glassPostCard}>
              {/* Post Header: User info */}
              <View style={styles.postHeader}>
                <View style={styles.postUserRow}>
                  <View style={styles.postAvatar}>
                    <Text style={{ fontSize: 16 }}>👤</Text>
                  </View>
                  <View>
                    <Text style={styles.postUsername}>@{post.username}</Text>
                    <Text style={styles.postLocation}>{post.location}</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.moreDots}>•••</Text>
                </TouchableOpacity>
              </View>

              {/* Post Media Visual */}
              <View style={[styles.postMediaBox, { backgroundColor: post.bgGradient }]}>
                <Text style={styles.postEmojiVisual}>{post.postVisual}</Text>
              </View>

              {/* Post Actions (Like, Comment, Share) */}
              <View style={styles.postActionsBar}>
                <View style={styles.leftActions}>
                  <TouchableOpacity onPress={() => togglePostLike(post.id)} style={styles.actionBtn}>
                    <Text style={[styles.actionEmoji, isLiked && styles.likedHeart]}>
                      {isLiked ? '❤️' : '🤍'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionBtn}>
                    <Text style={styles.actionEmoji}>💬</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionBtn}>
                    <Text style={styles.actionEmoji}>🚀</Text>
                  </TouchableOpacity>
                </View>

                {/* Bookmark */}
                <TouchableOpacity style={styles.actionBtn}>
                  <Text style={styles.actionEmoji}>🔖</Text>
                </TouchableOpacity>
              </View>

              {/* Likes & Caption */}
              <View style={styles.postDetails}>
                <Text style={styles.likesCountText}>{postLikes} likes</Text>
                <Text style={styles.captionText}>
                  <Text style={styles.captionUser}>@{post.username} </Text>
                  {post.caption}
                </Text>
                <Text style={styles.commentsText}>View all {post.comments} comments</Text>
                <Text style={styles.timeText}>{post.time}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050811',
  },

  /* 🌀 Stories */
  storiesSection: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },
  storiesList: {
    paddingHorizontal: 14,
    gap: 14,
  },
  storyItem: {
    alignItems: 'center',
    width: 68,
  },
  storyRing: {
    width: 66,
    height: 66,
    borderRadius: 33,
    padding: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  activeStoryRing: {
    borderWidth: 2.5,
    borderColor: '#38BDF8', // Cyan Neon Circular glow
  },
  userStoryRing: {
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  storyAvatarInner: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyEmoji: {
    fontSize: 26,
  },
  addStoryPlus: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#38BDF8',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#050811',
  },
  plusIcon: {
    color: '#050811',
    fontWeight: '900',
    fontSize: 14,
    lineHeight: 16,
  },
  storyUsername: {
    color: '#CBD5E1',
    fontSize: 11,
    marginTop: 5,
    textAlign: 'center',
  },

  /* 📸 Feed Post Cards */
  feedSection: {
    paddingHorizontal: 14,
    paddingTop: 10,
    gap: 18,
  },
  glassPostCard: {
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    borderRadius: 24,
    borderWidth: 1.2,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    overflow: 'hidden',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  postUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  postAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1E293B',
    borderWidth: 1.5,
    borderColor: '#38BDF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postUsername: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  postLocation: {
    color: '#94A3B8',
    fontSize: 10,
    marginTop: 1,
  },
  moreDots: {
    color: '#94A3B8',
    fontSize: 16,
    letterSpacing: 2,
  },
  postMediaBox: {
    width: '100%',
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postEmojiVisual: {
    fontSize: 75,
  },
  postActionsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: 'row',
    gap: 15,
  },
  actionBtn: {
    padding: 2,
  },
  actionEmoji: {
    fontSize: 22,
  },
  likedHeart: {
    transform: [{ scale: 1.2 }],
  },
  postDetails: {
    paddingHorizontal: 12,
    paddingBottom: 14,
  },
  likesCountText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 4,
  },
  captionText: {
    color: '#E2E8F0',
    fontSize: 13,
    lineHeight: 18,
  },
  captionUser: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  commentsText: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 6,
  },
  timeText: {
    color: '#475569',
    fontSize: 10,
    marginTop: 4,
    textTransform: 'uppercase',
  },
});
