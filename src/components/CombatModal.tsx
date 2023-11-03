import React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

const CombatModal = ({ winner, onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="div">
          O vencedor é:
        </Typography>
        <Typography variant="h5" component="div">
          {winner.name}
        </Typography>
        <Button variant="contained" onClick={onClose} sx={{ mt: 2 }}>
          Fechar
        </Button>
      </Box>
    </Modal>
  );
};

export default CombatModal;
