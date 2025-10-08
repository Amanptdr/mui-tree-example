import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, addFolder, editItem } from '../Services/actions/Folder';

import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
} from '@mui/material';

const AddEditItemModal = (props) => {
  const dispatch = useDispatch();
  const { modalOpen,items,currentItem ,parentId} = props.data.FolderItems;
  const [itemData, setItemData] = useState({ label: '', fileType: 'folder' });
// 
  useEffect(() => {
    if (currentItem) {
      setItemData(currentItem);
    } else {
      setItemData({ label: '', fileType: 'folder' });
    }
  }, [currentItem]);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleSave = () => {
    if (currentItem) {
      dispatch(editItem(itemData));
    } else {
        let now = new Date()
      dispatch(addFolder({ ...itemData, id: now.toString()},parentId));
    }
    handleClose();
  };
  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 400, 
        bgcolor: 'background.paper', 
        border: '2px solid #000', 
        boxShadow: 24, 
        p: 4 
      }}>
        <Typography variant="h6" component="h2">
          {currentItem ? 'Edit Item' : 'Add Item'}
        </Typography>
        <TextField
          fullWidth
          label="Label"
          value={itemData.label}
          onChange={(e) => setItemData({ ...itemData, label: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          select
          label="File Type"
          value={itemData.fileType}
          onChange={(e) => setItemData({ ...itemData, fileType: e.target.value })}
          margin="normal"
        >
          <MenuItem value="folder">Folder</MenuItem>
          <MenuItem value="image">Image</MenuItem>
          <MenuItem value="pdf">PDF</MenuItem>
          <MenuItem value="doc">Document</MenuItem>
          <MenuItem value="video">Video</MenuItem>
        </TextField>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddEditItemModal;
