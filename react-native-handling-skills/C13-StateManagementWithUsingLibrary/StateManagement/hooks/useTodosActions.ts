// Reducer
// import { useMemo } from 'react';
// import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { add, remove, toggle } from '../slices/todos';

// export default function useTodosActions() {
//   const dispatch = useDispatch();

//   return useMemo(
//     () => bindActionCreators({ add, remove, toggle }, dispatch),
//     [dispatch]
//   );
// }

// Recoil
import { useMemo } from 'react';
import { useRecoilCallback, useSetRecoilState } from 'recoil';

import { todosState, nextTodoId } from '../atoms/todos';

export default function useTodosAction() {
  const set = useSetRecoilState(todosState);

  const add = useRecoilCallback(
    ({ snapshot }) =>
      async (title: string) => {
        const nextId = await snapshot.getPromise(nextTodoId);
        set((prevState) =>
          prevState.concat({ id: nextId, title, done: false })
        );
      },
    [set]
  );

  return useMemo(
    () => ({
      add,
      remove: (id: number) =>
        set((prevState) => prevState.filter((todo) => todo.id !== id)),
      toggle: (id: number) =>
        set((prevState) =>
          prevState.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          )
        ),
    }),
    [set, add]
  );
}
