import { RANDSTRING, BACKTOMONKE } from '../actions'


const otherFunc = (state = ["default", "nothing"], action) => {
    switch(action.type) {
        case RANDSTRING:
            return [ action.power.variable ]
        case BACKTOMONKE:
            return [ action.pow.varb]
        default:
            return state
    }
}

export default otherFunc