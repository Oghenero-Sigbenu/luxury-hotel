import {IRoom} from '../../interfaces/room';
import {RoomActions, RoomActionTypes} from '../actions/rooms';

export interface IRoomState {
    data: IRoom[];
    isLoading: boolean;
    message: string;
}

const initialState: IRoomState = {
    data: [],
    isLoading: false,
    message: ''
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
    }
}