import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export default function useActions(actions, deps) {
  const dispatch = useDispatch();

  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((array) => bindActionCreators(array, dispatch));
      }

      return bindActionCreators(actions, dispatch);
    },

    deps ? [dispatch, ...deps] : deps
  );
}
