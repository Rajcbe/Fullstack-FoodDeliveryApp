import React from "react";
const Header=()=>{
        return <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
           {/*desktop & tablet */}
            <div className="hidden md:flex w-full h-full p-4"> </div>
            {/*mobile*/}
            <div className="flex md:hidden w-full h-full p-4"> </div>

        </div>
}
export default Header