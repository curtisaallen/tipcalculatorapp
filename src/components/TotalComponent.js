import React from 'react'


const TotalComponent = props => {
  return (
    <div className="bg-[#00474b] rounded-md p-6 relative">

    <div className="grid grid-cols-3 mb-12 mt-12">
      <div className="flex flex-col">
        <p className="text-white text-md">Tip Amount</p>
        <p className="text-[#6d999a] text-sm">/ person</p>
      </div>
      <div className="col-span-2 text-right block">
        <p className="font-bold text-5xl text-[#28bfac]">{`$` + props.tipAmount.toFixed(2)}</p>
      </div>
    </div>

    <div className="grid grid-cols-3 mb-12">
      <div className="flex flex-col">
        <p className="text-white text-md">Total</p>
        <p className="text-[#6d999a] text-sm">/ person</p>
      </div>
      <div className="col-span-2 text-right block">
        <p className="font-bold text-5xl text-[#28bfac]">{`$` +props.total.toFixed(2)}</p>
      </div>
    </div>

    <button  onClick={props.handleReset} className="bg-[#26c2ad] hover:bg-[#9fe8df] p-4 rounded-md font-bold text-[#00474b] text-center w-[100%] xl:w-[89%] xl:absolute bottom-0 mb-9">RESET</button>

  </div>
  )
}

export default TotalComponent