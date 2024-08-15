import Link from "next/link";
import { type IToken } from "@/types";

export function TokenItem({ name, coinKey }: IToken) {
  return (
    <div key={coinKey}>
      <Link href={`/tokens/${encodeURI(coinKey)}`}>{name}</Link>
    </div>
  );
}
