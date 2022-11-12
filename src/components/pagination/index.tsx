import { IPaginationProps } from "../../models/models"
import { getPages } from "../../helpers"

export const Pagination = (props: IPaginationProps) => {

  const { allPages, activePage, changePage } = props

  const pages = getPages(activePage, allPages);

  const currentStyle = (item: number | string) => 
    `flex items-center justify-center w-6 h-full font-bold cursor-pointer border-b-2 border-t-2 border-white md:w-8 md:text-xl${item === activePage ? ' text-dark border-b-dark' : ' text-light'}`

  const handleClick = (item: number) => changePage(item)

  const back = () => {
    if(activePage > 1) changePage(activePage-1)
  }

  const forward = () => {
    if(activePage < allPages) changePage(activePage+1)
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

      {pages.map((item, index) => {
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
