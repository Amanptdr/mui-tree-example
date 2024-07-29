import { ADD_FOLDER, CLOSE_MODAL, DELETE_ITEM, EDIT_ITEM, OPEN_MODAL } from '../constant'
const folderData = [
        {
          id: '1',
          label: 'Documents',
          children: [
            {
              id: '1.1',
              label: 'Company',
              children: [
                { id: '1.1.1', label: 'Invoice', fileType: 'pdf' },
                { id: '1.1.2', label: 'Meeting notes', fileType: 'doc' },
                { id: '1.1.3', label: 'Tasks list', fileType: 'doc' },
                { id: '1.1.4', label: 'Equipment', fileType: 'pdf' },
                { id: '1.1.5', label: 'Video conference', fileType: 'video' },
              ],
            },
            { id: '1.2', label: 'Personal', fileType: 'folder' },
            { id: '1.3', label: 'Group photo', fileType: 'image' },
          ],
        },
        {
          id: '2',
          label: 'Bookmarked',
          fileType: 'pinned',
          children: [
            { id: '2.1', label: 'Learning materials', fileType: 'folder' },
            { id: '2.2', label: 'News', fileType: 'folder' },
            { id: '2.3', label: 'Forums', fileType: 'folder' },
            { id: '2.4', label: 'Travel documents', fileType: 'pdf' },
          ],
        },
        { id: '3', label: 'History', fileType: 'folder' },
        // { id: '4', label: 'Trash', fileType: 'trash' },
      ]
      const initialState = {
        modalOpen: false,
        currentItem: null,
        items:[],
      };


const addItemRecursively = (items, parentId, newItem) => {
    if(parentId){
        return items.map(item => {
            if (item.id === parentId) {
            return {
                ...item,
                children: [...(item.children || []), newItem],
            };
            }

            return {
            ...item,
            children: item.children ? addItemRecursively(item.children, parentId, newItem) : [],
            };
        });
    } else {
        return [...items, newItem];
    }
};
      
      
export default function FolderItems(state = initialState, action) {
    switch (action.type) {
        case ADD_FOLDER:
            return {
                ...state,
                items:addItemRecursively(state.items, action?.parentId, action?.data),
                // items: [...state.items, action.data],
            }
        case EDIT_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                item.id === action.payload.id ? action.payload : item
                ),
            };

        case DELETE_ITEM:
            const deleteItemRecursively = (items, itemId) => {
                return items
                .filter(item => item.id !== itemId)
                .map(item => ({
                    ...item,
                    children: item.children ? deleteItemRecursively(item.children, itemId) : [],
                }));
            };
        return {
            ...state,
            items: deleteItemRecursively(state.items, action.payload),
        };


        case OPEN_MODAL:
            return {
                ...state,
                modalOpen: true,
                currentItem: action.payload,
                parentId:action.parentId
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalOpen: false,
                currentItem: null,
            };
        default:
                return state;
    
    }
}