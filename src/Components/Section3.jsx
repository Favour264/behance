import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import picc from '../assets/image.png'


export const Section3 = () => {
    return (
        <div className="">
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-10 font-bold text-2xl">
                Search Courses
            </h1>
            <div className="relative mt-10 flex items-center">
                <input
                    className="w-80 border-3 border-black text-xl text-gray-800 bg-rose-200  rounded-md py-2 px-10 pl-12 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Search for  50+ courses" 
                />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-2xl text-purple-400" /> {/* Absolute positioning for the icon */}
                <button className="p-1 ml-4 w-20 h-12 border-2 rounded-md border-pink-100 bg-gradient-to-b text-white from-purple-400 to-pink-400">Search</button>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row mt-20 justify-around">
         <img
         className=''
         src={picc}
         alt='pictue'
         />
         <div className=" ">
           <h1 className='font-bold text-4xl'><span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  text-4xl'>Benefits</span> From Our Online<br/> Learning</h1>
           <div className="flex ">
            <div className="font-bold text-3xl bg-purple-400 mt-5 mr-5 w-12 h-11 pl-1 pt-1 rounded-full ">
           <FontAwesomeIcon icon={faGraduationCap} />
           </div>
           <div className="">
           <h1 className=' font-semibold text-2xl mt-2'>
                Online Degrees
          </h1>
          <p className='text-small'>
            Earn accredited degrees from the comfort of ur home, <br/>
            opening doors to wolrd of possibilities.
          </p>
          </div>
          </div>

          <div className="flex ">
            <div className="font-bold text-3xl bg-rose-400 mt-5 mr-5 w-12 h-12 pl-2 pt-1 rounded-full ">
            <FontAwesomeIcon icon={faBookOpen} />
           </div>
           <div className="">
           <h1 className=' font-semibold text-2xl mt-2'>
           Short Courses
          </h1>
          <p className='text-small'>
          Enhance your skills with our concise and focused short <br/> courses,
            designed for quick and effective learning.
          </p>
          </div>
          </div>

          <div className="flex ">
            <div className="font-bold text-3xl bg-purple-400 mt-5 mr-5 w-12 h-12 pl-3 pt-1 rounded-full ">
            <FontAwesomeIcon icon={faUser} />
           </div>
           <div className="">
           <h1 className=' font-semibold text-2xl mt-2'>
           Training From Experts
          </h1>
          <p className='text-small'>
          Immerse yourself in knowledge with industry experts <br/> guiding you through
            hands-on experience.
          </p>
          </div>
          </div>

          <div className="flex ">
            <div className="font-bold text-4xl bg-rose-400 mt-5 mr-5 w-12 h-12 pl-3 pt-1 rounded-full ">
            <FontAwesomeIcon icon={faPlay} />
           </div>
           <div className="">
           <h1 className=' font-semibold text-2xl mt-2'>
           1.5k + Video Courses
          </h1>
          <p className='text-small'>
          Dive into a vast library of over 1.5k video courses covering<br/>
            many subjects , offering a visual learning experieence.
          </p>
          </div>
          </div>

          
         </div>
        </div>
        </div>
    )
}
