import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./components/head";
import { useState } from "react";
import Client from "./api/bearer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [message, setMessage] = useState("");

  const params = {
    model: "text-davinci-003",
    prompt: "O valor que será alterardo (e.target.value)",
    max_tokens: 56,
    temperature: 0.5,
  };

  Client.post("https://api.openai.com/v1/completions", params)
    .then((req) => console.log(req.data.choices[0].text))
    .catch((err) => console.log(err));

  function handleSubmit(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
    }
  }

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
            onKeyUp={(e) => setMessage(e.target.value)}
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
