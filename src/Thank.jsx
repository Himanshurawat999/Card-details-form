import React from "react";

function Thank() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-[-5.68rem] mb-[-2.8rem] lg:w-[23.8rem] lg:ml-[18rem] ">
      <div className="h-[5rem] w-[5rem] rounded-full flex items-center justify-center text-white text-4xl bg-gradient-to-b from-[hsl(249,99%,64%)] to-[hsl(278,94%,30%)]
             focus-within:bg-gradient-to-r mb-[2.18rem]">
                <i class="ri-check-line"></i>
             </div>
      <div className="text-center">
        <p className="text-[1.75rem] mb-4 text-[var(--Purple-950) font-[500]">THANK YOU!</p>
        <p className="text-[1.1rem] mb-12 text-[var(--Gray-400)]">We've added your card details</p>
      </div>
      <button
        type="submit"
        className="w-full h-[3.3rem] mb-[2.8rem] rounded-md bg-[var(--Purple-950)] text-[var(--White)]"
      >
        Continue
      </button>
    </div>
  );
}

export default Thank;
