import Input from "./Input";
import Button from "./Button";

const Popup = () => {
   return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">
         <div className="flex h-[18.125rem] w-full max-w-[31.25rem] flex-col rounded-2xl bg-white px-[1.875rem] py-[1.125rem]">
            <h2 className="text-center text-2xl uppercase [&:not(:last-child)]:mb-[1.5625rem]">
               New Note
            </h2>
            <Input placeholder="Input your note..." className="flex-grow" />
            <div className="flex items-center justify-between">
               <Button className="border-purple text-purple hover:bg-purple focus-visible:bg-purple focus-visible:outline-purple border transition-colors hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-1">
                  cancel
               </Button>
               <Button className="border-purple bg-purple hover:border-purple hover:text-purple focus-visible:text-purple focus-visible:outline-purple border text-white transition-colors hover:border hover:bg-white focus-visible:bg-white focus-visible:outline focus-visible:outline-1">
                  apply
               </Button>
            </div>
         </div>
      </div>
   );
};

export default Popup;
