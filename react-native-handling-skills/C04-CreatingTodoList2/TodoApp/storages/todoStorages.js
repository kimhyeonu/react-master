import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'todos';

const todosStorages = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);
      if (!rawTodos) {
        throw new Error('저장된 데이터가 존재하지 않습니다.');
      }

      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('할 일을 불러오는 데 실패했습니다.');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('할 일을 저장하는 데 실패했습니다.');
    }
  },
};

export default todosStorages;
