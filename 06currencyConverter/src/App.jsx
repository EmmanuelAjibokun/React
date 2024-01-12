import { useState } from 'react'
import './App.css'
import {InputBox} from'./components/index.js'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap =() => {
    const currentFrom = from;
    setFrom(to)
    setTo(currentFrom)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =()=> {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url(https://media.istockphoto.com/id/1151967309/photo/stock-market-investment-trading-financial-coin-and-graph-chart-or-forex-for-analyze-profit.jpg?s=612x612&w=0&k=20&c=Dm1lo1s894lQZbCj3qt0X6sqkM6KI98SHJ_HshA7IEM=)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e)=> {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
              amountDisabled={false}
              currencyDisabled={false} />
            </div>
            <div className='relative w-full h-0.5'>
              <button
               onClick={swap}
               className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
              currencyDisabled={false} />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
          </form>
          {/* <InputBox/> */}
        </div>
      </div>
    </div>
  )
}

export default App
