import styles from "./page.module.css";
import { TokenItem } from "@/components/TokenItem";
import { fetchTokens } from "@/services/api";

export default async function Home() {
  const chains = await fetchTokens();

  return (
    <main className={styles.main}>
      <div>Tokens</div>
      {chains.map(([chainId, tokens]) => (
        <div key={chainId}>
          <h5>{chainId}</h5>
          {tokens.map((token) => (
            <TokenItem key={token.coinKey} {...token} />
          ))}
        </div>
      ))}
    </main>
  );
}
