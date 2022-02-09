import { GM, GN } from "./message.action";
let initialstate = {
    msg: "Hello.....dude"
}
let messageReducer = (state = initialstate, action) => {
    console.log("Message Reducer - redux reducer", action.type)

    switch (action.type) {
        case GM:
            return { msg: "Good Morning" }
        case GN:
            return { msg: "Good Night" }
        default:
            return state
    }
}
export { messageReducer };