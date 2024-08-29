import NoteItem from "./NoteItem";

const Notes = ({
   filteredTodos,
   toggleNote,
   handleDelete,
   notes,
   setNotes,
}) => {
   return (
      <ul className="w-full max-w-[32.5rem] flex-grow">
         {filteredTodos.map((note) => (
            <NoteItem
               key={note.id}
               note={note}
               toggleNote={toggleNote}
               handleDelete={handleDelete}
               notes={notes}
               setNotes={setNotes}
            />
         ))}
      </ul>
   );
};

export default Notes;
