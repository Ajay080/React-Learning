import GetCurrency from "./GetCurrency";
const Input = ({
        title,
        currency,
        amount,
        onCurrencyChange,
        onAmountChange
    }) => {
    let currencyData = GetCurrency(currency);
    return (
        <>
            <div className="">
                <div className='title'>{title}</div>
                <input type="text" value={amount} onChange={(e) => onAmountChange(e.target.value)}></input>
                <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
                    {currencyData && Object.keys(currencyData).map((val, ind) => {
                        return <option key={ind} value={val}>{val.toUpperCase()}</option>
                    })}
                </select>
            </div>
        </>
    )
}

export default Input;