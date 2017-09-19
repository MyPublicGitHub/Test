import {combineReducers} from 'redux'; 
import LoginReduce from './LoginReduce'


const rootReducer = combineReducers({ 

    login:LoginReduce,

}); 

export default rootReducer;