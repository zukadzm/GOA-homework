import React from 'react';

function App() {
  return (
    <>
      <div className=' text-gray-900 flex justify-center'>
      
      <h1 className='text-4xl font-bold text-blue-400'>My portfolio</h1>

        <img src='/vite-project/src/assets/image' className='rounded-full w-36 h-36 border-4 border-blue-400 shadow-lg'/>

        <div className=' text-center max-w-xl space-y-3'>
          <p><span className='font-semibold text-blue-300'>სახელი: </span>ზუკა</p>
          <p><span className='font-semibold text-blue-300'>ასაკი: </span>15</p>
          <p><span className='font-semibold text-blue-300'>პროგრამირების ენები: </span>Html, javascript, css, Python</p>
          <p><span className='font-semibold text-blue-300'>ვსწავლობ: </span>Goa-oriented-academy</p>
        </div>

      </div>

    </>
  )
}

//  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 flex flex-col items-center gap-6">
    //   {/* სახელი */}
    //   <h1 className="text-4xl font-bold text-blue-400">Ჩემი პორტფოლიო</h1>

    //   {/* ფოტო */}
    //   <img
    //     src="https://via.placeholder.com/150" // აქ ჩასვი შენი ფოტო ან ლინკი
    //     alt="Ჩემი ფოტო"
    //     className="rounded-full w-36 h-36 border-4 border-blue-400 shadow-lg"
    //   />

    //   {/* ინფო ჩემზე */}
    //   <div className="text-center max-w-xl space-y-3">
    //     <p><span className="font-semibold text-blue-300">Სახელი:</span> შენი სახელი</p>
    //     <p><span className="font-semibold text-blue-300">Წლები:</span> 17</p>
    //     <p><span className="font-semibold text-blue-300">Პროგრამირების ენები:</span> HTML, CSS, JavaScript, Python</p>
    //     <p><span className="font-semibold text-blue-300">Ვსწავლობ:</span> React, Tailwind, Node.js</p>
    //     <p><span className="font-semibold text-blue-300">Მოწოდება:</span> მინდა დავიწყო კარიერა Google-ში 😎</p>
    //   </div>

    //   {/* სოციალური ლინკები */}
    //   <div className="flex gap-4">
    //     <a href="https://github.com/შენიusername" target="_blank" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition">GitHub</a>
    //     <a href="https://linkedin.com/in/შენიusername" target="_blank" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition">LinkedIn</a>
    //     <a href="https://instagram.com/შენიusername" target="_blank" className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-400 transition">Instagram</a>
    //   </div>
    // </div>

export default App
