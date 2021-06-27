import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PostCard = ({detail, bg}) => {
  return (
    <View style={styles.container(bg)}>
      <Text numberOfLines={2} style={styles.title}>
        {detail.title}
      </Text>
      <Text style={{color: 'white'}}>{detail.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: bg => {
    return {
      backgroundColor: bg ? bg : 'red',
      marginTop: 16,
      padding: 8,
    };
  },
  title: {fontSize: 20, color: 'white'},
});
export default PostCard;
