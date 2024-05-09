import React, { useEffect, useState } from 'react';

function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [fromCurrencyRate,setFromCurrencyRate]=useState();
    const [toCurrencyRate,setToCurrencyRate]=useState();
    const [covertedAmount,setConvertedAmount]=useState();
    let conAmount;




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.frankfurter.app/latest");
                const data = await response.json();
                const currencies = Object.keys(data.rates);
                setCurrencyOptions(currencies);
                let fromRate=data.rates[fromCurrency];
                let toRate=data.rates[toCurrency]
                // setFromCurrencyRate(fromRate);
                // console.log(fromCurrencyRate);

                
                // console.log(fromRate);
                // console.log(toRate);
                if(fromRate>toRate){
                    setConvertedAmount(amount/fromRate)
                }
                else{
                    setConvertedAmount(amount*toRate)                    

                }
                console.log(covertedAmount)

                
                
                
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };

        fetchData();
    }, [toCurrency,setConvertedAmount]);

    

    

    return (
        <div className='p-8 block bg-white shadow-lg rounded-lg'>
            <h1 className='text-3xl font-semibold text-slate-800'>Currency Converter</h1>

            <h1 className='text-2xl'>Amount:</h1>

            <div className='block mt-3'>

                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
                
                className='h-10 w-full p-3 bg-yellow-300 rounded-md' placeholder='Enter Amount' />

                <h1 className='mt-3'>From</h1>

                <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>

                    {currencyOptions.map((currency) => (

                        <option key={currency} value={currency}>{currency}</option>

                    ))}

                </select>

                <h1 className='mt-3'>To</h1>

                <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}>

                    {currencyOptions.map((currency) => (

                        <option key={currency} value={currency}>{currency}</option>

                    ))}

                </select>

            </div>
            <div>
                <h1 className='text-2xl text-amber-600'>Converted Amount:</h1>

                <h1 className='text-green-600 text-2xl font-bold'>{`${covertedAmount} ${toCurrency}`}</h1>

            </div>
        </div>
    );
}

export default CurrencyConverter;
