import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./components/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [message,setMessage]=useState("")
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={inter.className}>Chat - Boot</h2>

        <Image
          className={styles.logo}
          src="/0.jpg"
          alt="Next.js Logo"
          width={900}
          height={532}
          priority
        />

        <div className={styles.position}>
          <p className={inter.className}>Question :</p>
          <textarea
            className={styles.textareaQ}
            placeholder="You can make it question!"
            onKeyUp={(e)=>setMessage(e.target.value)}
          />
          <p className={inter.className}>Answer :</p>
          <textarea
            className={styles.textareaA}
            disabled
            placeholder="Load..."
            value={message}
          />
        </div>
      </main>
    </>
  );
}
