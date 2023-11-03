import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroCard from "./HeroCard";
import { HeroProvider as Hero } from "@/context/HeroContext";

const style = {
  //position: "absolute" as "absolute",
  position: "relative",
  flexDirection: "row-reverse",
  //display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CombatModal({ combatants, isOpen, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (combatants.length > 1) {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="card"></div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
            <div className="">            
              <h1>O vencedor neste combate é : Fulano</h1>
              <div className="container-combat">                              
                <div className="card">
                  <HeroCard
                      key={combatants[0]}
                      hero={combatants[0]}
                      startCombat={undefined}
                    />                    
                </div>
                <div className="table">
                  
{/* <table>
  <tr>
    <th>Coluna 1</th>
    <th>Coluna 2</th>
    <th>Coluna 3</th>
  </tr>
  <tr>
    <td>{combatants[0].powerstats.intelligence}</td>
    <td>Inteligência</td>
    <td>Linha 1, Coluna 3</td>
  </tr>
  <tr>
    <td>{combatants[0].powerstats.strength}</td>
    <td>Força</td>
    <td>Linha 2, Coluna 3</td>
  </tr>
  <tr>
    <td>{combatants[0].powerstats.speed}</td>
    <td>Linha 3, Coluna 2</td>
    <td>Linha 3, Coluna 3</td>
  </tr>
  <tr>
    <td>{combatants[0].powerstats.durability}</td>
    <td>Linha 4, Coluna 2</td>
    <td>Linha 4, Coluna 3</td>
  </tr>
  <tr>
    <td>{combatants[0].powerstats.power}</td>
    <td>Linha 5, Coluna 2</td>
    <td>Linha 5, Coluna 3</td>
  </tr>
  <tr>
    <td>{combatants[0].powerstats.combat}</td>
    <td>Linha 5, Coluna 2</td>
    <td>Linha 5, Coluna 3</td>
  </tr>
</table> */}
                    
                </div>
               

                <div className="card">                 
                    
                    
                    <HeroCard
                      key={combatants[1]}
                      hero={combatants[1]}
                      startCombat={undefined}
                    />
                    
                </div>
              </div>
            </div>
{/* 
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}

export default CombatModal;
