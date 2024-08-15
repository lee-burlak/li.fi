import styles from "./page.module.css";
import { Token } from "@/components/Token";
import { IToken } from "@/types";

async function fetchTokens() {
  try {
    return [] as IToken[];
  } catch (e: unknown) {
    return [] as IToken[];
  }
}

export default async function Home() {
  const tokens = await fetchTokens();

  return (
    <main className={styles.main}>
      <div>Tokens</div>
      {tokens.map((token) => (
        <Token key={token.id} {...token} />
      ))}
    </main>
  );
}
