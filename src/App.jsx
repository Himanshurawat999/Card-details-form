import React, { useState } from "react";
import "./App.css";
import Thank from "./Thank";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const [nameVal, setnameVal] = useState(true);
  const [numVal, setnumVal] = useState(true);
  const [monthVal, setmonthVal] = useState(true);
  const [yearVal, setyearVal] = useState(true);
  const [cvcVal, setcvcVal] = useState(true);
  const [valid, setValid] = useState(false);

  const numValidation = (number) => {
    let value = Number(number);
    if (Number.isNaN(value)) {
      setnumVal(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = false;

    if (name === "") {
      setnameVal(false);
      error = true;
    }
    if (number === "") {
      setnumVal(false);
      error = true;
    }
    if (month === "") {
      setmonthVal(false);
      error = true;
    }
    if (year === "") {
      setyearVal(false);
      error = true;
    }
    if (cvc === "") {
      setcvcVal(false);
      error = true;
    }
    const isValid = !error;
    console.log(isValid);
    setValid(isValid);  
  };

  return (
    <main className="w-screen h-screen font-space grid grid-cols-1 grid-rows-[15rem_auto] lg:grid-cols-[35%_65%] lg:grid-rows-1 lg:w-screen lg:h-screen">
      <div className="left bg-[var(--Purple-950)] relative">
        <div className="cards w-86 h-63 absolute top-[2rem] left-[1rem] lg:top-[11.68rem] lg:left-[10.25rem]">
          <div
            className="front-card bg-gradient-to-r from-[hsl(249,99%,64%)] to-[hsl(278,94%,30%)]
             focus-within:bg-gradient-to-r absolute w-[17.8rem] h-[9.77rem] top-[5.87rem] z-1 rounded-md lg:top-0 lg:left-0 lg:h-[15.32rem] lg:w-[27.94rem] lg:rounded-lg"
          >
            <div className="circle w-[5.25rem] h-[1.87rem] mt-[1.13rem] ml-[1.25rem] flex items-center justify-between lg:mt-[1.75rem]">
              <div className="w-[1.88rem] h-[1.87rem] bg-[var(--White)] rounded-full lg:w-[2.94rem] lg:h-[2.94rem]"></div>
              <div className="w-[0.85rem] h-[0.84rem] border-1 border-[var(--White)] rounded-full lg:w-[1.32rem] lg:h-[1.32rem]"></div>
            </div>
            <div className="card-num h-[1.44rem] mt-[2.31rem] ml-[1.187rem] text-[1.125rem] text-[var(--White)] tracking-[2.2px] lg:mt-[4rem] lg:ml-[2rem] lg:text-[1.75rem]">
              {number ? number : "0000 0000 0000 0000"}
            </div>
            <div className="w-[15.319rem] mt-[1.0625rem] ml-[1.187rem] flex items-center justify-between lg:mt-[2.59rem] lg:ml-[2rem] lg:text-[0.87rem] lg:w-[21.84rem]">
              <div className="name text-[0.75rem] text-[var(--White)] tracking-[1.29px]">
                {name ? name : "Jane Appleseed"}
              </div>
              <div className="date text-[0.75rem] text-[var(--White)] tracking-[1.29px]">
                {month ? month : "00"} / {year ? year : "00"}
              </div>
            </div>
          </div>
          <div className="back-card bg-[var(--Gray-200)] absolute w-[17.8rem] h-[9.77rem] left-[4.6rem] z-0 rounded-md lg:top-[17.63rem] lg:left-[5.87rem] lg:h-[15.32rem] lg:w-[27.94rem] lg:rounded-lg">
            <div className="w-full h-[2.16rem] mt-[0.92rem] bg-[#2F2F2F] lg:mt-[1.4rem] lg:h-[3.37rem]"></div>
            <div className="w-[14.44rem] h-[1.86rem] mt-[0.96rem] ml-[1.79rem] bg-[var(--Gray-400)] rounded-md lg:mt-[1.5rem] lg:ml-[2.8rem] lg:h-[2.37rem] lg:w-[22.56rem]">
              <p className="pt-[0.56rem] pl-[12.512rem] text-white text-[0.56rem] tracking-[1.29px] lg:pl-[19.68rem] lg:pt-[0.63rem] lg:text-[0.87rem]">
                {cvc ? cvc : "000"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right pt-[5.68rem] px-[1.5rem] pb-[2.8rem] lg:p-0">
        {valid ? (
          <Thank />
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:w-[23.8rem] lg:mt-[17.2rem] lg:ml-[18rem]"
          >
            <label className="text-[0.75rem] tracking-[2px] uppercase font-[500] pb-[0.56rem]">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[2.25rem] rounded-md border-[1px] outline-none border-[var(--Gray-400)] placeholder:text-[var(--Gray-400)] mb-[1.25rem]  pl-4 py-[0.68rem] font-[500]"
            />
            {nameVal || (
              <p className="text-[0.75rem] text-[var(--Red)] mt-[-1rem] mb-[1.6rem]">
                Can’t be blank
              </p>
            )}
            <label className="text-[0.75rem] tracking-[2px] uppercase font-[500] pb-[0.56rem]">
              Card Number
            </label>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={(e) => setNumber(e.target.value)}
              onInput={(e) => numValidation(e.target.value)}
              className={`w-full h-[2.25rem] rounded-md border-[1px] outline-none ${
                numVal ? "border-[var(--Gray-400)]" : "border-[var(--Red)]"
              } placeholder:text-[var(--Gray-400)] mb-[1.25rem]  pl-4 py-[0.68rem] font-[500]`}
            />
            {numVal || (
              <p className="text-[0.75rem] text-[var(--Red)] mt-[-1rem] mb-[1.6rem]">
                Wrong format, numbers only
              </p>
            )}

            <div className="flex ">
              <div className="w-[55%]">
                <label className="text-[0.75rem] tracking-[2px] uppercase font-[500] pb-[0.56rem]">
                  Exp. Date (MM/YY)
                </label>
                <div className="flex gap-[0.5rem]">
                  <input
                    type="text"
                    placeholder="MM"
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-[45%] h-[2.25rem] rounded-md outline-none border-[1px] border-[var(--Gray-400)] placeholder:text-[var(--Gray-400)] mb-[1.25rem]  pl-4 py-[0.68rem] font-[500]"
                  />
                  <input
                    type="text"
                    placeholder="YY"
                    onChange={(e) => setYear(e.target.value)}
                    className="w-[45%] h-[2.25rem] rounded-md outline-none border-[1px] border-[var(--Gray-400)] placeholder:text-[var(--Gray-400)] mb-[1.25rem]  pl-4 py-[0.68rem] font-[500]"
                  />
                </div>
                {monthVal || yearVal || (
                  <p className="text-[0.75rem] text-[var(--Red)] mt-[-1rem] mb-[1.6rem]">
                    Can’t be blank
                  </p>
                )}
              </div>
              <div className="w-[45%]">
                <label className="text-[0.75rem] tracking-[2px] uppercase font-[500] pb-[0.56rem]">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="e.g. 123"
                  onChange={(e) => setCvc(e.target.value)}
                  className="w-full h-[2.25rem] rounded-md outline-none border-[1px] border-[var(--Gray-400)] placeholder:text-[var(--Gray-400)] mb-[1.25rem]  pl-4 py-[0.68rem] font-[500]"
                />
                {cvcVal || (
                  <p className="text-[0.75rem] text-[var(--Red)] mt-[-1rem] mb-[1.6rem]">
                    Can’t be blank
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-[3.3rem] mb-[2.8rem] rounded-md bg-[var(--Purple-950)] text-[var(--White)]"
            >
              Confirm
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

export default App;
