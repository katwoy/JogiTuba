import React from 'react';
import SearchForm from './SearchForm';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const Main = () => {
  return (
    <main className="page-main">
      <div className="main-container">
        <SearchForm />
        <VideoDetail />
        <VideoList />
      </div>
    </main>
  )
}

export default Main;