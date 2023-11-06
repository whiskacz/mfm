import React, { useEffect, useRef, useState} from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LoginType, LoginAddProps } from '../interfaces/interfaces';
import axios from 'axios';


export const LoginAdd: React.FC<LoginAddProps> = ( {handleLoginAdd, dataUpdate} ) => {


    const handleCreateUser = () => {

      async function sendData() {
        try {
          const response = await axios.post('https://blasiak.info/sharedData/data2.json', newUser, {
            headers: {
              'Content-Type': 'application/json', // Określamy, że przesyłamy dane w formacie JSON
            },
          });
          console.log('Dane zostały przesłane pomyślnie.');
        } catch (error) {
          console.error('Błąd:', error);
        }
      }
      
      sendData();
      
    }
  
    const[newUser, setNewUser] = useState<LoginType>({
        username:'',
        password:'',
    })
    const {username, password} = newUser 
    const focusPlaceHolder = useRef<HTMLInputElement | null>(null)

    useEffect(()=>{
    focusPlaceHolder.current?.focus()
    },[])
 
    
   
    return (
    <main className='loginAddWrapper'>
        <form className='loginAddWindow' onSubmit={(e)=>e.preventDefault()}>
        <span className='loginAddTitle'>
                Create account
            </span>
            <input placeholder="enter username" value={username} onChange={(e)=>setNewUser({...newUser,username: e.target.value})} type="text" className='inputBox' ref={focusPlaceHolder} />
            <div className='passwordContainer'>
                <input placeholder="enter password"  type="text" className='inputBox'  />
                <input placeholder="confrim password" value={password} onChange={(e)=>setNewUser({...newUser,password: e.target.value})} type="text" className='inputBox' />
            </div>
            <button className='loginAddButton' onClick={handleCreateUser}>Submit</button>
        <AiOutlineCloseCircle className='loginAddIco' onClick={handleLoginAdd} />
        </form>
    </main>
  )
}
