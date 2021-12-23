// Reducer
// import { useMemo } from 'react';
// import { bindActionCreators } from 'redux';
// import { useDispatch } from 'react-redux';
// import { signin, signout } from '../slices/auth';

// export default function useAuthActions() {
//   const dispatch = useDispatch();

//   // return {
//   //   signin: (user: User) => dispatch(signin(user)),
//   //   signout: () => dispatch(signout()),
//   // };

//   return useMemo(
//     () => bindActionCreators({ signin, signout }, dispatch),
//     [dispatch]
//   );
// }

// Recoil
import { useMemo } from 'react';
import { useSetRecoilState } from 'recoil';

import { authState, User } from '../atoms/auth';

export default function useAuthActions() {
  const set = useSetRecoilState(authState);

  return useMemo(
    () => ({
      signin: (user: User) => {
        set({ user });
      },
      signout: () => {
        set({ user: null });
      },
    }),
    [set]
  );
}
