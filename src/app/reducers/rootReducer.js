import eventReducer from "../../features/event/eventReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    events: eventReducer
})


export default rootReducer;