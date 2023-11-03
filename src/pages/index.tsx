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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { heroes, setHeroes } = useHero();
  const [filter, setFilter] = useState("");
  const [combatants, setCombatants] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    axios
      .get("http://homologacao3.azapfy.com.br/api/ps/metahumans")
      .then((response) =>
        setHeroes(response.data, console.log("API : ", response.data))
      );
  }, []);

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(filter.toLowerCase())
  );

  const startCombat = (hero1: any, hero2: any) => {
    setCombatants([]);
    // Lógica da comparação dos heróis
  };

  return (
    <div className="">
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
            <CombatModal /* winner={winner} onClose={() => setWinner(null)} */ />
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
