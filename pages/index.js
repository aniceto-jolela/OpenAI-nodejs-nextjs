import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./components/head";
import { useState } from "react";
import Client from "./api/bearer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit() {
    const params = {
      model: "text-davinci-003",
      prompt: question,
      max_tokens: 60,
      temperature: 0.8,
    };

    Client.post("https://api.openai.com/v1/completions", params)
      .then((req) => setAnswer(req.data.choices[0].text))
      .catch((err) => console.log(err));
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
          <p className={inter.className}>Question : 🇱🇷</p>
          <textarea
            className={styles.textareaQ}
            placeholder="What is your issue?"
            onKeyDown={(e) => setQuestion(e.target.value)}
          />
          <p className={inter.className}>Answer : 🇱🇷 </p>
          <textarea
            className={styles.textareaA}
            disabled
            placeholder="Load..."
            value={answer}
          />
          <br />
          <div className={styles.buttons}>
            <button className={styles.buttons_search} onClick={handleSubmit}>
              Search
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
