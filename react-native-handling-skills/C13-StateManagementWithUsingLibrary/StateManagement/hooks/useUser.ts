// Reducer
// import { useSelector } from 'react-redux';

// export default function useUser() {
//   return useSelector((state) => state.auth.user);
// }

// Recoil
import { useRecoilValue } from 'recoil';

import { authState } from '../atoms/auth';

export default function useUser() {
  const auth = useRecoilValue(authState);
  return auth.user;
}
