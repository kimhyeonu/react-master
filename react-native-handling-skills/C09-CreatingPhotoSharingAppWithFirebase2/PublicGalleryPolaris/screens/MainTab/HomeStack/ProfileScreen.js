import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import Profile from '../../../components/Profile';

function ProfileScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { memberId, nickname } = route.params ?? {};

  useEffect(() => {
    navigation.setOptions({
      title: nickname,
    });
  }, [navigation, nickname]);

  return <Profile memberId={memberId} />;
}

export default ProfileScreen;
