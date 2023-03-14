import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Author = () => {
  const [quote, setQuote] = useState<any>();
  const { id }: any = useParams();
  console.log(id);
  const fetDa = async (auhtor: string) => {
    const resData = await fetch(
      "https://api.quotable.io/quotes?author=" + auhtor.replace(" ", "-")
    ).then((res) => res.json());

    setQuote(resData);
  };

  useEffect(() => {
    fetDa(id);
  }, []);

  console.log(quote);

  return (
    <div className="container px-4 flex gap-y-10 flex-col justify-center min-h-screen py-10">
      <Link
        to={"/"}
        className="py-2 px-4 bg-rose-400 text-white w-fit rounded-md"
      >
        Back
      </Link>
      {quote &&
        quote.results.map((quotes: any) => (
          <div
            className="h-fit w-full flex justify-center flex-col"
            key={quotes._id}
          >
            <div className="px-4 border-l-[6px] border-[#F7DF94] pl-10">
              <p className="text-left text-xl">"{quotes.content}"</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Author;
