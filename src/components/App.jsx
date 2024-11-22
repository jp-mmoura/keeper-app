import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

/**
 * Maps over the notes array and returns a new array of JSX elements.
 * Each element is a Note component, with the appropriate props.
 * @returns {Array<JSX.Element>} An array of Note components.
 */


function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => 
         <Note
          key = {noteItem.key}
          title = {noteItem.title}
          content = {noteItem.content}
        />
      )};
      <Footer />
    </div>
  );
}

export default App;
