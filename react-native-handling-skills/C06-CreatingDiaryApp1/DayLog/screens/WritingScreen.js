import React, { useState, useContext } from 'react';
import { Platform, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import LogContext from '../contexts/LogContext';
import WritingScreenHeader from '../components/WritingScreenHeader';
import WritingEditor from '../components/WritingEditor';

function WritingScreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigation = useNavigation();

  const { onCreate } = useContext(LogContext);

  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <WritingScreenHeader onSave={onSave} />

        <WritingEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WritingScreen;
