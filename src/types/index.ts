export interface IToken {
	"chainId": number,
	"address": string,
	"symbol": string,
	"name": string,
	"decimals": number,
	"priceUSD": number,
	"coinKey": string,
	"logoURI":string,
}

export interface IFetchTokenResult {
	tokens: {
		[chainId: string]: IToken[]
	}
}
