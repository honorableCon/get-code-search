import Head from "next/head";
import { useState } from "react";
import Code from "../components/Code";
import styles from "./index.module.css";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    });
    const data = await response.json();
    setResult(data.result);
    setPrompt("");
  }

  return (
    <div>
      <Head>
        <title>Searching code with OPENAI</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3296/3296083.png"
        />
      </Head>

      <main className={styles.main}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3296/3296083.png"
          className={styles.icon}
        />
        <h3>Get code</h3>
        <form onSubmit={onSubmit}>
          <textarea
            type="text"
            name="prompt"
            placeholder="Make get request with javascript and axios ?"
            onChange={(e) => setPrompt(e.target.value)}
          >
            {prompt}
          </textarea>
          <input type="submit" value="Get code" />
        </form>
        {result && (
          <div className="code">
            <Code codeString={result} />
          </div>
        )}
      </main>
    </div>
  );
}
