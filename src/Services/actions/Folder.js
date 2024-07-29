import {ADD_FOLDER, CLOSE_MODAL, DELETE_ITEM, EDIT_ITEM, OPEN_MODAL} from '../constant'

export const addFolder =(data,parentId)=>{
    return {
        type:ADD_FOLDER,
        data:data,
        parentId:parentId
    }
}
export const editItem = (item) => ({
    type: EDIT_ITEM,
    payload: item,
  });

export const deleteItem = (itemId) => ({
    type: DELETE_ITEM,
    payload: itemId,
  });
export const openModal = (item = null,id='') => ({
    type: OPEN_MODAL,
    payload: item,
    parentId:id,
  });
  
  export const closeModal = () => ({
    type: CLOSE_MODAL,
  });
  