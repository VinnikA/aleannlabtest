import { useParams } from "react-router-dom"
import { DetailsHeader } from "../../components/details-header"
import { useGetJobsQuery } from "../../store/jobs/jobs.api"

export const JobDetails = () => {
  const { id } = useParams()
  const { data } = useGetJobsQuery(null)
  const item = data?.filter(item => item.id === id)[0]
  return (
    <div className='container px-4 mx-auto py-7 md:py-14 flex md:gap-16 flex-col md:flex-row justify-between'>
      <div className='md:w-2/3'>
        <DetailsHeader id={id} />
      </div>
      <div className='md:w-1/3 border border-red-300'>Map</div>
    </div>
  )
}
