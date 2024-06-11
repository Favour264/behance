import React from "react"


 export const Navbar = () =>{
    return(
       <div className="text-black mt-10 bg-white">
        <div className="flex  justify-around">
        <div className="font-bold text-2xl">
            Etech.
        </div>
        <div className="">
        <ul className="flex gap-2 sm:gap-10 md:gap-10 lg:gap-10">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Teachers</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Contacts</a></li>
            </ul>
            </div>

        </div>
       </div>
    )
}