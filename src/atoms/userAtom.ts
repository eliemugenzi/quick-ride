import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EStorageKeys } from "@/utils/enums/EStorageKeys";

const userDataStorage = createJSONStorage(() => AsyncStorage);
const userData: Record<string, any> = {
  data: {},
  error: null,
};

interface ISignUpPayload {
  data: Record<string, any>;
  callback: () => void;
}
export const userAtom = atomWithStorage(
  EStorageKeys.USER_DATA,
  userData,
  userDataStorage,
);

const authenticationAtom = atom(
  (get) => get(userAtom),
  async (get, set, { data, callback }: ISignUpPayload) => {
    const currentData: any = get(userAtom);
    if (
      currentData?.data?.email === data?.email &&
      currentData?.data?.mobileNumber === data?.mobileNumber
    ) {
      set(userAtom, {
        ...currentData,
        data: {},
        error: "The user you are tying to add already exists!",
      });

      return;
    }

    set(userAtom, {
      ...currentData,
      data,
      error: null,
    });

    callback?.();
  },
);

export default authenticationAtom;
