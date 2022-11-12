import { useState } from "react"
import { ListItem } from "../../components/list-item"
import { Pagination } from "../../components/pagination"
import { useGetJobsQuery } from "../../store/jobs/jobs.api"

export const JobList = () => {

  const [activePage, setActivePage] = useState(1)

  const { isLoading, isError, data } = useGetJobsQuery(null)

  const changePage = (num: number) => {
    setActivePage(num)
  } 

  const pages = data ? Math.ceil(data?.length / 2) : 0

  const onePageData = data?.slice(activePage*2-2, activePage*2)

  return (
    <div className='container mx-auto p-2 max-w-[1416px]'>
      {isLoading && <p className="text-center">Loadind...</p>}
      {isError && <p className="text-red-600 text-center">Some error occurred!</p>}
      {onePageData?.map(item => (
        <ListItem {...item} />
      ))}
      {pages > 0 && <Pagination changePage={changePage} activePage={activePage}  allPages={pages}/>}
    </div>
  )
}
