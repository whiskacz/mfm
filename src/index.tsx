import { createRoot } from 'react-dom/client';
import { LoginPage } from './components/LoginPage';
import './mainCSS/mainCSS.css'



const Mfm = () => {
    return(
        <main className='mainWrapper'>
            
        <LoginPage />
        </main>
    )
}

const root = createRoot(document.getElementById('root')!);
root.render(<Mfm />)