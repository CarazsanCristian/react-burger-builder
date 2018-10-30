export const updateObject = (oldObject, updatedProprieties)=>{
    return{
        ...oldObject,
        ...updatedProprieties
    }
};