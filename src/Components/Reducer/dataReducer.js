import * as allTypes from "../Actions/allTypes"

const initialstate ={
    dataInfo : [],
}

 const dataReducer =(state =initialstate, action)=>{
    switch(action.type){
        case( allTypes.setData):
        return {
            ...initialstate,
            dataInfo: action.payload
        }
        default : return state
    }


}


export default dataReducer