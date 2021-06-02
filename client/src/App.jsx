import "./App.css";
import NewNoteForm from "./components/NewNoteForm";
import Note from "./components/Note"
import ScrollTopBtn from "./components/ScrollTopBtn"
import { useState } from 'react';

function App() {

  
  return (
    <div className="App">
      <h1>Pop Notes</h1>
      <NewNoteForm/>
      <hr />
      <ScrollTopBtn/>
      <div className="notes">
        <Note content="Hello" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
        <Note content="Hello2" link="https://google.com/"/>
      </div>
    </div>
  );
}

export default App;
