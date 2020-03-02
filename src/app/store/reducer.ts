import { IUser } from '../interfaces/user';
import { UserActions, UserActionTypes } from './actions';

export interface IUserState {
    data: IUser[];
    isLoading: boolean;
    message: string;
}

const initialState: IUserState = {
    data: [],
    isLoading: false,
    message: ''

};


export function reducer(state = initialState, action: UserActions): IUserState {
    switch (action.type) {
        case UserActionTypes.PostUser: {
            return {
                ...state,
                isLoading: true
            }
        }
        case UserActionTypes.PostUserFail: {
            return {
                data: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        case UserActionTypes.PostUserSuccess: {
            const updatedData = [...state['data']];
            updatedData.push(action.payload)
            return {
                ...state,
                data: updatedData,
                isLoading: false,
                message: 'Data posted Successfully!'
            }
        }
    }}