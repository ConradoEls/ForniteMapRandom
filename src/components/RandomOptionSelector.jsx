import { useState } from "react";

const RandomOptionSelector = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectRandomOption = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    setSelectedOption(randomOption);
  };

  return (
    <div className="container-random">
    <img src="https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/IOOJDEYNGVAJXNAURNE63VA7MQ.jpg" alt="map" className="map" />
      {/* <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul> */}
      <button onClick={selectRandomOption}>RANDOM</button>
      {selectedOption && <h2>Good Game: <h2>{selectedOption}</h2></h2>}
    </div>
  );
};

export default RandomOptionSelector;
