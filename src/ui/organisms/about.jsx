
import Aboutimagesm from '../../images/mobile/Aboutimagesm.jpg'
import Abooutimagemd from '../../images/tablet/Aboutimagemd.jpg'
import Abooutimagexl from '../../images/desktop/Aboutimagexl.svg'
import Musicmd from '../../images/tablet/Musicmd.svg'
import Artmd from '../../images/tablet/Artmd.svg'
import Photographymd from '../../images/tablet/Photographymd.svg'
import  Musicsm  from '../../images/mobile/Musicsm.svg'
import   Artsm  from '../../images/mobile/Artsm.svg'
import Photographysm  from '../../images/mobile/Photographysm.svg'
import Vector  from '../../images/Vector.svg'

export const About = () => {
  return (
    <div className='sm:w-80 sm:h-[1364px] mx-auto my-0 pt-[1px]
                    md:w-[792px] md:h-[1542px]
                    xl:w-[1280px] xl:h-[1248px] '>
        <div className='sm:flex sm:flex-col sm:w-[290px] sm:h-[527px] my-0 mx-auto
                        md:flex md:flex-row md:w-[720px] md:h-[527px] 
                        xl:w-[1280px] xl:h-[638px] xl:flex xl:flex-row'>
            <div className=''>
                <h1 className='sm:w-[103px] sm:h-[30px] font-Montserrat sm:font-semibold sm:text-[20px] sm:leading-[30px] sm:mt-[47px]
                               md:w-[167px] md:h-[48px] md:font-bold md:mt-20 md:ml-[6px] md:text-[32px] md:leading-[48px]
                               xl:col-start-1 xl:ml-[88px] xl:mt-[98px]'>About me</h1>
                <img src={Aboutimagesm} alt='' className='sm:block sm:mt-9 sm:rounded-[50%] md:hidden xl:hidden'/>
                <img src={Abooutimagemd} alt='' className='md:block sm:hidden xl:hidden md:rounded-[50%] md:mt-20 md:ml-[3px]'/>
                <img src={Abooutimagexl} alt='' className='xl:block sm:hidden md:hidden xl:rounded-[50%] xl:mt-20 xl:ml-[85px]'/>
            </div>
            <div className='md:mt-[199px] md:ml-11
                            xl:w-[537px] xl:h-[228px] xl:mt-[274px] xl:ml-[158px]'>
                <div className='w-[25px] h-[3px] bg-buttonAndLine sm:mt-8 sm:ml-0
                                xl:mt-[41px]'></div>
                <p className='sm:mt-[26px] sm:font-normal sm:text-[14px] font-Montserrat md:font-normal md:text-[20px]'><b className='font-Montserrat sm:font-semibold sm:text-[14.5px] sm:leading-[21px] md:font-bold md:text-[20.5px] md:leading-[25px]'>Nick Richardson</b> - specialist in <br className='md:block sm:hidden xl:hidden'/> Frontend <br className='sm:block md:hidden xl:block'/>development.<br className='md:block sm:hidden xl:hidden'/> Clear code is my passion. <br/>Solving issues through negotiations </p>
                <div className='flex sm:hidden md:block xl:block'>
                  <button className='bg-buttonAndLine hover:bg-hoverButton md:w-[188px] md:h-[50px] md:mt-[42px] md:pr-[37px] md:pt-[4px] md:font-Montserrat md:font-semibold md:text-[16px] md:leading-6 rounded-[50px]
                                                        xl:mt-[63px]
                                     focus:bg-buttonAndLine focus:border-solid focus:border-activeButton border-[3px] text-buttontext'>
                                                          Get in touch
                  </button>
                  <img src={Vector}  className='relative sm:top-[-34px] sm:left-[141px]' />
              </div>
            </div>
        </div>
      <div className='xl:flex xl:flex-row xl:gap-[47px]'>
        <div className='sm:w-[290px] sm:h-[244px] sm:mt-[46px] sm:my-0 sm:mx-auto
                        md:w-[353px] md:h-[372px] md:ml-[39px] md:mt-[37px]
                        xl:mt-[82px] xl:ml-[86px]'>
          <h1 className='sm:font-semibold sm:text-[21px] sm:leading-[33px] font-Montserrat
                         md:font-bold md:text-[25.5px] md:leading-[33px]'>Interests</h1>
          <ul className='sm:flex sm:flex-col sm:mt-[27px] sm:gap-[22px]
                         md:flex md:flex-col md:mt-[49px] md:gap-11'>
            <li className='flex flex-row sm:gap-2
                                         md:gap-4'>
              <img src={Musicmd} alt='' className='sm:hidden md:block xl:block'/>
              <img src={Musicsm} className='sm:block md:hidden xl:hidden' />  
                <div className='flex flex-col md:gap-4'>
                  <p className='sm:font-semibold sm:text-[15px] leading-[21px] font-Montserrat
                                       md:font-semibold md:text-[21px] '>Music</p>
                  <p className='sm:font-normal sm:text-[14px] leading-[25px] font-Montserrat
                                       md:font-normal md:text-[20px] md:leading-[25px]'>Indie rock | Reggae</p>
                </div>
            </li>
            <li className='flex flex-row sm:gap-2
                                         md:gap-[14px] md:mt-2'>
            <img src={Artmd} alt='' className='sm:hidden md:block xl:block'/>
              <img src={Artsm} className='sm:block md:hidden xl:hidden'/>  
                <div className='flex flex-col md:gap-[14px]'>
                  <p className='sm:font-semibold sm:text-[15px] leading-[21px] font-Montserrat
                                       md:font-semibold md:text-[21px]'>Art</p>
                  <p className='sm:font-normal sm:text-[14px] leading-[28px] font-Montserrat
                                       md:font-normal md:text-[20px] md:leading-[25px]'>Edvard Munch | Frida Kahlo</p>
                </div>
            </li>
            <li className='flex flex-row sm:gap-2
                                         md:gap-4'>
            <img src={Photographymd} alt='' className='sm:hidden md:block xl:block'/>
              <img src={Photographysm} className='sm:block md:hidden xl:hidden' />  
                <div className='flex flex-col md:gap-[10px]'>
                  <p className='sm:font-semibold sm:text-[14.5px] leading-[24px] font-Montserrat
                                       md:font-semibold md:text-[21px] md:leading-[33px]'>Photography</p>
                  <p className='sm:font-normal sm:text-[14px] leading-[25px] font-Montserrat
                                       md:font-normal md:text-[20px] md:leading-[25px]'>Portraits</p>
                </div>
            </li>
          </ul>
        </div>

        <div className='sm:w-[290px] sm:h-[310px] sm:mt-[49px] mx-auto my-0 flex flex-col
                        md:w-[714px] md:h-[428px] md:mt-[81px]
                        xl:w-[540px] xl:mt-[84px]'>
          <h3 className='sm:font-semibold sm:text-[20.5px] leading-[30px] font-Montserrat
                         md:font-bold md:text-[25.2px]'>Education & Experience</h3>
             <ul className='sm:mt-[27px] sm:gap-[12px] flex flex-col
                            md:mt-[50px] md:gap-7'>
                <li className='sm:gap-1 sm:h-[83px] border-b-[1px] border-borderColor flex flex-row 
                               md:gap-4 md:h-[97px]'>
                  <h4 className='sm:w-[120px] sm:font-normal sm:text-[14px] leading-[25px] font-Montserrat
                                 md:w-[152px] md:h-[30px] md:text-[20px]' >2008 - Present</h4>
                    <div className='sm:w-[166px]
                                    md:w-[280px]'>
                      <h3 className='sm:font-semibold sm:text-[14.4px] sm:leading-[23px] font-Montserrat
                                     md:font-semibold md:text-[20.5px]'>Middle Frontend developer</h3>
                      <p className='sm:font-normal sm:text-[14px] sm:leading-[33px] font-Montserrat
                                    md:font-normal md:text-[20px] md:mt-3'>Ozon</p>
                    </div>
                </li>
                <li className='sm:gap-1 sm:h-[83px] flex flex-row border-b-[1px] border-borderColor
                               md:gap-4 md:h-[96px]'>
                  <h4 className='sm:w-[120px] sm:font-normal sm:text-[14px] leading-[25px] font-Montserrat
                                 md:w-[152px] md:h-[30px] md:text-[20px]'>2006 - 2007</h4>
                    <div className='sm:w-[166px]
                                    md:w-[324px]'>
                      <h3 className='sm:hidden md:block xl:block sm:font-semibold sm:text-[14.4px] sm:leading-[23px] font-Montserrat
                                                                md:font-semibold md:text-[20.5px]'>Frontend development courses</h3>
                      <p className='sm:hidden md:block xl:block sm:font-normal sm:text-[14px] sm:leading-[33px] font-Montserrat
                                                               md:font-normal md:text-[20px] md:mt-[11px]'>Stepik</p>

                      <h3 className='sm:block md:hidden xl:hidden sm:font-semibold sm:text-[14.4px] sm:leading-[23px] font-Montserrat'>Junior Frontend developer</h3>
                      <p className='sm:block md:hidden xl:hidden sm:font-normal sm:text-[14px] sm:leading-[33px] font-Montserrat'>Facebook</p>
                    </div>
                </li>
                <li className='sm:gap-1 sm:h-[63px] flex flex-row border-b-[1px] border-borderColor md:border-none
                               md:gap-4'>
                  <h4 className='sm:w-[120px] sm:font-normal sm:text-[14px] leading-[25px] font-Montserrat
                                 md:w-[152px] md:h-[30px] md:text-[20px]'>2000 - 2005</h4>
                    <div className='sm:w-[166px]
                                    md:w-[331px]'>                     
                      <h3 className='sm:font-semibold sm:text-[14.4px] sm:leading-[24px] font-Montserrat
                                     md:font-semibold md:text-[20.5px]'>Frontend developer</h3>
                      <p className='sm:block md:hidden xl:hidden sm:font-normal sm:text-[14px] sm:leading-[36px] font-Montserrat'>Stanford University</p>
                      <p className='sm:hidden md:block xl:block sm:font-normal sm:text-[14px] sm:leading-[36px] font-Montserrat
                                    md:font-normal md:text-[20px] md:mt-2'>Saint Petersburg State University</p>
                    </div>
                </li>
              </ul>

              <div className='flex sm:block md:hidden xl:hidden'>
                  <button className='bg-buttonAndLine hover:bg-hoverButton sm:w-[139px] sm:h-[39px] sm:mt-[49px] sm:ml-0 sm:pr-6 rounded-[50px]
                  focus:bg-buttonAndLine focus:border-solid focus:border-activeButton border-[3px] text-buttontext'>
                                                          Get in touch
                  </button>
                  <img src={Vector} className='relative sm:top-[-27px] sm:left-[108px]'/>  
              </div>
        </div>
      </div>  
    </div>
  )
}


