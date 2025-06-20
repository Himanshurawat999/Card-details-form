import React from "react";
import "./App.css";

function App() {
  return (
    <main className="w-screen h-screen font-space grid grid-cols-1 grid-rows-[15rem_auto]">
      <div className="left bg-[var(--Purple-950)] relative">
        <div className="cards w-86 h-63 absolute top-[2rem] left-[1rem]">
          <div
            className="front-card bg-gradient-to-r from-[hsl(249,99%,64%)] to-[hsl(278,94%,30%)]
             focus-within:bg-gradient-to-r absolute w-[17.8rem] h-[9.77rem] top-[5.87rem] z-1 rounded-md "
          >
            <div className="circle w-[3.4rem] h-[1.87rem] mt-[1.13rem] ml-[1.25rem] flex items-center justify-between">
              <div className="w-[1.88rem] h-[1.87rem] bg-[var(--White)] rounded-full"></div>
              <div className="w-[0.85rem] h-[0.84rem] border-1 border-[var(--White)] rounded-full"></div>
            </div>
            <div className="card-num h-[1.44rem] mt-[2.31rem] ml-[1.187rem] text-[1.125rem] text-[var(--White)] tracking-[2.2px]">
              0000 0000 0000 0000
            </div>
            <div className="w-[15.319rem] mt-[1.0625rem] ml-[1.187rem] flex items-center justify-between">
              <div className="name text-[0.75rem] text-[var(--White)] tracking-[1.29px]">
                Jane Appleseed
              </div>
              <div className="date text-[0.75rem] text-[var(--White)] tracking-[1.29px]">
                00/00
              </div>
            </div>
          </div>
          <div className="back-card bg-[var(--Gray-200)] absolute w-[17.8rem] h-[9.77rem] left-[4.6rem] z-0 rounded-md">
            <div className="w-full h-[2.16rem] mt-[0.92rem] bg-[#2F2F2F]"></div>
            <div className="w-[14.44rem] h-[1.86rem] mt-[0.96rem] ml-[1.79rem] bg-[var(--Gray-400)] rounded-md">
              <p className="pt-[0.56rem] pl-[12.512rem] text-white text-[0.56rem] tracking-[1.29px]">
                000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right mt-[5.68rem] mx-[1.5rem] mb-[2.8rem]">
        <form className="flex flex-col">
          <label className="text-[0.75rem] tracking-[2px] uppercase font-[500] pb-[0.56rem]">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            className="w-full h-[2.25rem] rounded-md border-[1px] border-[var(--Gray-400)] placeholder:text-[var(--Gray-400)] mb-[1.25rem]  pl-4 py-[0.68rem] font-[500]"
          />
          <label className="text-[0.75rem] tracking-[2px] uppercase font-[500] pb-[0.56rem]">
            Card Number
          </label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            className="w-full h-[2.25rem] rounded-md border-[1px] border-[var(--Gray-400)] placeholder:text-[var(--Gray-400)] mb-[1.25rem]  pl-4 py-[0.68rem] font-[500]"
          />
          <div className="flex ">
            <div className="w-[55%]">
              <label className="text-[0.75rem] tracking-[2px] uppercase font-[500] pb-[0.56rem]">
                Exp. Date (MM/YY)
              </label>
              <div className="flex gap-[0.5rem]">
                <input
                  type="text"
                  placeholder="MM"
                  className="w-[45%] h-[2.25rem] rounded-md border-[1px] border-[var(--Gray-400)] placeholder:text-[var(--Gray-400)] mb-[1.25rem]  pl-4 py-[0.68rem] font-[500]"
                />
                <input
                  type="text"
                  placeholder="YY"
                  className="w-[45%] h-[2.25rem] rounded-md border-[1px] border-[var(--Gray-400)] placeholder:text-[var(--Gray-400)] mb-[1.25rem]  pl-4 py-[0.68rem] font-[500]"
                />
              </div>
            </div>
            <div className="w-[45%]">
              <label className="text-[0.75rem] tracking-[2px] uppercase font-[500] pb-[0.56rem]">
                CVC
              </label>
              <input
                type="text"
                placeholder="e.g. 123"
                className="w-full h-[2.25rem] rounded-md border-[1px] border-[var(--Gray-400)] placeholder:text-[var(--Gray-400)] mb-[1.25rem]  pl-4 py-[0.68rem] font-[500]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-[3.3rem] mb-[2.8rem] rounded-md bg-[var(--Purple-950)] text-[var(--White)]"
          >
            Confirm
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
