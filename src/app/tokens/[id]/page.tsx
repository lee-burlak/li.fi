import { fetchTokens } from "@/services/api";

export default function Token({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}

export async function generateStaticParams() {
  const chains = await fetchTokens();
  return chains.flatMap(([chain, tokens]) =>
    tokens.map((token) => ({ id: encodeURI(token.coinKey) }))
  );
}
