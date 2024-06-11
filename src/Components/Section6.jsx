import pic from '../assets/pen.jpg'

export const Section6 = () =>{
    return(
        <div className="bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="pt-20">
                <h1 className="text-white mb-10 flex justify-center font-bold text-2xl">
                    Student's Testimonial
                </h1>
                <div className="text-white flex justify-center font-sm text-xl">Here's what 
                our students have to say about their transformative learning <br/>experience
                :Real stories, real growth.Discover firsthand the impact our<br/> courses have on
                their lives.</div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row ml-5 gap-5 mt-10 mr-5 ">
              <div className="w-6/6 sm:w-2/6 md:w-2/6 lg:w-2/6 bg-white  rounded-2xl mb-20">
                <div className="flex">
                 <img
                 className='w-12 h-12 ml-5 mt-5  rounded-full border-2 border-purple-500'
                 src={pic}
                 />
                 <div className="flex-col">
                 <h1 className=' mt-4 text-purple-500 font-bold text-xl'>
                    Alexander Rosy
                 </h1>
                 <p className='text-small text-black'>Web Developer</p>
                 </div>
                 </div>
                 <h1 className='text-xl ml-10'>
                   Enrolling in courses at the E-Learning platform  was a game-changer for me. <br/>
                   Absolutely transformative experience!
                 </h1>
              </div>

              <div className="w-6/6 sm:w-2/6 md:w-2/6 lg:w-2/6 bg-white rounded-2xl mb-20 ">
                <div className="flex">
                 <img
                 className='w-12 h-12 ml-5 mt-5  rounded-full border-2 border-purple-500'
                 src={pic}
                 />
                 <div className="flex-col">
                 <h1 className=' mt-4 text-purple-500 font-bold text-xl'>
                    Alexander Rosy
                 </h1>
                 <p className='text-small text-black'>Web Developer</p>
                 </div>
                 </div>
                 <h1 className='text-xl ml-10'>
                   Enrolling in courses at the E-Learning platform  was a game-changer for me. <br/>
                   Absolutely transformative experience!
                 </h1>
              </div>
         
              <div className="w-6/6 sm:w-2/6 md:w-2/6 lg:w-2/6 bg-white  rounded-2xl mb-20">
                <div className="flex">
                 <img
                 className='w-12 h-12 ml-5 mt-5  rounded-full border-2 border-purple-500'
                 src={pic}
                 />
                 <div className="flex-col">
                 <h1 className=' mt-4 text-purple-500 font-bold text-xl'>
                    Alexander Rosy
                 </h1>
                 <p className='text-small text-black'>Web Developer</p>
                 </div>
                 </div>
                 <h1 className='text-xl ml-10'>
                   Enrolling in courses at the E-Learning platform  was a game-changer for me. <br/>
                   Absolutely transformative experience!
                 </h1>
              </div>
            </div>
        </div>
    )
}