import React from 'react';
import { Platform, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

function formatDate(date) {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    return '방금 전';
  }

  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }

  return format(d, 'PPP EEE p', { locale: ko });
}

function truncate(text) {
  const replaced = text.replace(/\n/g, ' ');
  if (replaced.length <= 100) {
    return replaced;
  }

  return replaced.slice(0, 100).concat('...');
}

function FeedListItem({ log }) {
  const { title, body, date } = log;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Writing', { log });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.block,
        Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' },
      ]}
      android_ripple={{ color: '#ededed' }}
      onPress={onPress}
    >
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    marginBottom: 8,
    fontSize: 12,
    color: '#546e7a',
  },
  title: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263238',
  },
  body: {
    fontSize: 16,
    color: '#37474f',
    lineHeight: 21,
  },
});

export default FeedListItem;
