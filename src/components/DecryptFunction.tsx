
import React,{ useState } from 'react'
import { Ean13 } from '../interfaces/interfaces'


const DecryptFunction: React.FC<Ean13> = () => {

    const JsBarcode = require('jsbarcode');

// Przykładowy kod EAN-13
const ean13Code = '590123412345';

// Konwersja kodu EAN-13 na tekst
try {
  const barcode = new JsBarcode(ean13Code, { format: 'EAN13' });
  const decodedText = barcode.getText();
  console.log(`Dekodowany tekst: ${decodedText}`);
} catch (error) {
  console.error('Błąd dekodowania kodu kreskowego:', error);
}


    // const[code,setCode] = useState<number | null>()

    // const handleCode = (data: Result| number | null) => {
    //     if(data){
    //         setCode(data)
        
    //     }
    // }

    // const handleError = (error:any) => {
    //     console.error(error)
    // }


  return (
    <>
    
        
  
    <div></div>
    </>
  )
}

export default DecryptFunction