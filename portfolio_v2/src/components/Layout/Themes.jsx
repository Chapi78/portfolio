import { useState } from 'react'


function Themes() {

   const [darkMode, setDarkMode] = useState(false);
   console.log(mode);
   console.log(saison);
   return (
      <div className='flex flex-col'>
         {mode === 'dark' ? (
            <FaSun 
               onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
               className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
            />
         ) : (
            <FaMoon 
               onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
               className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"               
            />
         )}

         <button id='themeDd'
            onClick={() => setSaisonOpen((prev) => !prev)}
            className=''
         >
         Saison
         </button>
         
         {saisonOpen && (
         <div className='bg-blue-400 absolute flex flex-col rounded-lg p-2'>
            {Saison.map((item, i) => (
               <div>
                  <button onClick={() => setSaison(item.saison)}>{item.saison}</button>
               </div>
            ))}
         </div>
         )}
      </div>
   )
}

export default Themes