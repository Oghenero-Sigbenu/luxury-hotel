import {IRoom} from '../../interfaces/room';
import {RoomActions, RoomActionTypes} from '../actions/rooms';

export interface IRoomState {
    data: IRoom[];
    isLoading: boolean;
    loaded: boolean;
    message: string;
}

export const initialState: IRoomState = {
    data: [
        {
        name :"string",
        url: "jjj",
        id: 12334,
        roomType: "string"
    }],
    isLoading: false,
    message: '',
    loaded: false
}

export function reducer(state = initialState, action: RoomActions): IRoomState {
    switch (action.type) {
        case RoomActionTypes.PostRoom: {
            return {
                ...state,
                isLoading: true
            }
        }
        case RoomActionTypes.PostRoomFail: {
            return {
                data: [],
                isLoading: false,
                loaded: false,
                message: "Error adding room"
            }
        }
        case RoomActionTypes.PostRoomSuccess: {
            const updatedData = [...state['data']];
            updatedData.push(action.payload)
            return {
                ...state,
                data: updatedData,
                isLoading: false,
                message: "Data posted Successfully!"
            }
        }
        case RoomActionTypes.LoadRoom:{
            return {
                ...state,
                isLoading: true
            }
        }
        case RoomActionTypes.LoadRoomSuccess:{
            return {
                ...state,
                isLoading: false,
                loaded: true
            }
        }
        case RoomActionTypes.LoadRoomFail:{
            return {
                ...state,
                isLoading: false,
                loaded: false
            }
        }
    }
    // return state;
}

export const getDataLoaded = (state: IRoomState) =>  state.loaded;
export const getDataLoading = (state: IRoomState) =>  state.isLoading;
export const getData = (state: IRoomState) =>  state.data;