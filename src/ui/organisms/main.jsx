
import  Vector  from '../../images/Vector.svg'
import  Photo  from '../../images/mobile/Photo.svg'
import Photomd from '../../images/tablet/Photomd.svg'
import Photoxl from '../../images/desktop/Photoxl.svg'

export const Main = () => {
  return (
    <div className='sm:w-80 sm:h-[504px] sm:my-0 sm:mx-auto sm:pt-[1px]
                    md:w-[792px] md:h-[455px] md:my-0 md:mx-auto md:pt-[1px]
                    xl:w-[1280px] xl:h-[768px] xl:my-0 xl:mx-auto xl:pt-[1px]'>
        <div className='sm:w-[164px] sm:h-[61px] sm:mt-8 sm:ml-[16px]
                        md:w-[409px] md:h-[124px] md:mt-[45px] md:ml-[39px]
                        xl:mt-[162px] xl:ml-[86px]'>
            <h1 className='font-Montserrat sm:font-[700] sm:text-[25px] sm:leading-6
                           md:font-bold md:text-[63px] md:leading-[90px] '>Hey, I’m Nick</h1>
            <h4 className='sm:font-Montserrat sm:font-normal sm:text-[14px] sm:leading-[21px] sm:pt-[10px]
                           md:font-Montserrat md:font-normal md:text-[20px] md:leading-[14px]'>Frontend developer</h4>
        </div>
        
        <div className='w-[25px] h-[3px] bg-buttonAndLine sm:mt-7 sm:ml-[14px]
                                                            md:mt-[31px] md:ml-[39px]
                                                            xl:mt-[88px] xl:ml-[85px]'></div>
            <h3 className='sm:w-[290px] sm:h-[63px] sm:font-normal sm:text-[14px] sm:leading-[21px] sm:mt-[25px] sm:ml-[15px] font-Montserrat
                           md:w-[445px] md:h-[106px] md:font-normal md:text-[20px] md:leading-[30px] md:mt-4 md:ml-[39px]
                           xl:mt-[23px] xl:ml-[85px]'>Help you to create high-quality digital products that your clients will love <br className='md:hidden xl:hidden'/>and let your business thrive </h3>
                <button className='bg-buttonAndLine hover:bg-hoverButton sm:w-[139px] sm:h-[39px] sm:mt-[26px] sm:ml-[15px] sm:pr-6 rounded-[50px]
                                                      md:w-[188px] md:h-[50px] md:mt-[29px] md:ml-10 md:font-Montserrat md:font-semibold md:text-[16px] md:leading-6 md:pr-[39px]
                                                      xl:mt-[44px] xl:ml-[85px]
                                   focus:bg-buttonAndLine focus:border-solid focus:border-activeButton border-[3px]  text-buttontext'>
                                                        Get in touch
                </button>
            <img src={Vector} className='relative sm:top-[-29px] sm:left-[123px]
            md:top-[-36px] md:left-[180px]
            xl:top-[-34px] xl:left-[226px] '/>  

            <img src={Photo} className='relative sm:top-[-111px] sm:block xl:hidden md:hidden'/>   
            <img src={Photomd} alt='' className='relative md:top-[-400px] md:left-[215px] sm:hidden md:block xl:hidden'/>
            <img src={Photoxl} alt='' className='relative xl:top-[-602px] xl:left-[311px] sm:hidden md:hidden xl:block'/>
    </div>
  )
}

