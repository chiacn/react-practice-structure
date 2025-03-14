import { STATUS_CHECK_SESSION_STORAGE_KEY } from "../const/StorageKey";

export const saveTimestampToSessionStorage = () => {
  sessionStorage.setItem(
    STATUS_CHECK_SESSION_STORAGE_KEY,
    JSON.stringify(new Date().getTime())
  );
};

export const getTimestampFromSessionStorage = () => {
  return sessionStorage.getItem(STATUS_CHECK_SESSION_STORAGE_KEY);
};

export const removTimestampFromSessionStorage = () => {
  sessionStorage.removeItem(STATUS_CHECK_SESSION_STORAGE_KEY);
};
