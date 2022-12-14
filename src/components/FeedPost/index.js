import { StatusBar } from "expo-status-bar";
import { Text, Image, View, Pressable } from "react-native";
import { useState } from "react";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import LikeImage from "../../../assets/images/like.png";
import styles from "./styles.js";

export default function FeedPost({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.container}>
      {/* Post component */}
      <View style={styles.post}>
        {/* Post Header with details about the author */}
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="gray"
            style={styles.icon}
          />
        </View>

        {/* Post body with description and image */}
        <Text style={styles.description}>{post.description}</Text>
        {post.image && (
          <Image
            source={{ uri: post.image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        {/* Post footer with likes and button */}
        <View style={styles.footer}>
          {/* Stats row */}
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeIcon} />
            <Text style={styles.likedBy}>
              Elon Musk and {post.numberOfLikes} others
            </Text>
            <Text style={styles.shares}>{post.numberOfShares} shares</Text>
          </View>

          {/* Buttons row */}
          <View style={styles.buttonsRow}>
            {/* Like button */}
            {/* <View style={styles.iconButton}>
                <AntDesign name="like2" size={18} color="gray" />
                <Text style={styles.iconButtonText}>Like</Text>
              </View> */}
            <Pressable
              onPress={() => setIsLiked(!isLiked)} //<- onPress event toggles isLiked
              style={styles.iconButton}
            >
              <AntDesign
                name="like2"
                size={18}
                color={isLiked ? "royalblue" : "gray"}
              />
              <Text
                style={[
                  styles.iconButtonText,
                  { color: isLiked ? "royalblue" : "gray" },
                ]}
              >
                Like
              </Text>
            </Pressable>

            {/* Comment button */}
            <View style={styles.iconButton}>
              <FontAwesome5 name="comment-alt" size={16} color="gray" />
              <Text style={styles.iconButtonText}>Comment</Text>
            </View>

            {/* Share button */}
            <View style={styles.iconButton}>
              <MaterialCommunityIcons
                name="share-outline"
                size={18}
                color="gray"
              />
              <Text style={styles.iconButtonText}>Share</Text>
            </View>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
