import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    const fetchHarryPotter = async () => {
      const response = await fetch(
        `https://hp-api.onrender.com/api/characters`
      );
      const data = await response.json();
      setChars(data);
    };
    fetchHarryPotter();
  }, []);

  const [actor, setActor] = useState([]);
  const pushData = (items, i) => {
    let storedActor = [...actor];
    storedActor.splice(i, 1);
    storedActor.push(items);
    setActor(storedActor);
  };
  console.log(actor);
  return (
    <div className="App">
      <div className="flexContainer">
        {chars.map((items, index) => {
          return (
            <div key={index}>
              <button
                className="actorContainer"
                onClick={() => pushData(items)}
              >
                {items.actor}
              </button>
            </div>
          );
        })}
      </div>
      <div className="infoContainer">
        <h3>Actor Information</h3>
        {actor.map((actors, i) => {
          return (
            <div key={i}>
              <h4>{actors.name}</h4>
              <p>Species : {actors.species}</p>
              <p>House : {actors.house}</p>
              <p>Gender : {actors.gender}</p>
              <img src={actors.image} alt="actor" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
