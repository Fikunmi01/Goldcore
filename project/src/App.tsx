
import { Route, Routes } from 'react-router'
import './App.css'
import { Homepage } from './pages/Hompeage'
import { BlogDetails } from './components/blog/[id]/blog-details'
import { Blog } from './components/blog'
import { RolesWeStaff } from './pages/roles-we-staff'
import { JobSeeker } from './pages/job-seekers'
import { AboutUs } from './pages/about-us'
import { CaseStudy } from './pages/case-study'
import { FAQPage } from './pages/faq'
import { ContactUsPage } from './pages/contact-us'

function App() {

  return (
    <Routes>

      <Route path='roles-we-staff' element={<RolesWeStaff />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='case-study' element={<CaseStudy />} />
      <Route path='faq' element={<FAQPage />} />
      <Route path='contact-us' element={<ContactUsPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/job-seeker" element={<JobSeeker />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="" element={<Homepage />} />
    </Routes>
  )

}

export default App
