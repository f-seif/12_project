import React, {useState} from 'react';


import SearchNav from './SearchNav';
import MovieList from './MovieList';


function Home() {

  return (
    <>
    <div>
      <SearchNav />
      <MovieList />
    </div>
    </>
  );
}

export default Home;
