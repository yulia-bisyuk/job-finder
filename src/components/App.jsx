import React, { useState } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('./Layout/Layout'));
const JobBoard = lazy(() => import('../pages/JobBoard/JobBoardPage'));
const JobDetails = lazy(() => import('../pages/JobDetails/JobDetailsPage'));
export const JobDetailsContext = React.createContext();

export const App = () => {
  const [category, setCategory] = useState('');
  const [jobId, setJobId] = useState(localStorage.getItem('id'));
  const value = {
    category,
    setCategory,
    jobId,
    setJobId,
  };

  return (
    <Suspense fallback={null}>
      <JobDetailsContext.Provider value={value}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<JobBoard />} />
            <Route path="details" element={<JobDetails />} />
          </Routes>
        </Layout>
      </JobDetailsContext.Provider>
    </Suspense>
  );
};
