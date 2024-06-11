import picture from '../assets/pic1.png'

 export const Section1 = () =>{
    return(
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center sm:justify-around md:justify-around lg:justify-around">
            <div className="mt-20 ml-10 sm:ml-20 md:ml-20 lg:ml-20">
                <h1 className="font-bold text-3xl sm:text-5xl md:text-5xl lg:text-5xl">
                    Develop Your <br/> skills in a new <br/> and unique way
                </h1>
                <p className='mt-10 text-2xl'>
                    Explore a transformative approach to skill developmemnt <br/> on our
                    online learning plateform.Uncover a new realm of <br/> learning experiences 
                    and  eleviate ur expertise in  unique ways.
                </p>
            </div>
                <img
                className='mr-10'
                src={picture}
                />
        </div>
    )
}