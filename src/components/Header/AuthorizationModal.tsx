import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { FormEvent } from 'react';
import { Colors } from '../../theme/appTheme';

import { modal } from './data'; 
import type { ModalContent } from './data';


type AuthorizationModalProps = {
  content: "login" | "signUp";
  open: boolean;
  handleClose: () => void;
};

let modalContent = (content: "login" | "signUp"): ModalContent => modal[content];


export default function AuthorizationModal({content, open, handleClose}: AuthorizationModalProps) {
  
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const data = formJson.login;
            console.log(data);
            handleClose();
          },
        }}
        sx={{
          width: {xs: "300px", md: "30%"}, 
          mx: "auto"
        }}
      >
        <DialogTitle>{modalContent(content).title}</DialogTitle>
        <DialogContent sx={{display: "flex", flexDirection: "column", gap: 2}}>
          <DialogContentText>
            {modalContent(content).body}
          </DialogContentText>
          {modalContent(content).fields.map(field => (
            <TextField
              autoFocus
              required
              // margin="dense"
              variant="outlined"
              fullWidth
              key={field}
              id={field.toLowerCase()}
              name={field.toLowerCase()}
              label={field}
              type={field.toLowerCase() === "password" ? "password" : "text"}
            />
            ))
          }
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleClose} 
            color="secondary"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            sx={{
              color: "#fff", 
              bgcolor: Colors.grayViolet, 
              '&:hover': {backgroundColor: "primary.main"}
            }}
          >
            Authorize
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
