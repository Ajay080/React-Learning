import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");
  let inputRef= useRef(null);

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSpecialChars) chars += "!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(password);
    return password;
  }, [length, includeNumbers, includeSpecialChars]);

  const copy=()=>{
    inputRef.current.select();
    window.navigator.clipboard.writeText(inputRef.current.value);
  }

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="bg-black text-white flex flex-col justify-center items-center">
      <h2 className="text-white"> Password Generator</h2>
      <div className="bg-gray-800 p-4 rounded mb-4">
        <input ref={inputRef} value={password} readOnly /><button onClick={copy} className="bg-white rounded p-2 text-black">Copy</button>
      </div>
      <input type="range" onChange={((e)=>setLength(e.target.value))} id="slider" min={0} max={20} step={1} />
      <label htmlFor="number">Include Number</label><input type="checkbox" id="number" onChange={(e)=>setIncludeNumbers(e.target.checked)} checked={includeNumbers} />
      <label htmlFor="specialCharacter">Include Special Characters</label><input type='checkbox' id='specialCharacter' onChange={(e)=>setIncludeSpecialChars(e.target.checked)} checked={includeSpecialChars} />

    </div>
  )
}

export default App
