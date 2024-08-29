import { useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import Popup from "./components/Popup";
import Empty from "./components/Empty";

const initialNotes = [
   {
      id: 1,
      text: "learn react",
      checked: false,
      edited: false,
   },
   {
      id: 2,
      text: "learn vue",
      checked: false,
      edited: false,
   },
   {
      id: 3,
      text: "do hws",
      checked: false,
      edited: false,
   },
   {
      id: 4,
      text: "wash dishes",
      checked: false,
      edited: false,
   },
];

const App = () => {
   const [notes, setNotes] = useState(initialNotes);
   const [filter, setFilter] = useState("All");
   const [isOpen, setIsOpen] = useState(false);
   // создать заметку
   const [newNote, setNewNote] = useState("");
   // поиск заметок
   const [query, setQuery] = useState("");

   // <derived state>
   const filteredNotes = notes.filter((note) => {
      if (filter === "Complete") {
         return note.checked;
      } else if (filter === "Incomplete") {
         return !note.checked;
      }
      return true;
   });
   // </derived state>

   const filtered = filteredNotes.filter((filteredNote) =>
      filteredNote.text?.toLowerCase().includes(query.toLowerCase()),
   );

   function changeFilter(newFilter) {
      setFilter(newFilter);
   }

   function toggleNote(id, nextChecked) {
      setNotes(
         notes.map((note) =>
            note.id === id ? { ...note, checked: nextChecked } : note,
         ),
      );
   }

   function handleOpen() {
      setIsOpen((isOpen) => !isOpen);
   }

   function handleDelete(id) {
      setNotes((notes) => notes.filter((note) => note.id !== id));
   }

   function handleAdd() {
      if (newNote.trim()) {
         setNotes([
            ...notes,
            {
               id: self.crypto.randomUUID(),
               text: newNote,
               checked: false,
               edited: false,
            },
         ]);
         setNewNote("");
         setIsOpen(false);
      }
   }

   return (
      <div className="mx-auto flex min-h-svh max-w-[48.75rem] flex-col items-center justify-center px-[.9375rem] pb-8 pt-10">
         <h1 className="text-[1.625rem] uppercase leading-[calc(39/26)] [&:not(:last-child)]:mb-[1.125rem]">
            todo list
         </h1>
         <Header
            changeFilter={changeFilter}
            query={query}
            setQuery={setQuery}
         />
         {filtered.length ? (
            <Notes
               filteredTodos={filtered}
               toggleNote={toggleNote}
               handleDelete={handleDelete}
               notes={notes}
               setNotes={setNotes}
            />
         ) : (
            <Empty />
         )}
         <AddNote className="self-end" setIsOpen={setIsOpen} />
         {isOpen && (
            <Popup
               handleOpen={handleOpen}
               newNote={newNote}
               setNewNote={setNewNote}
               handleAdd={handleAdd}
            />
         )}
      </div>
   );
};

export default App;
