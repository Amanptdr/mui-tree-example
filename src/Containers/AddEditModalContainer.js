import {connect} from 'react-redux'
import { addFolder, openModal, closeModal, addItem, editItem } from '../Services/actions/Folder';
import AddEditItemModal from '../components/AddEditModal';
const mapStateToProps=state=>({
    data:state
})
const mapDispatchToProps=dispatch=>({
    addFolderHandler: data => dispatch(addFolder(data)),
    openModal: item => dispatch(openModal(item)),
    closeModal: () => dispatch(closeModal()),
    editItem: item => dispatch(editItem(item))
  
})
export default connect(mapStateToProps,mapDispatchToProps)(AddEditItemModal)
// export default Home;