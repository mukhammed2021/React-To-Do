const Empty = ({ theme }) => {
   return (
      <div className="flex-grow text-center">
         <div className="flex justify-center [&:not(:last-child)]:mb-5">
            <img
               src={theme === light ? "empty.svg" : "empty-dark.svg"}
               alt="empty"
            />
         </div>
         <div className="text-xl dark:text-white">Empty...</div>
      </div>
   );
};

export default Empty;
