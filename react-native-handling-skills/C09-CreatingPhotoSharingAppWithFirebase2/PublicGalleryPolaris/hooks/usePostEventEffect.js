import React, { useEffect } from 'react';

import events from '../lib/events';

export default function usePostEventEffect({
  onRefresh,
  updatePost,
  deletePost,
  enabled,
}) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    events.addListener('refresh', onRefresh);
    events.addListener('deletePost', deletePost);
    events.addListener('updatePost', updatePost);

    return () => {
      events.removeListener('refresh', onRefresh);
      events.removeListener('deletePost', deletePost);
      events.removeListener('updatePost', updatePost);
    };
  }, [onRefresh, updatePost, deletePost, enabled]);
}
