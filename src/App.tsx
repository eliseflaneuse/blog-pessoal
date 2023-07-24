import "./App.css";
import { useState } from "react";
import Card from "./components/Card/Card";
import Contador from "./components/Contador/Contador";
import Home from "./components/Home/Home";
import Task from "./components/Task/Task";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;

/*Props
   <>
    <Card   title="Component Card"
            description="Este é um componente Card que recebe props."/>
  </>
  */

/*
  useState and useEffect
  <>
  <Contador />
  <Task />
  </>
  */
