// Redux
// import { useCallback, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { fetchPosts } from '../slices/posts';

// export default function usePosts(enabled: boolean = true) {
//   const posts = useSelector((state) => state.posts.posts);
//   const dispatch = useDispatch();
//   const fetchData = useCallback(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   useEffect(() => {
//     if (!enabled) {
//       return;
//     }

//     fetchData();
//   }, [enabled, fetchData]);

//   return {
//     ...posts,
//     refetch: fetchData,
//   };
// }

// Recoil
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { getPosts } from '../api/getPosts';
import { postsState } from '../atoms/posts';

export default function usePosts(enabled: boolean = true) {
  const [{ loading, data, error }, set] = useRecoilState(postsState);

  const fetchData = useCallback(async () => {
    set({ loading: true, data: null, error: null });

    try {
      const posts = await getPosts();
      set({ loading: false, data: posts, error: null });
    } catch (e: unknown) {
      set({ loading: false, data: null, error: e as Error });
    }
  }, [set]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    fetchData();
  }, [enabled, fetchData]);

  return {
    loading,
    data,
    error,
    refetch: fetchData,
  };
}
