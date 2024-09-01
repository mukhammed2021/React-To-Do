import { useState } from "react";
import { isMobile } from "../functions";
import Checkbox from "./Checkbox";
import Action from "./Action";

const NoteItem = ({ note, toggleNote, handleDelete, notes, setNotes }) => {
   const [isOpenEdit, setIsOpenEdit] = useState(false);
   const [hover, setHover] = useState(false);
   const [editNote, setEditNote] = useState(note.text);

   return (
      <li
         key={note.id}
         className="[&:not(:last-child)]:mb-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-purple [&:not(:last-child)]:pb-4"
      >
         <div
            onMouseEnter={() => {
               setHover(true);
            }}
            onMouseLeave={() => {
               setHover(false);
            }}
            className="relative flex items-center"
         >
            <label
               className={`relative flex items-center ${!isOpenEdit && "flex-grow"}`}
            >
               <Checkbox
                  checked={note.checked}
                  id={note.id}
                  toggleNote={toggleNote}
               />
               {!isOpenEdit && (
                  <p
                     className={`flex-grow pl-4 text-xl uppercase dark:text-white ${note.checked ? "text-black/50 line-through dark:text-white/50" : ""}`}
                  >
                     {note.text}
                  </p>
               )}
            </label>
            {isOpenEdit && !isMobile() ? (
               <>
                  <input
                     type="text"
                     value={editNote}
                     onChange={(e) => setEditNote(e.target.value)}
                     className="ml-4 mr-11 flex-grow bg-white text-xl uppercase focus-visible:rounded focus-visible:caret-purple focus-visible:outline focus-visible:outline-purple dark:bg-black dark:text-white"
                  />
                  <button
                     onClick={() => {
                        setNotes(
                           notes.map((todo) =>
                              todo.id === note.id
                                 ? { ...todo, text: editNote }
                                 : todo,
                           ),
                        );
                        setIsOpenEdit(false);
                     }}
                     className="before:absolute before:right-7 before:top-2/4 before:h-4 before:w-3 before:-translate-y-2/3 before:rotate-45 before:border-b-4 before:border-r-4 before:border-purple"
                  ></button>
                  <button
                     onClick={() => setIsOpenEdit(false)}
                     className="before:absolute before:right-1 before:top-2/4 before:h-4 before:w-1 before:-translate-y-2/4 before:rotate-45 before:bg-[#e50000] after:absolute after:right-1 after:top-2/4 after:h-4 after:w-1 after:-translate-y-2/4 after:-rotate-45 after:bg-[#e50000]"
                  ></button>
               </>
            ) : (
               hover &&
               !isMobile() && (
                  <div className="flex items-center gap-[.625rem]">
                     <Action
                        name="edit"
                        className="edit"
                        setIsOpenEdit={setIsOpenEdit}
                     />
                     <Action
                        name="delete"
                        className="delete"
                        handleDelete={() => handleDelete(note.id)}
                     />
                  </div>
               )
            )}
            {isOpenEdit && isMobile() ? (
               <>
                  <input
                     type="text"
                     value={editNote}
                     onChange={(e) => setEditNote(e.target.value)}
                     className="ml-4 mr-11 flex-grow bg-white text-xl uppercase focus-visible:rounded focus-visible:caret-purple focus-visible:outline focus-visible:outline-purple"
                  />
                  <div className="flex items-center gap-[.625rem]">
                     <button
                        onClick={() => {
                           setNotes(
                              notes.map((todo) =>
                                 todo.id === note.id
                                    ? { ...todo, text: editNote }
                                    : todo,
                              ),
                           );
                           setIsOpenEdit(false);
                        }}
                        className="relative h-5 w-5 before:absolute before:bottom-2/4 before:left-2/4 before:h-4 before:w-[.625rem] before:-translate-x-2/4 before:translate-y-2/4 before:rotate-45 before:border-b-4 before:border-r-4 before:border-purple"
                     ></button>
                     <button
                        onClick={() => setIsOpenEdit(false)}
                        className="relative h-5 w-5 before:absolute before:left-2/4 before:top-0 before:h-full before:w-1 before:-translate-x-2/4 before:rotate-45 before:bg-[#e50000] after:absolute after:left-2/4 after:top-0 after:h-full after:w-1 after:-translate-x-2/4 after:-rotate-45 after:bg-[#e50000]"
                     ></button>
                  </div>
               </>
            ) : (
               isMobile() && (
                  <div className="flex items-center gap-[.625rem]">
                     <Action
                        name="edit"
                        className="edit"
                        setIsOpenEdit={setIsOpenEdit}
                     />
                     <Action
                        name="delete"
                        className="delete"
                        handleDelete={() => handleDelete(note.id)}
                     />
                  </div>
               )
            )}
         </div>
      </li>
   );
};

export default NoteItem;
