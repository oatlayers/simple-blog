import { useState } from "react";
import "./App.css";
import Notification from "./components/Notification";
import { useEffect } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    console.log(input);
  }, [blog]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>simple blog</h1>

      <Notification />
      <form onSubmit={handleSubmit}>
        type something...
        <div>
          <input onChange={handleChange}></input>
          <button>add the blog</button>
        </div>
      </form>

      <h1>here's all the blogs</h1>
    </>
  );
};

export default App;
