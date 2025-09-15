
const Input=({
    title,
    currency,
    amount,
    onCurrencyChange,
    onAmountChange
})=>{
    return (
        <>
                <div className="">
                    <div className='title'>{title}</div>
                    <input type="text" value={amount} onChange={(e)=>onAmountChange(e.target.value)}></input>
                    <select value={currency} onChange={(e)=>onCurrencyChange(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>

        </>
    )
}

export default Input;