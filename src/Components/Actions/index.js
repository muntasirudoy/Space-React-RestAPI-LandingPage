
import * as allTypes from './allTypes'



export const setData =(info)=>{

return{
    type: allTypes.setData,
    payload:{
        allinfo: info
    }
}

}
