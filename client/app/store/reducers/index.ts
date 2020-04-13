import * as fromRoom from "./room";
import * as fromUser from "./user";
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export default interface RoomState {
    data: fromRoom.IRoomState
}
export const reducers: ActionReducerMap<RoomState> = {
    data: fromRoom.reducer,
    // users: fromUser.reducer
}
export const getProdState = createFeatureSelector<RoomState>(
    "rooms"
    )
    export const getRoomState = createSelector(getProdState, 
        (state: RoomState) => state.data
        
    )
    export const getAllData = createSelector(getRoomState,fromRoom.getData)
    export const getDatasLoaded = createSelector(getRoomState,fromRoom.getDataLoaded)
    export const getDatasLoading = createSelector(getRoomState,fromRoom.getDataLoading)