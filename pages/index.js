import React, { useState, useEffect } from "react";

import Head from "../components/elements/Header/Header";
import HeroImage from "../components/elements/HeroImage/HeroImage";
import NavBar from "../components/elements/Navbar/Navbar";
import SearchBar from "../components/elements/SearchBar/SearchBar";
import Grid from "../components/elements/Grid/Grid";
import MovieThumb from "../components/elements/MovieThumb/MovieThumb";
import LoadMoreBtn from "../components/elements/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../components/elements/Spinner/Spinner";
import ComingSoon from "../components/elements/ComingSoon/ComingSoon";
import "../static/css/index.css";

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";
import queryString from "query-string";
import fetch from "isomorphic-unfetch";

const Home = ({ resdata }) => {
  // Define Initial Values For States
  const [state, setState] = useState({
    movies: [],
    currentPage: 1,
    heroImage: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isError, setIsError] = useState(false);

  // Run Once Because of Callback Empty Array
  useEffect(() => {
    //   Call fetch Function

    fetchMovies(createEndpoint("movie/popular", "", ""));
  }, []);

  // When Search State Changed this function Will be Mounted
  useEffect(() => {
    if (!state.searchTerm) {
    }
  }, [state]);

  // create dynamic endpoint
  const createEndpoint = (type, loadMore, sTerms) => {
    return `${API_URL}${type}?api_key=${API_KEY}&language=en-US&page=${
      loadMore ? state.currentPage + 1 : ""
    }&query=${sTerms}`;
  };

  // LoadMore Function Called when load more button pressed
  const LoadMore = () => {
    setIsLoadingMore(true);

    updateItems("", true);
  };

  const updateItems = (searchTerms, LoadingMore) => {
    let endpoint = "";
    const { currentPage, searchTerm } = state;
    const searchValue = searchTerms ? searchTerms : searchTerm || "";

    // Make Endpoint For Searching or Geting Home page Movies
    if (searchValue && searchValue !== "") {
      endpoint = createEndpoint("search/movie", LoadingMore, searchValue);
    } else {
      endpoint = createEndpoint("movie/popular", LoadingMore, "");
    }
    // Call fetch Function
    fetchMovies(endpoint);
  };

  const fetchMovies = async endPoint => {
    const { searchTerm } = state;
    //Show Spinner For Loading
    setIsLoading(true);

    // Using queryString to get Url Params

    const params = queryString.parse(endPoint);
    //in first Search movies state get empty and page set to 1

    if (!searchTerm && params.query) {
      setState(prev => ({
        ...prev,
        movies: [],
        currentPage: 1
      }));
    }
    // if search query exist we set in state

    if (params.query) {
      setState(prev => ({
        ...prev,
        searchTerm: params.query
      }));
    }
    //in first Home Load movies state get empty and page set to 1
    if (!params.page) {
      setState(prev => ({
        ...prev,
        movies: [],
        currentPage: 1
      }));
    }

    try {
      const res = await (await fetch(endPoint)).json();
      // set fetched data to states
      setState(prev => ({
        ...prev,
        movies: [...prev.movies, ...res.results],
        heroImage: prev.heroImage || res.results[0],
        currentPage: res.page,
        totalPages: res.total_pages
      }));
      // hide spinner when finished
      setIsLoading(false);
      setLoadMore(false);
    } catch (err) {
      setIsError(true);
    }
  };

  const { movies, heroImage, currentPage, totalPages, searchTerm } = state;

  // Define Variables for Server Side Rendering Seo
  let { moviesdb, firstHero } = [];
  let firstLoad = true;
  if (movies.length < 1) {
    moviesdb = resdata.results;
  } else {
    moviesdb = movies;
    firstLoad = false;
  }

  if (heroImage.length < 1) {
    firstHero = resdata.results[0];
  } else {
    firstHero = heroImage;
  }

  return (
    <div className="home">
      <Head title="home" />
     {!searchTerm && (
      <NavBar />
      )}

      {firstHero && !searchTerm ? (
        <div>
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${firstHero.backdrop_path}`}
            title={firstHero.original_title}
            text={firstHero.overview}
            items={moviesdb.slice(0, 5)}
          />
        </div>
      ) : null}

      <SearchBar callback={updateItems} />
      <Grid
        header={
          searchTerm ? `Search Results For "${searchTerm} "` : "Popular Movies"
        }
        loading={isLoading}
      >
        {moviesdb.map((element, index) => {
          return (
            <MovieThumb
              key={index}
              clickable={true}
              image={
                element.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                  : "./static/images/no_image.jpg"
              }
              movieId={element.id}
              movieName={element.original_title}
              searchTerm={searchTerm}
            />
          );
        })}
      </Grid>

      {isLoading ? <Spinner /> : null}

      {firstLoad ? <LoadMoreBtn text="Load More" onClick={LoadMore} /> : null}

      {currentPage < totalPages && !isLoading ? (
        <LoadMoreBtn text="Load More" onClick={LoadMore} />
      ) : null}
      <ComingSoon />
    </div>
  );
};
Home.getInitialProps = async ({ query }) => {
  let endPoint = "";
  !query.query
    ? (endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`)
    : (endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query.query}`);

  try {
    const resdata = await (await fetch(endPoint)).json();

    return { resdata };
  } catch (err) {
    console.log(err);
  }
};

export default Home;
