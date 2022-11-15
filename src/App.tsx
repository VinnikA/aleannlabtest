import { JobList } from './pages/job-list'
import { JobDetails } from './pages/job-details'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App font-proxima bg-bgdark min-h-screen">
      <Routes>
        <Route path='/' element={<JobList />} />
        <Route path='details/:id' element={<JobDetails />} />
      </Routes>
    </div>
  )
}

export default App
