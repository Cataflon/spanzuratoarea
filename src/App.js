import { useEffect, useState } from "react";
import spz from "../src/poze/spanzuratoarea.webp";
import "./App.scss";

function App() {
  const word = "portocala".split("");
  const [arrWord, setArrWord] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const newArr = word.map(() => {
      return "_";
    });
    setArrWord(newArr);
  }, []);

  const handleClick = () => {
    const arr = arrWord;
    arr.forEach((_, index) => {
      if (word[index] === inputValue) {
        arr[index] = inputValue;
      }
    });
    setArrWord(arr);
  };

  return (
    <div className="App">
      <div className="page-wrapper">
        <p className="title">Spanzuratoarea</p>
        <img src={spz} alt="a" />
        <div className="word-guess">
          {arrWord.map((item, index) => {
            return <p key={`letter-${index}`}>{item}</p>;
          })}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            if (event.target.value.length <= 1) {
              setInputValue(event.target.value);
            }
          }}
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Guess
        </button>
      </div>
    </div>
  );
}

export default App;
