import { useRef } from "react";
import Checkbox from "./Checkbox";
import Action from "./Action";

const NoteItem = ({ note, toggleNote }) => {
   const textRef = useRef(null);
   const actionsRef = useRef(null);

   return (
      <li
         onMouseEnter={() => {
            actionsRef.current.classList.remove("hidden");
            actionsRef.current.classList.add("flex");
         }}
         onMouseLeave={() => {
            actionsRef.current.classList.add("hidden");
            actionsRef.current.classList.remove("flex");
         }}
         className="[&:not(:last-child)]:mb-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-purple [&:not(:last-child)]:pb-4"
      >
         <label
            onClick={() => {
               console.log(note.id);
            }}
            className="flex items-center"
         >
            <Checkbox />
            <p
               ref={textRef}
               onClick={(e) => {
                  textRef.current.classList.toggle("line-through");
                  textRef.current.classList.toggle("text-black/50");
                  e.stopPropagation();
               }}
               className="flex-grow pl-4 text-xl uppercase"
            >
               {note.text}
            </p>
            <div ref={actionsRef} className="hidden items-center gap-[.625rem]">
               <Action className="edit" />
               <Action className="delete" />
            </div>
         </label>
      </li>
   );
};

export default NoteItem;
