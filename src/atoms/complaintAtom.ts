import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EStorageKeys } from '@/utils/enums/EStorageKeys';

const storage = createJSONStorage(()=> AsyncStorage)

interface IComplaint {
    id: string;
    type: string;
    description: string;
    createdAt: Date;
}

type IAtomData = {
    data: IComplaint[],
    error: string | null
}

const data: IAtomData= {
    data: [],
    error: null
}

const complaintAtom = atomWithStorage(
    EStorageKeys.USER_COMPLAINTS,
data,
storage
)

const submitComplaintAtom = atom((get)=> get(complaintAtom), async (get, set, payload: IComplaint)=> {
    const currentData = await get(complaintAtom) as IAtomData;

    const newData = [payload, ...currentData.data]
    set(complaintAtom, {
        ...currentData,
        data: newData
    });
})

export const removeComplaint = atom((get)=> get(complaintAtom), async (get, set, complaintId: string)=> {
    const currentData = await get(complaintAtom) as IAtomData;
    const foundComplaint = currentData?.data?.find((complaint)=> complaint.id === complaintId);
    if(!foundComplaint) {
        set(complaintAtom, {
            ...currentData,
            error: 'The complain you are trying to remove does not exist'

        })

        return
    }

    set(complaintAtom, {
        ...currentData,
        data: currentData?.data?.filter((complaint)=> complaint.id !== complaintId),
        error: null
    })

})

export const editComplaint = atom((get)=> get(complaintAtom), async (get, set, {
    complaintId,
    payload,
    callback
})=> {
    const currentData = await get(complaintAtom) as IAtomData;
    const foundComplaint = currentData?.data?.find((complaint)=> complaint.id === complaintId);
    if(!foundComplaint) {
        set(complaintAtom, {
            ...currentData,
            error: 'The complain you are trying to edit does not exist'

        })

        return
    }

    for(const [key, value] of Object.entries(payload)) {
        (foundComplaint as any)[key] = value
    }


    set(complaintAtom, {
        ...currentData,
        data: [foundComplaint, ...currentData?.data?.filter((complaint)=> complaint.id !== complaintId)],
        error: null
    })

    callback?.()

})


export default submitComplaintAtom