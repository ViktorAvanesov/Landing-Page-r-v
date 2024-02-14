import  {  useState } from 'react'
import  Vectorname  from '../../images/Vectorname.svg'
import  Mail  from '../../images/Mail.svg'
import  VectorIcon  from '../../images/Vector.svg'
import  Vectorerror  from '../../images/Vectorerror.svg'
import  Mailnormal  from '../../images/Mailnormal.svg'
import  VectorDisable  from '../../images/VectorDisable.svg'

export const Getintouch = () => {

  const [emailError, setEmailError] = useState(false)
  const [emailActive, setEmailActive] = useState(false)
  const [emailValidation, setEmailValidation] =useState (false)

  const emailHandler = (e) => {
    const regex = /^\S+@\S+\.\S+$/;
    setEmailValidation(regex.test(String(e.target.value).toLowerCase()));
    setEmailActive(true);
  }

  const blurHandler = () => {
    setEmailError(!emailValidation);
  }


  return (
    <section className='sm:w-80 sm:h-[753px] sm:bg-Bgsm mx-auto my-0 pt-[1px]
                        md:w-[792px] md:h-[708px] md:bg-Bgmd
                        xl:w-[1280px] xl:h-[708px] xl:bg-Bgxl'>
        <div className='sm:w-[300px] sm:h-[625px] sm:mt-16 sm:rounded-2xl mx-auto my-0 bg-buttontext pt-[1px]
                        md:w-[712px] md:h-[567px] md:mt-[69px]
                        xl:w-[763px]'>
                        
          <form action="" method="get" className='sm:w-[290px] sm:h-[529px] sm:mt-[47px] sm:flex sm:flex-col mx-auto
                                                  md:w-[648px] md:h-[472px] 
                                                  xl:w-[668px]'>
            <h3 className='sm:font-semibold sm:text-[21px] sm:leading-[28px] sm:pl-[15px] font-Montserrat
                           md:font-bold md:text-[34px] md:mt-[10px] md:pl-0'>Let’s discuss your project</h3>
                <div className='sm:flex sm:flex-col sm:mt-[37px] sm:ml-[16px]
                                md:flex md:flex-row md:ml-0 md:mt-[59px] md:gap-[23px]
                                xl:gap-5'>
                    <div className='sm:flex sm:flex-col'>
                        <label className='sm:font-semibold sm:text-[14.5px] sm:leading-[22px] font-Montserrat
                                          md:font-semibold md:text-[16.5px]'>Your full name <span className='text-star'>*</span></label>
                            <div className='relative'>
                                <input type='text' name='name' id='name' className='sm:w-[258px] sm:h-[50px] sm:border-[1px] sm:rounded-2xl sm:mt-[7px] sm:pl-[53px] border-borderColor
                                                                                    md:w-[312px] md:h-[55px] md:mt-[9px] md:font-Montserrat md:font-normal
                                                                                    xl:w-[324px]
                                                                                    hover:border-buttonAndLine active:border-inputActive active:border-[2px] active:border-solid focus:border-inputActive outline-none' placeholder='Name Surname'/>
                                <img src={Vectorname} className='sm:top-[22px] sm:left-[23px] absolute
                                                                 md:top-[25px]' />                                                    
                                
                            </div>  
                    </div>
                    <div className='sm:flex sm:flex-col sm:mt-[23px]
                                    md:mt-0'>
                         <label className='sm:font-semibold sm:text-[14.5px] sm:leading-[23px] font-Montserrat
                                           md:font-semibold md:text-[16.5px]'>Your email<span className='text-star'> *</span></label>
                            <div className='relative'>
                                    {(emailActive && !emailError) && <img src={Mailnormal} className='absolute top-[25px] left-[23px]'/>}
                                    {(!emailActive && !emailError) && <img src={Mail} className='absolute top-[25px] left-[23px] block'/> }
                                    {(emailError) && <img src={Vectorerror}  className='absolute top-[27px] left-[23px] '/>}
                                <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type='text' name='email' id='email' className= {(emailError ? 'border-borderred '  : '')  +  'focus:border-inputActive outline-none sm:w-[258px] sm:h-[50px] sm:border-[1px] sm:rounded-2xl sm:mt-[7px] sm:pl-[53px] border-borderColor md:w-[312px] md:h-[55px] md:mt-[9px] md:font-Montserrat md:font-normal xl:w-[324px] hover:border-buttonAndLine'} placeholder='name@example.com'/>
                                    {(emailError) && <p className='text-[10px]' style={{color:'red'}}>Please fill this mandatory field</p>}
                                
                            </div>  
                    </div>
                </div>
                <div className='sm:flex sm:flex-col sm:w-[258px] sm:h-[242px] sm:mt-[27px] mx-auto my-0
                                md:w-[648px] md:h-[252px] md:mt-[11px]
                                xl:mx-0'>
                     <h3 className='sm:font-semibold sm:text-[14.5px] leading-6 font-Montserrat
                                    md:font-semibold md:text-[16.5px]'>Tell me about your project</h3>
                        <textarea name='review' id='review' className='sm:w-[258px] sm:h-[122px] sm:border-[1px] sm:mt-2 sm:rounded-2xl sm:font-normal font-Montserrat sm:pt-[10px] sm:pl-[18px] sm:pr-[18px] sm:text-[14px] sm:leading-6 border-borderColor resize-none
                                                                       md:w-[648px] md:h-[122px] md:text-[16px] md:pt-3
                                                                       xl:w-[667px]
                                                                       hover:border-buttonAndLine focus:border-inputActive outline-none' placeholder='Add here a general description of your idea and target aim'></textarea>
                            <button disabled = {!emailActive || !emailValidation} className='disabled:bg-buttonDisable disabled:text-textDisable disabled:border-none disabled:cursor-default sm:block md:hidden xl:hidden bg-buttonAndLine hover:bg-hoverButton sm:w-[139px] sm:h-[39px] sm:mt-[36px] sm:ml-0 sm:pr-6 sm:pt-2 rounded-[50px] text-buttontext focus:bg-buttonAndLine focus:border-solid focus:border-activeButton border-[3px]'>Get in touch
                            {(!emailActive || !emailValidation) && <img src={VectorDisable} className=' sm:block md:hidden xl:hidden sm:relative sm:left-[108px] sm:top-[-19px]' /> }   
                            {( emailValidation) && <img src={VectorIcon} className='sm:block md:hidden xl:hidden sm:relative sm:left-[108px] sm:top-[-22px]'/>}
                            </button>
                            <button disabled = {!emailActive || !emailValidation}  className= 'disabled:bg-buttonDisable disabled:text-textDisable disabled:border-none disabled:cursor-default sm:hidden md:block xl:block bg-buttonAndLine hover:bg-hoverButton  md:w-[147px] md:h-[50px] md:mt-[49px] md:ml-0 md:pr-[36px] rounded-[50px] font-Montserrat md:font-semibold md:text-[16.5px] md:pt-[11px]  text-buttontext cursor-pointer  focus:bg-buttonAndLine focus:border-solid focus:border-activeButton border-[3px]'>
                                                          submit
                            {(!emailActive || !emailValidation) && <img src={VectorDisable} className='sm:hidden md:block xl:block relative md:top-[-19px] md:left-[99px]' />} 
                             {( emailValidation) && <img src={VectorIcon} className='sm:hidden md:block xl:block relative md:top-[-22px] md:left-[99px]'/>}
                            </button>
                </div>            
           </form>
        </div>
    </section>    
       
  )
}


