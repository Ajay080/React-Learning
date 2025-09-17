import './App.css'
import {useEffect} from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import { useThemeContext} from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const { theme, themeSetter } = useThemeContext();

  useEffect(() => {
    console.log("Theme changed to:", theme);
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }, [theme])

  return (
    <>
      <ThemeSwitcher />
      <Card />
      <Footer />
    </>
  )
}

export default App


