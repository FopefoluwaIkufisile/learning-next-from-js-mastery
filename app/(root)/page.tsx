import Image from "next/image";
import Hello from "../components/hello";

export default async function Home() {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  console.log(`What am 1? Server or Client?`)
  return (
    <>
            {data.map((data: {id : string, title: string}) => (
              <div key={data.id}>
                <h2 className="p-2 border-2 border-amber-100">{data.title}</h2>
              </div>
            ))}
            </>
  );
}
