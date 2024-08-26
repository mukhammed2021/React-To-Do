import { useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";

const notesItems = [
   {
      id: 1,
      text: "learn react",
      complete: false,
      edited: false,
   },
   {
      id: 2,
      text: "learn vue",
      complete: false,
      edited: false,
   },
   {
      id: 3,
      text: "do hws",
      complete: false,
      edited: false,
   },
   {
      id: 4,
      text: "wash dishes",
      complete: false,
      edited: false,
   },
];

const App = () => {
   const [notes, setNotes] = useState(notesItems);

   function toggleNote(id) {
      setNotes((notes) =>
         notes.map((note) =>
            note.id === id ? { ...note, complete: !note.complete } : note,
         ),
      );
   }

   return (
      <div className="mx-auto flex min-h-svh max-w-[48.75rem] flex-col items-center justify-center px-[.9375rem] pb-8 pt-10">
         <h1 className="text-[1.625rem] uppercase leading-[calc(39/26)] [&:not(:last-child)]:mb-[1.125rem]">
            todo list
         </h1>
         <Header />
         <Notes notes={notes} toggleNote={toggleNote} />
         <AddNote className="self-end" />
      </div>
   );
};

export default App;
