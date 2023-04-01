import React,{useState} from 'react'
import ThemeContext from './ThemeContext'

const ThemeState = (props) => {

    // Declaring the UseStates
  const [theme, settheme] = useState('light');
  // Function for the theme mode
  const mode = ()=>{
    if(theme === 'light'){
      settheme('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      settheme('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <ThemeContext.Provider value = {{mode}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeState