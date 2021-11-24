import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function WritingEditor({ title, body, onChangeTitle, onChangeBody }) {
  const bodyRef = useRef();

  return (
    <View style={styles.block}>
      <TextInput
        value={title}
        onChangeText={onChangeTitle}
        placeholder="제목을 입력하세요."
        returnKeyType="next"
        style={styles.titleInput}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />

      <TextInput
        value={body}
        onChangeText={onChangeBody}
        placeholder="당신의 오늘을 기록하세요."
        multiline
        textAlignVertical="top"
        style={styles.bodyInput}
        ref={bodyRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    marginBottom: 16,
    paddingVertical: 0,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263238',
  },
  bodyInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 16,
    color: '#263238',
  },
});

export default WritingEditor;
