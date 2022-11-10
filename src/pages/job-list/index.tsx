import { ListItem } from "../../components/list-item"
import { Pagination } from "../../components/pagination"
import { useGetJobsQuery } from "../../store/jobs/jobs.api"

export const JobList = () => {

  const { isLoading, isError, data } = useGetJobsQuery(null)

  const item = data ? data[0].name : 'undefind'

  return (
    <div className='container mx-auto p-2 max-w-[1416px]'>
      {isLoading && <p className="text-center">Loadind...</p>}
      {isError && <p className="text-red-600 text-center">Some error occurred!</p>}
      {data?.map(item => (
        <ListItem {...item} />
      ))}
      <Pagination />
    </div>
  )
}
