import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { User, signin, signout } from '../slices/auth';

export default function useAuthActions() {
  const dispatch = useDispatch();

  // return {
  //   signin: (user: User) => dispatch(signin(user)),
  //   signout: () => dispatch(signout()),
  // };

  return useMemo(
    () => bindActionCreators({ signin, signout }, dispatch),
    [dispatch]
  );
}
