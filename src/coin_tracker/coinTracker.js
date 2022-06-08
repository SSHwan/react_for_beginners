import { useEffect, useState } from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [dollar, setDollar] = useState(0);
    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then((response) => response.json())
        .then((data) => {
            setCoins(data);
            setSelectedCoin(data[0]);
            setLoading(false);
        });
    }, []);
    const onSelectCoin = (e) => {
        const index = e.target.value;
        setSelectedCoin(coins[index]);
    }
    const onChangeDollar = (e) => {
        setDollar(e.target.value);
    }
    return (
        <div>
            <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
            <div>
                <label htmlFor="myDollar">달러 : </label>
                <input value={dollar} onChange={onChangeDollar} id="myDollar" type="number" />
            </div>
            {loading ? (
                <div><strong>Loading...</strong></div>
            ) : (
                <select id="mySelect" onChange={onSelectCoin}>
                {coins.map((coin, index) => (
                    <option key={coin.id} value={index}>
                        {coin.symbol} ({coin.name}) : {coin.quotes.USD.price}
                    </option>
                ))}
                </select>
                )
            }
            {selectedCoin ? (
                <h3>
                    You can buy {dollar / selectedCoin.quotes.USD.price} {selectedCoin.symbol}!
                </h3>
            ) : (
                null
            )}
        </div>
    )
}

export default CoinTracker;