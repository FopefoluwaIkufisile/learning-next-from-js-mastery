import Image from "next/image";
import Hello from "../components/hello";

export default async function Home() {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(`What am 1? Server or Client?`)
  return (
    <>
            <h1 className="text-2xl">Welcome to Next.js</h1>
            <Hello/>
            </>
  );
}
