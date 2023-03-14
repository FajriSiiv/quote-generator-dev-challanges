import { useEffect, useState } from "react";
import { BsArrowRepeat, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
function App() {
  const [quote, setQuote] = useState<any>();

  const fetDa = async () => {
    const resData = await fetch("https://api.quotable.io/random").then((res) =>
      res.json()
    );

    setQuote(resData);
  };

  useEffect(() => {
    fetDa();
  }, []);

  return (
    <div className="container px-4">
      <div className="flex justify-end absolute right-3 top-10">
        <span
          onClick={() => fetDa()}
          className="cursor-pointer flex gap-x-1 items-center"
        >
          <BsArrowRepeat className="hover:rotate-90 transition-all" />
          random
        </span>
      </div>
      {quote && (
        <div className="h-screen w-full flex justify-center flex-col md:max-w-[500px] md:mx-auto">
          <div className="px-4 border-l-[6px] border-[#F7DF94] pl-10">
            <p className="text-left text-xl md:text-2xl">"{quote.content}"</p>
          </div>
          <Link
            to={"/" + quote.author}
            className="px-10 mt-10 cursor-pointer py-5 hover:bg-gray-800 hover:text-white transition-all flex justify-between items-center"
          >
            <h2 className="font-semibold md:text-xl">{quote.author}</h2>
            <BsArrowRight className="text-white w-6 h-6" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;
