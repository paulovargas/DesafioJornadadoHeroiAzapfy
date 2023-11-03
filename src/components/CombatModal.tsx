import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeroCard from './HeroCard';
import { useHero } from '@/context/HeroContext';
import HeroList from './HeroList';
/* const customStyles: React.CSSProperties = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}; */

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CombatModal() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { heroes, setHeroes } = useHero();

  const filteredHeroes = heroes.filter((hero: { name: string; }) =>
    hero.name.toLowerCase().search(/Abin/i) !== -1
  );

  return(
    <div>
       <Button onClick={handleOpen}>Open modal</Button>
       <div className='card'>
          {/* <HeroCard hero={undefined} startCombat={undefined} /> */}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <HeroList heroes={filteredHeroes} startCombat={undefined} />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
    </div>
  )
  
 

  /* 
  const [selectedHeroes, setSelectedHeroes] = useState<string[]>([]);
  const [isModalOpen, setModalOpen] = useState(true);

  const handleHeroSelect = (hero: string) => {
    setSelectedHeroes([...selectedHeroes, hero]);
    if (selectedHeroes.length === 1) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Renderize os heróis e permita que o usuário selecione dois deles */}
      {/* <Button onClick={() => handleHeroSelect("Hero 1")}>Selecionar Herói 1</Button>
      <Button onClick={() => handleHeroSelect("Hero 2")}>Selecionar Herói 2</Button> */}
      {/* Renderize outros botões para selecionar heróis conforme necessário */}
      
      {/* <Modal open={isModalOpen} onClose={closeModal} style={customStyles}>
        <div>
          <h2>Heróis Selecionados</h2>
          {selectedHeroes.map((hero, index) => (
            <div key={index}>
              <h3>{hero}</h3>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  ); }
 }*/}

export default CombatModal;


/* import React from 'react';
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
 */