import { useState } from 'react'
import { createRoot } from 'react-dom/client';
import { LoginPage } from './components/LoginPage';
import { LoginAdd } from './components/LoginAdd';
import { LoginContextProvider } from './context/LoginContext';
import { LoginType } from './interfaces/interfaces';
import { loginData } from './data/data';
import axios from 'axios';
import './mainCSS/mainCSS.css'

 

const Mfm = () => {


    const [loginAddShow, setloginAddShow] = useState(false)
    const [data,setData] = useState<LoginType[]>(loginData)

    const dataUpdate = (newState: LoginType[]) => {
        setData(newState)
        const sendData = () => {
            const url = './data/data2.json'
             axios.post(url, { username: 'example', password: 'password123' })
           .then((response) => {
             // Obsługa odpowiedzi od serwera po zalogowaniu
           })
           .catch((error) => {
             // Obsługa błędów
           });
           }
           sendData()
    }

    const handleLoginAdd = () => {
        setloginAddShow(!loginAddShow)
    }


    return(
        <main className='mainWrapper'>
        <LoginContextProvider>
            <LoginPage 
            handleLoginAdd={handleLoginAdd} 
            
            />
            
            {loginAddShow && <LoginAdd 
            handleLoginAdd={handleLoginAdd} 
            dataUpdate={dataUpdate}
            />}
        </LoginContextProvider>    
        </main>
    )
}

const root = createRoot(document.getElementById('root')!);
root.render(<Mfm />)