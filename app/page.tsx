import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {

  console.log(`What am 1? Server or Client?`)
  return (
    <>
            <h1 className="text-2xl">Welcome to Next.js</h1>
            <Hello/>
            </>
  );
}
