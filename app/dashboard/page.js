"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function DashBoard() {
  const router = useRouter();

  const back = () => {
    router.push('/');
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <button onClick={back} className="bg-green-500 rounded p-3">Back</button>
     <h1>Dashboard Page @@@</h1>
    </div>
  );
}
