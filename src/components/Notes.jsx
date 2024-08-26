import NoteItem from "./NoteItem";

const Notes = ({ notes, toggleNote }) => {
   return (
      <ul className="w-full max-w-[32.5rem] flex-grow">
         {notes.map((note) => (
            <NoteItem key={note.id} note={note} toggleNote={toggleNote} />
         ))}
      </ul>
   );
};

export default Notes;
