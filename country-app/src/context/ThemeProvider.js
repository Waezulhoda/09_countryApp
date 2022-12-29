import React,{createContext,useState,useEffect} from 'react'

const ThemeContext=createContext();


function ThemeProvider({children}) {
  const [theme,setTheme]=useState('light')

  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{theme,handleThemeSwitch}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider,ThemeContext}