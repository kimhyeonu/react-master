import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Profile from '../../../components/Profile';
import { useMemberContext } from '../../../contexts/MemberContext';

function MyProfileScreen() {
  const navigation = useNavigation();

  const { member } = useMemberContext();

  useEffect(() => {
    navigation.setOptions({
      title: member.nickname,
    });
  }, [navigation, member]);

  return <Profile memberId={member.id} />;
}

export default MyProfileScreen;
