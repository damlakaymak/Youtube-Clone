import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const Comments = ({ data }) => {
  console.log(data);
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{data.commentsCount} Yorum</h2>
      <input
        className="w-full bg-transparent border-b p-2 outline-none mb-5"
        placeholder="Yorum ekleyiniz"
        type="text"
      />

      {data.data.map((i,key) => (
        <div key={key} className="flex gap-2 items-start px-1 py-4">
          <img
            className="w-10  h-10 rounded-full"
            src={i.authorThumbnail[0].url}
            alt="logo"
          />

          <div className="flex flex-col gap-2">
            <h5 className="flex gap-2 items-center">
              <span className="font-semibold">{i.authorText}</span>
              <span className="text-gray-400"> {i.publishedTimeText}</span>
            </h5>

            <p>{i.textDisplay}</p>
            <div className="flex gap-5 items-center">
              <div className="flex gap-1 hover:bg-zinc-700 p-1 cursor-pointer rounded items-center">
                <AiOutlineLike />
                {i.likesCount}
              </div>
              <div className=" hover:bg-zinc-700 p-1 cursor-pointer rounded">
                <AiOutlineDislike />
              </div>
              <button className=" hover:bg-zinc-700 p-1 cursor-pointer rounded">
                Yanıtla
              </button>
            </div>





            {i.replyCount > 0 && (
                  
            <div className="flex w-fit items-center p-1 rounded-md cursor-pointer gap-2 text-blue-500 hover:bg-[#36639662]">
            <MdKeyboardArrowDown />
            {i.replyCount}  yanıt
          </div>
)}




          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
