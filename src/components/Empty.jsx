const Empty = () => {
   return (
      <div className="flex-grow text-center">
         <div className="flex justify-center [&:not(:last-child)]:mb-5">
            <img src="empty.svg" alt="empty" />
         </div>
         <div className="text-xl">Empty...</div>
      </div>
   );
};

export default Empty;
