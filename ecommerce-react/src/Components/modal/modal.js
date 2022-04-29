//React
import React  from "react";
//MUi
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



export const   ModalCustom = ({open, addSubmit, children}) => {

    
    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
  <Modal
  open={open}
  onClose={addSubmit}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
      <Box sx={style} className="fondoHome">
    <Typography id="modal-modal-title" variant="h6" component="h2">
    
    </Typography>
     {children}
    <Typography id="modal-modal-description" >
  

    </Typography>

  </Box>
</Modal> )
}
