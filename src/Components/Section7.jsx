

export const Section7 = () =>{
    return(
        <div className="section">
        <div className="">
            <div className="w-6/6  sm:w-4/6 md:w-4/6 lg:w-4/6 rounded-3xl mb-20 mt-20 text-white pt-10 ml-3 sm:ml-60 md:ml-60 lg:ml-60 bg-gradient-to-r  from-purple-500 to-pink-500">
                <h1 className="flex justify-center items-centerfont-bold text-3xl">Get In Touch!</h1>
                <p className="ml-5 sm:ml-20 md:ml-20 lg:ml-20 pl-5 sm:pl-20 md:pl-20 lg:pl-20 pt-5">
                    Subscribe us to get in touch and to enjoy any discounts,
                    promos and much more.
                </p>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row ml-2 sm:ml-20 md:ml-20 lg:ml-20 gap-10 mt-10 pb-20">
                <input
                    className="w-30 sm:w-80 md:w-80 lg:w-80 border-3 border-black text-xl text-gray-800 bg-white  rounded-md py-2 px-10 pl-12 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Enter your email..." 
                />
                <div className="bg-white font-bold text-2xl  rounded-md">
                <button className="  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 w-30 p-2 rounded-md">Subscribe</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}