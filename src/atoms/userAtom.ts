import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EStorageKeys } from "@/utils/enums/EStorageKeys";

import * as SecureStore from 'expo-secure-store';

const userDataStorage = createJSONStorage(() => AsyncStorage);
const userData: Record<string, any> = {
  data: {},
  error: null,
  isLoggedIn: false,
};

interface ISignUpPayload {
  data: Record<string, any>;
  callback: () => void;
}
export const userAtom = atomWithStorage(
  EStorageKeys.USER_DATA,
  userData,
  userDataStorage
);

const authenticationAtom = atom(
  (get) => get(userAtom),
  async (get, set, { data, callback }: ISignUpPayload) => {
    const currentData: any = await get(userAtom);
    if (
      currentData?.data?.email === data?.email &&
      currentData?.data?.mobileNumber === data?.mobileNumber
    ) {
      await set(userAtom, {
        data: {},
        error: "The user you are tying to add already exists!",
        isLoggedIn: false,
      });

      return;
    }

    const updatedData = {
      data,
      error: null,
      isLoggedIn: true,
    };

    await SecureStore.setItemAsync('LOGGED_IN_DATA', JSON.stringify(data));

  

    await set(userAtom, updatedData);

    callback?.();
  }
);

export const loginAtom = atom(
  (get) => get(userAtom),
  async (get, set, { credentials, callback }) => {
    const currentData = (await get(userAtom)) as any;

    const result = await SecureStore.getItemAsync('LOGGED_IN_DATA');
    console.log({result})

    if(result) {
      const parsedResult = JSON.parse(result);
      if (parsedResult.email === credentials?.username) {
        if (credentials?.password !== parsedResult.password) {
          set(userAtom, {
            ...currentData,
            isLoggedIn: false,
            error: "Invalid credentials",
          });
  
          return;
        }
  
        set(userAtom, {
          ...currentData,
          error: null,
          isLoggedIn: true,
        });
        callback?.();
      } else if (parsedResult.mobileNumber === credentials?.username) {
        if (credentials?.password !== parsedResult.password) {
          set(userAtom, {
            ...currentData,
            isLoggedIn: false,
            error: "Invalid credentials",
          });
  
          return;
        }
  
        set(userAtom, {
          ...currentData,
          error: null,
          isLoggedIn: true,
        });
  
        callback?.();
      } else {
        set(userAtom, {
          ...currentData,
          isLoggedIn: false,
          error: "Invalid credentials",
        });
      }
    }

    
  }
);

export const logOutAtom = atom(
  (get) => get(userAtom),
  async (get, set, { callback }) => {
    const currentData = get(userAtom) as any;

    set(userAtom, {
      ...currentData,
      isLoggedIn: false,
    });

    callback?.();
  }
);

export default authenticationAtom;
