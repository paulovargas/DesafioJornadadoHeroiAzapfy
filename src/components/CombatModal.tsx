import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroCard from "./HeroCard";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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
            <div className="">
              <div className="">
                {combatants.map((hero: { id: React.Key | null | undefined; }) => (
                  <div className="card">
                    <HeroCard
                      key={hero.id}
                      hero={hero}
                      startCombat={undefined}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default CombatModal;
