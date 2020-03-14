export const getLocalStorageItem = key => {
    const data = window.localStorage.getItem(key);
    return JSON.parse(data);
};

export const setLocalStorageItem = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};
