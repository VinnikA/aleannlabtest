import { useState } from 'react'

export const Pagination = () => {

  const pages = 18

  const [activePage, setActivePage] = useState(1)

  const getPages = (n: number) => {
    if(activePage <= 4) return [1,2,3,4,5,'...',n] 
    if(activePage >= n-3) return [1,'...',n-4, n-3, n-2, n-1, n] 
    return [1, '...', activePage-1, activePage, activePage+1, '...', n]
  }

  const arr = getPages(pages);

  const currentStyle = (item: number | string) => 
    `flex items-center justify-center w-6 h-full font-bold cursor-pointer border-b-2 border-t-2 border-white md:w-8 md:text-xl${item === activePage ? ' text-dark border-b-dark' : ' text-light'}`

  const handleClick = (item: number) => setActivePage(item)

  const back = () => {
    if(activePage > 1) setActivePage(activePage-1)
  }

  const forward = () => {
    if(activePage < pages) setActivePage(activePage+1)
  }

  return (
    <div className='flex justify-center items-center gap-[6px] md:gap-2 h-10 mt-6 md:mt-12 mb-4 md:mb-12 mx-auto shadow rounded-lg bg-white md:max-w-[515px]'>

      <div 
        className='hidden w-12 cursor-pointer md:flex justify-center items-center text-light'
        onClick={back}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>

      <div className='w-px h-5 mr-10 md:mr-12 bg-bgdark'></div>

      {arr.map((item, index) => {
        if(typeof item === 'number') {
          return (
          <div 
            key={`${item}-${index}`} 
            className={currentStyle(item)} 
            onClick={() => handleClick(item)} 
          >
            {item}
          </div>
          )
        }
        return (
          <div 
            key={`${item}-${index}`} 
            className='flex justify-center items-end box-border w-6 h-full font-bold text-light md:w-8 md:text-xl'
          >
            {item}
          </div>
        )
      })}

      <div className='w-px h-5 ml-10 md:ml-12 bg-bgdark'></div>

      <div 
        className='hidden w-12 cursor-pointer md:flex justify-center items-center text-light'
        onClick={forward}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>

    </div>
  )
}
