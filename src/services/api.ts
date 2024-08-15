import { IFetchTokenResult, IToken } from "@/types";

export async function fetchTokens() {
	try {
    const url = "https://li.quest/v1/tokens";
    const options = { method: "GET", headers: { accept: "application/json" } };
    const res = await fetch(url, options);
    const json = (await res.json()) as unknown as IFetchTokenResult;

    return Object.entries(json.tokens) as [string, IToken[]][];
  } catch (e: unknown) {
    return [[]] as unknown as [string, IToken[]][];
  }
}
