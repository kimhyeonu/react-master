import AsyncStorage from '@react-native-community/async-storage';

const key = 'logs';

const logsStorage = {
  async get() {
    try {
      const rawData = await AsyncStorage.getItem(key);
      const parsedData = JSON.parse(rawData);
      return parsedData;
    } catch (e) {
      throw new Error('데이터를 불러오는 데 실패했어요.');
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('데이터를 저장하는 데 실패했어요.');
    }
  },
};

export default logsStorage;
