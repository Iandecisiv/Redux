import { bindActionCreators } from 'redux';
// import { LOADING, SUCCESS, ERROR } from '../actions/index';

const initialState = 0;

export function bankingReducer(state = initialState, action) {
    switch (action.type) {
        case "DEPOSIT":
            return state + action.amount
            
        case "WITHDRAW":
            return state - action.amount

        case "COLLECT_INTEREST":
            return state*1.03
            
        case "DELETE_ACCOUNT":
            return 0
            
        default:
            return state;
    }
};


