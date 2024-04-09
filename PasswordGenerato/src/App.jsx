import { useCallback, useEffect, useState ,useRef} from 'react'

import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumber]=useState(false);
  const [charAllowed,setChar]=useState(false);
  const [password,setPassword]=useState("");
  const passwordRef=useRef(null);

  let passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopstuvwxyz";
    if(numberAllowed) str+="123456789";
    if(charAllowed) str+="@~#$^&*%?<>?+=-_!/";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);
    

  },[length,numberAllowed,charAllowed,setPassword]);
const copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,length);
  window.navigator.clipboard.writeText(password)

},[password])
  
useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
    <>
    <div className="w-full max-w-md mx-auto text-white  rounded-lg  bg-gray-400 p-5 mt-3">
      <h1 className='text-center font-bold mb-2 text-3xl text-slate-950'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3 text-black' placeholder='Password'
        readOnly ref={passwordRef} />
        <button className='p-3 bg-blue-500'onClick={copyPasswordToClipBoard} >COPY</button>
      </div>
      <div className='flex font-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range" min={8} max={30} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>length: {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={()=> setNumber((prev)=>!prev)}/>
          <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox" id="charInput" defaultChecked={charAllowed} onChange={()=>setChar((prev)=>!prev)}/>
          <label htmlFor='charInput'>Charecter</label>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
