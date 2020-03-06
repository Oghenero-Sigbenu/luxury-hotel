import * as fromRoom from "./room";
import * as fromUser from "./user";

export const reducer = {
    rooms: fromRoom.reducer,
    users: fromUser.reducer
}