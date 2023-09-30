import { createRoot } from 'react-dom/client';
import DecryptFunction from './components/DecryptFunction';


const Mfm = () => {
    return(
        <>
        <div>
        mfm
        </div>
        <DecryptFunction />
        </>
    )
}

const root = createRoot(document.getElementById('root')!);
root.render(<Mfm />)