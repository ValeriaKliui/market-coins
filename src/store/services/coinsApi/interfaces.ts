export interface Coin {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
}
export interface GetCoinsMarketParams {
    offset?: number;
    limit?: number;
    search?: string;
}
export interface GetCoinInfoParams {
    coin: string;
}
