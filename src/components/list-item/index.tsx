import { posted } from "../../helpers"

export const ListItem = (props: any) => {
  console.log(props)
  const {title, address, name, pictures, createdAt} = props
  return (
    <div className='w-full flex flex-col md:flex-row h-[206px] md:h-[164px] bg-bglight md:bg-white mb-2 p-4 md:py-6 md:px-4 rounded-lg shadow'>

      <div className="md:order-2 text-light md:flex md:flex-col md:justify-between md:min-w-[160px]">
        <div className='hidden md:flex md:justify-end mr-2 mt-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </div>
        <p className="text-end font-light text-sm md:text-base">
          Posted {posted(createdAt)} days ago
        </p>
      </div>

      <div className="flex flex-grow md:order-1">
        <div className='w-[66px] md:w-[85px] min-w-[66px] md:min-w-[85px] h-[66px] md:h-[85px] mr-4 md:mr-6 object-cover overflow-hidden rounded-full'>
          <img src={pictures[0]} alt={name} />
        </div>
        <div className="w-3/4 flex flex-col justify-between">
          <div>
            <h2 className='text-lg text-dark mb-1 md:text-xl md:font-bold'>{name}</h2>
            <p className='text-light'>{title}</p>
          </div>
          <div className='flex gap-2 text-light'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <p>{address}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
