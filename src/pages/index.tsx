import { useEffect, useState } from "react";
import HeroList from "../components/HeroList";
import CombatModal from "../components/CombatModal";
import { useHero } from "../context/HeroContext";
import axios from "axios";

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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { heroes, setHeroes } = useHero();
  const [filter, setFilter] = useState("");
  const [combatants, setCombatants] = useState([]);
  const [winner, setWinner] = useState(null);


  const [variableToLog, setVariableToLog] = useState();

  const openModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://homologacao3.azapfy.com.br/api/ps/metahumans")
      .then((response) =>
        setHeroes(response.data)
      );
      if (combatants.length > 2) {
        setCombatants([]);
      }
  }, []);

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(filter.toLowerCase())
  );

  const startCombat = (selectedHero) => {
    setCombatants((combatants) => {
      return [...combatants, selectedHero];
    });
    if (combatants.length > 2) {
      setCombatants([]);
    }

  };

  const handleScreenClick = () => {
    if (isOpen) {
      setCombatants([]);
      setIsOpen(false);
    }
    /* setCombatants([]);
    setIsOpen(false);  */     
  };

  return (
    <div className="" onClick={handleScreenClick}>
      <h1 style={{ color: "white", textAlign: "center", fontSize: "100px" }}>
        Hero Battle
      </h1>
      <div className="search-column">
        <div>
          <input
            style={{ alignContent: "center", fontSize: "50px" }}
            type="text"
            placeholder="Filtrar heróis por nome"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <div className="combat-modal">
            <CombatModal combatants={combatants} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
        
      </div>
      <div className="container">
        <div className="hero-container">
          <div className="hero-list">
            <HeroList heroes={filteredHeroes} startCombat={startCombat} />
          </div>
        </div>
      </div>
    </div>
  );
}
