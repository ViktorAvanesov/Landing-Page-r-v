/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'buttonAndLine':'#7E3AF2',
      'buttontext':'#FFFFFF',
      'borderColor':'#E5E7EB',
      'star' : '#E02424',
      'footertext': '#696969',
      'borderred':'#E02424',
      'hoverButton': '#6C2BD9',
      'activeButton' : '#CABFFD',
      'inputActive' :'#7E3AF2',
      'buttonDisable' : ' #E5E7EB',
      'textDisable' : '#696969'
       
    },
    
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif']
    },

    screens: {
      'xl' : '1280px',
      'md' : '792px',
      'sm' : '320px'
    },
    extend: {
      backgroundImage: {
        'Bgsm': "url('./images/backgroundsm.jpg')",
        'Bgmd': "url('./images/Backgroundmd.jpg')",
        'Bgxl': "url('./images/Backgroundxl.jpg')" 
      }
    },
  },
  plugins: [],
}

