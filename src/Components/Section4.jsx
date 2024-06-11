import pic from '../assets/penny.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import pics from '../assets/pen.jpg'
import pix from '../assets/den.jpg'


export const Section4 = () =>{
    return(
        <div className="bg-gradient-to-b text-white from-purple-400 to-pink-400">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl text-white">Our Popular Courses</h1>
            <p className=" text-xl">
                Discove our most sought-after courses,carefully curated to meet the <br/> demands of
                today's learners.Dive into engaging content crafted for<br/> success in every step
                 of your educational journey.
            </p>
          </div>
        <div className="">
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-around ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-10 mt-10 ">
            <img className="w-full h-60 rounded-3xl pl-2 pr-2 pt-2" src={pic} alt="Product" />
            <div className="">
            <span className="inline-block bg-purple-300  ml-5 mt-5 px-6 py-1 text-sm font-semibold text-gray-700 mr-2">Web Design</span>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-black text-2xl mb-2">Webdesign & <br/> Development</div>
            </div>
            <div className="flex gap-3">
            <div className="flex gap-2">
            <FontAwesomeIcon icon={faBookOpen}
            className='text-2xl text-purple-400' />
            <p className='text-xl text-black'>25 classes</p>
            </div>
            <div className="flex gap-2">
            <FontAwesomeIcon icon={faUser}
            className='text-2xl text-purple-400' />
            <p className='text-xl text-black'>215 students</p>
            </div>
            </div>
            <hr className='bg-green-500' />
            <div className="flex">
                <div className="">
                    <h1 className='text-2xl text-black mr-12'>$560.00</h1>
                </div>
                <div className="flex">
                    <img
                    className='w-10 h-10 rounded-full'
                    src={pic}
                    />
                    <h1 className='text-xl text-purple-500'>J.Morgan</h1>
                </div>
            </div>
        </div>



      <div className="flex">
        <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white mb-10 mt-10">
            <img className="w-full h-60 pl-2 pt-2 pr-2 rounded-3xl" src={pics} alt="Product" />
            <div className="">
            <span className="inline-block bg-purple-300  ml-5 mt-5 px-6 py-1 text-sm font-semibold text-gray-700 mr-2">Web Design</span>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-black text-2xl mb-2">Wireframing & <br/> Proto-typing</div>
            </div>
            <div className="flex gap-3">
            <div className="flex gap-2">
            <FontAwesomeIcon icon={faBookOpen}
            className='text-2xl text-purple-400' />
            <p className='text-xl text-black'>8 classes</p>
            </div>
            <div className="flex gap-2">
            <FontAwesomeIcon icon={faUser}
            className='text-2xl text-purple-400' />
            <p className='text-xl text-black'>105 classes</p>
            </div>
            </div>
            <hr className='bg-green-500' />
            <div className="flex">
                <div className="">
                    <h1 className='text-2xl text-black mr-12'>$560.00</h1>
                </div>
                <div className="flex">
                    <img
                    className='w-10 h-10 rounded-full'
                    src={pic}
                    />
                    <h1 className='text-xl text-black'>I.Favour</h1>
                </div>
            </div>
        </div>
        </div>


      <div className="flex">
        <div className="max-w-30 rounded overflow-hidden shadow-lg bg-white mb-10 mt-10">
            <img className="w-full rounded-3xl h-60 pl-2 pr-2 pt-2" src={pix} alt="Product" />
            <div className="">
            <span className="inline-block bg-purple-300  ml-5 mt-5 px-6 py-1 text-sm font-semibold text-gray-700 mr-2">Web Design</span>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-2xl text-black mb-2">Python For <br/> Data Science</div>
            </div>
            <div className="flex gap-3">
            <div className="flex gap-2">
            <FontAwesomeIcon icon={faBookOpen}
            className='text-2xl text-purple-400' />
            <p className='text-xl text-black'>25 classes</p>
            </div>
            <div className="flex gap-2">
            <FontAwesomeIcon icon={faUser}
            className='text-2xl text-purple-400' />
            <p className='text-xl text-black'>95 students</p>
            </div>
            </div>
            <hr className='bg-green-500' />
            <div className="flex">
                <div className="">
                    <h1 className='text-2xl text-black mr-12'>$560.00</h1>
                </div>
                <div className="flex">
                    <img
                    className='w-10 h-10 rounded-full'
                    src={pic}
                    />
                    <h1 className='text-xl  text-purple-500'>F.John</h1>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}