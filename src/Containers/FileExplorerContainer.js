import FileExplorer from '../components/FileExplorer'
import {connect} from 'react-redux'
import { addFolder, openModal, closeModal, addItem, editItem, deleteItem } from '../Services/actions/Folder';
const mapStateToProps=state=>({
    data:state
})
const mapDispatchToProps=dispatch=>({
    addFolderHandler: data => dispatch(addFolder(data)),
    openModal: item => dispatch(openModal(item)),
    closeModal: () => dispatch(closeModal()),
    editItem: item => dispatch(editItem(item)),
    deleteItem:itemId=>dispatch(deleteItem(itemId))
  
})
export default connect(mapStateToProps,mapDispatchToProps)(FileExplorer)
// export default Home;