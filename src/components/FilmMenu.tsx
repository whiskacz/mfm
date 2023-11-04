import React from 'react'
import '../mainCSS/mainCSS.css'

export const FilmMenu = () => {
  return (
    <main className='mainFilmWrapper'>
        <div>
          <label htmlFor="filmSearch">Enter film name</label>  
          <input type="text" id='filmSearch' />
        </div>

    </main>
  )
}
