import React, { useState, useRef } from "react";
import logo from './images/logo.svg';
import dollar from './images/icon-dollar.svg';
import person from './images/icon-person.svg';
import TotalComponent from './components/TotalComponent';
import './App.css';

function App() {
  const inputPerson = useRef(null);
  const inputTotal = useRef(null);
  const [total, setTotal] = useState("");
  const [tipAmountPerson, setTipAmountPerson] = useState(0.00);
  const [totalPerson, setTotalPerson] = useState(0.00);
  const [tippercent, setTipPercent] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  const handleReset = () => {
    setTotal("");
    setTotalPerson(0.00);
    setTipAmountPerson(0.00);
    inputPerson.current.value = '';
    inputTotal.current.value = '';
  }

  const handleBill = (e) => {
    const re = /^\d*\.?\d*$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setTotal(e.target.value)
    } else  {
      inputTotal.current.value = '';
    }
    setErrorMessage('')
  }

  const handleTip = (n) => {
     const re = /^[0-9\b]+$/;
     if(n ==='' || re.test(n)) {
      setTipPercent(n);
     } else {
      setTipPercent(0);
     }
     setErrorMessage('');
  }

  const handleSubmits = (peoples) => {
    console.log({ total, tippercent, peoples })
    if(total === '' || tippercent === '') {
        if(total === '') {
          setErrorMessage('bill')
          return;
        }
        if(tippercent === '') {
          setErrorMessage('tip')
          return;
        }
       } else {
      const bill = parseInt(total);
      const tipPercentage = (tippercent / 100);
      const tipAmount = bill * tipPercentage;
      const totalVal = tipAmount + bill;
      const perPersonTotal = totalVal / peoples;
  
      setTipAmountPerson(perPersonTotal)
      setTotalPerson(totalVal)
      // console.log({bill, tipPercentage, tipAmount, totalVal, perPersonTotal})
    }

  }

  return (
<div className="m-5 flex flex-col xl:h-screen justify-center items-center space-x-4">
    <picture>
      <img src={logo} alt="" className="mb-6" />
    </picture>
    <main className="mx-auto bg-white w-[100%] xl:w-[55rem] rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md grid xl:grid-cols-2 p-6">
      <div className="p-6">


        <p className="mb-4 font-bold text-[#516161]">Bill</p>
        <div className="bg-[#f3f8fb] rounded-md relative">
            <div className="flex items-center absolute left-5 top-7 ">
              <img src={dollar} alt="dollar sign icon" />
            </div>
            <input ref={inputTotal} type="text" onChange={ e => handleBill(e)} className="block w-full bg-[#f3f8fb] p-6 rounded-md text-right text-[#00474b] border focus:ring-[#00474b] focus:border-[#00474b] focus:outline focus:outline-2" />
        </div>
        <p className="mb-4 font-light text-[red] mt-3">{(errormessage === 'bill')? 'Please enter a bill amount' : ''}</p>



        <p className="mb-4 mt-4 font-bold text-[#516161]">Select Tip %</p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button onClick={() => handleTip(5) } className="bg-[#00474b] hover:bg-[#26c2ad] p-4 rounded-md font-bold text-white hover:text-[#00474b] text-center">5%</button>
          <button onClick={() => handleTip(10) } className="bg-[#00474b] hover:bg-[#26c2ad] p-4 rounded-md font-bold text-white hover:text-[#00474b] text-center">10%</button>
          <button onClick={() => handleTip(15) } className="bg-[#00474b] hover:bg-[#26c2ad] p-4 rounded-md font-bold text-white hover:text-[#00474b] text-center">15%</button>
          <button onClick={() => handleTip(25) } className="bg-[#00474b] hover:bg-[#26c2ad] p-4 rounded-md font-bold text-white hover:text-[#00474b] text-center">25%</button>
          <button onClick={() => handleTip(50) } className="bg-[#00474b] hover:bg-[#26c2ad] p-4 rounded-md font-bold text-white hover:text-[#00474b] text-center">50%</button>
          <input onChange={ e => handleTip(e.target.value)} type="text" className="block w-full p-2.5 bg-[#f3f8fb] text-center rounded-md text-[#00474b]" placeholder="Custom" />
        </div>
        <p className="mb-4 font-light text-[red] mt-3">{(errormessage === 'tip')? 'Please select or enter a tip amount' : ''}</p>


        <p className="mb-4 font-bold text-[#516161]">Number of People</p>
        <div className="bg-[#f3f8fb] rounded-md relative">
            <div className="flex items-center absolute left-5 top-7 ">
              <img src={person} alt="dollar sign icon" />
            </div>
            <input ref={inputPerson} onChange={ e =>  handleSubmits(e.target.value)} className="block w-full bg-[#f3f8fb] p-6 rounded-md text-right text-[#00474b] border focus:ring-[#00474b] focus:border-[#00474b] focus:outline focus:outline-2" type="number" id="quantity" name="quantity" min="1" max="100" />
        </div>

      </div> 
      <TotalComponent tipAmount={tipAmountPerson} total={totalPerson} handleReset={handleReset}  />
    </main>
  </div>
  );
}

export default App;
