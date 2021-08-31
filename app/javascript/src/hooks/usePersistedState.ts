import type { SetStateAction, Dispatch } from "react";
import { useState, useEffect, useCallback } from "react";

export const usePersistedState = <S>(
  key: string,
  initialValue: S,
  ttl?: number
): [S, Dispatch<SetStateAction<S>>] => {
  type PersistedStatePaylaod = {
    value: S;
    expiry?: number;
  };

  const [state, setState] = useState<S>(() => {
    try {
      const localStorageRaw = localStorage.getItem(key);

      if (localStorageRaw === null) return initialValue;

      const payload: PersistedStatePaylaod = JSON.parse(localStorageRaw);

      if (!payload.expiry) return payload.value;

      const expired = new Date().getTime() > payload.expiry;

      if (expired) return initialValue;

      return payload.value;
    } catch {
      return initialValue;
    }
  });

  const setLocalStorage = useCallback(
    (value) => {
      try {
        const expiry = ttl ? new Date().getTime() + ttl : undefined;
        const payload: PersistedStatePaylaod = { value, expiry };

        localStorage.setItem(key, JSON.stringify(payload));
      } catch {
        localStorage.removeItem(key);
      }
    },
    [key]
  );

  const setLocalStorageAndState: Dispatch<SetStateAction<S>> = (newState) => {
    setLocalStorage(newState);
    setState(newState);
  };

  useEffect(() => {
    setLocalStorage(state);
  }, [setLocalStorage, state]);

  return [state, setLocalStorageAndState];
};
