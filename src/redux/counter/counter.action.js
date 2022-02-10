const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

let incrAction = () => {
    return { type: INCREMENT }
}
let decrAction = () => {
    return { type: DECREMENT }
}
export { INCREMENT, DECREMENT, incrAction, decrAction }