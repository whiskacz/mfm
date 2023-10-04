import { createRoot } from 'react-dom/client';
import { LoginPage } from './components/LoginPage';
import './mainCSS/mainCSS.css'
import { LoginContextProvider } from './context/LoginContext';


const Mfm = () => {
    return(
        <main className='mainWrapper'>
        <LoginContextProvider>
            <LoginPage />
        </LoginContextProvider>    
        </main>
    )
}

const root = createRoot(document.getElementById('root')!);
root.render(<Mfm />)