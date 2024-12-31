import React, { useEffect, useState } from "react";

type IQuote = {
  id: number;
  quote: string;
};
const FetchData: React.FC = () => {
  const [data, setData] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ? dummyjson - quotes fetching
        const response = await fetch("https://dummyjson.com/quotes");
        const json = await response.json();
        const quoteData = json.quotes;
        setData(quoteData);
        // ? map json check_type and return post.tile
        data.length = 20;
        setLoading(false);
      } catch (Error) {
        console.log(Error);
      }
    };
    fetchData();
  }, []);
  // ? Empty dependency array ensures this runs once
  // ? Otherwise it will cause infinite rendering

  if (loading) return <p>Loading...</p>;
  return (
    <main className="h-[90%] overflow-hidden">
      <h2 className="text-3xl">useEffect</h2>
      <ol className="bg-cyan-900 h-full mt-5 rounded-md list-decimal overflow-y-scroll overflow-auto  p-2 text-[12px] *:text-justify *:tracking-tighter">
        {data &&
          data.map((e) => {
            return (
              <li key={e.id} className="my-2">
                {e.id}) {e.quote}
              </li>
            );
          })}
      </ol>
    </main>
  );
};

export default FetchData;
