import '../App.css';
import pic from '../assets/girly.png'

 export const Section5 = () =>{
    return(
        <div className="bg-purple-50">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-20 pt-20">
            <div className="ml-0 sm:ml-20 md:ml-20 lg:ml-20">
               <h1 className="font-bold text-3xl ml-5 sm:ml-20 md:ml-20 lg:ml-20">
                  If You Are A Certified Teacher<br/> Then  
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 "> Become An Instructor</span>
               </h1>
               <p className='ml-5 sm:ml-20 md:ml-20 lg:ml-20 mt-3'>
                Unlock the opportunity to inspire and educate by joining our team<br/>
                of instructors. if you are a certified teacher, eleviate your impact
                and <br/> share and share your expertise with learners worldwide.
               </p>
               <h1 className='ml-20 font-bold text-3xl mt-5'>Enjoy Many Perks</h1>
               <div className="flex gap-20 ml-5 sm:ml-20 md:ml-20 lg:ml-20">
               <ul>
                <li className='custom-bullet'>Global Impact</li>
                <li className='custom-bullet'>Flexible Schedule</li>
                <li className='custom-bullet'>Innivative Teaching Tools</li>
                <li className='custom-bullet'>Recognistion And Reputation</li>
               </ul>
               <ul>
                <li className='custom-bullet'>Creative Freedom</li>
                <li className='custom-bullet'>Moneytise Your Expertise</li>
                <li className='custom-bullet'>Professional Development</li>
                <li className='custom-bullet'>Networking Opportunities</li>
               </ul>
               </div>
                   <button className='p-2 ml-20 text-white mt-4 rounded-md text-xl bg-gradient-to-r from-purple-500 to-pink-500 '>Become an instructor</button>
            </div>
            <div className="">
            <img
            src={pic}
            />
            </div>
        </div>
        </div>
    )
}