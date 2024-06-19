export interface Coin {
    id: string;
    rank: string;
    symbol: string | null;
    name: string | null;
    supply: string | null;
    maxSupply: string | null;
    marketCapUsd: string | null;
    volumeUsd24Hr: string | null;
    priceUsd: string | null;
    changePercent24Hr: string | null;
    vwap24Hr: string | null;
    explorer: string | null;
}
export interface GetCoinsMarketParams {
    offset?: number;
    limit?: number;
    search?: string;
}
export interface GetCoinInfoParams {
    coin: string;
}
export interface GetCoinHistoryParams {
    id: string;
    interval: 'm1' | 'm5' | 'm15' | 'm30' | 'h1' | 'h2' | 'h6' | 'h12' | 'd1';
    start: number;
    end: number;
}
export interface CoinHistory {
    priceUsd: string;
    time: number;
}
