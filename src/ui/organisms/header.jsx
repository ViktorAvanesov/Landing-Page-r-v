
import Logosm  from '../../images/mobile/Logosm.svg'
import  Menu  from '../../images/mobile/Menu.svg'
export const Header = () => {
  return (
    <div >
        <header className='sm:w-80 sm:h-16 sm:border-b-[1px] sm:my-0 sm:mx-auto sm:flex sm:justify-between sm:pl-4 sm:pr-[10px] sm:py-[13px]
                           md:w-[792px] md:pl-10 md:flex-row-reverse border-borderColor
                           xl:w-[1280px] xl:pl-[85px] xl:pr-[56px]'>
            <div className='md:flex md:w-[271px] md:pr-[31px] justify-between items-center w-60
                           sm: hidden'>
             <a href='#' className='md:font-semibold md:text-[17px] md:leading-[24px] font-Montserrat text-buttonAndLine'>Main</a>
             <a href='#' className='md:font-semibold md:text-[17px] md:leading-[24px] font-Montserrat'>About</a>
             <a href='#' className='md:font-semibold md:text-[16px] md:leading-[24px] font-Montserrat'>Get in touch</a>
           </div>               
            <img src={Logosm} /> 
            <button type='button'className='sm:block sm:w-8 sm:h-8 md:hidden xl:hidden'><img src={Menu} /></button>
        </header>
    </div>
  )
}


