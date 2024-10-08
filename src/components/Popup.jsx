import Input from "./Input";
import Button from "./Button";
import { useEffect } from "react";

const Popup = ({ handleOpen, newNote, setNewNote, handleAdd }) => {
   useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
         document.body.style.overflow = "visible";
      };
   }, []);

   return (
      <div className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black/70">
         <div className="flex h-[18.125rem] w-full max-w-[31.25rem] flex-col rounded-2xl bg-white px-[1.875rem] py-[1.125rem] dark:border dark:border-white dark:bg-black">
            <h2 className="text-center text-2xl uppercase dark:text-white [&:not(:last-child)]:mb-[1.5625rem]">
               New Note
            </h2>
            <div className="mb-4 flex-grow">
               <Input
                  placeholder="Input your note..."
                  text={newNote}
                  setText={setNewNote}
               />
            </div>
            <div className="flex items-center justify-between">
               <Button
                  handleOpen={handleOpen}
                  className="border border-purple text-purple transition-colors hover:bg-purple hover:text-white focus-visible:bg-purple focus-visible:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-purple"
               >
                  cancel
               </Button>
               <Button
                  handleAdd={handleAdd}
                  className="border border-purple bg-purple text-white transition-colors hover:border hover:border-purple hover:bg-white hover:text-purple focus-visible:bg-white focus-visible:text-purple focus-visible:outline focus-visible:outline-1 focus-visible:outline-purple"
               >
                  apply
               </Button>
            </div>
         </div>
      </div>
   );
};

export default Popup;
