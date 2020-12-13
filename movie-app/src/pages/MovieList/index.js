//#region PACKAGE IMPORTS
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//#endregion

//#region MODULE IMPORTS
import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import Modal from '../../components/Modal';
import MovieCard from '../../components/MovieCard';
//#endregion

//#region CONFIG IMPORTS
import { fetchMovieList, resetMovieList } from '../../config/stores/actions';
//#endregion

//#region UTILITY IMPORTS
import { debounce } from '../../utils/helpers';
//#endregion

//#region STYLESHEET IMPORTS
import './MovieList.style.scss';
//#endregion

const MovieListPage = () => {
  //#region REDUX
  const dispatch = useDispatch();
  const movieListState = useSelector((state) => state);
  //#endregion

  //#region STATE
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [query, setQuery] = useState({
    searchValue: '',
    page: 1,
  });

  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [selectedCardImage, setSelectedCardImage] = useState(null);
  //#endregion

  //#region HANDLER
  const handleSearchChange = debounce((e) => {
    const { value } = e.target;
    setQuery({ searchValue: value, page: 1 });
  }, 500);

  const toggleModal = (image) => {
    setIsPosterModalOpen(!isPosterModalOpen);
    if (selectedCardImage) {
      setSelectedCardImage(null);
    } else {
      setSelectedCardImage(image);
    }
  };

  const handleScroll = useCallback(
    (e) => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || window.pageYOffset || 0;
      const scroll = window.innerHeight + scrollTop;
      const height = doc.offsetHeight;
      if (!movieListState.hasMore) return;
      if (isLoadingMore) return;
      if (scroll >= height) {
        setIsLoadingMore(true);
        setQuery({ searchValue: query.searchValue, page: query.page + 1 });
      }
    },
    [movieListState.hasMore, query, isLoadingMore]
  );
  //#endregion

  //#region LIFECYCLE
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    if (query.searchValue.length) {
      dispatch(fetchMovieList(query.searchValue, query.page));
      setIsLoadingMore(false);
    }
  }, [dispatch, query.searchValue, query.page]);

  useEffect(() => {
    return () => {
      dispatch(resetMovieList());
    };
  }, [dispatch]);

  //#endregion

  //#region RENDERER
  const renderPageContent = () => {
    const isMovieEmpty = !(
      movieListState.movies ||
      (movieListState.movies && movieListState.movies.length)
    );

    if (isMovieEmpty && !movieListState.isLoading) {
      return (
        <h3 className="initialContentMessage">
          Try searching with movie title (e.g: Batman)
        </h3>
      );
    }

    if (movieListState.isLoading && !isLoadingMore) {
      return (
        <div className="loadingWrapper">
          <LoadingSpinner />
          <p>Loading...</p>
        </div>
      );
    }

    if (movieListState.error) {
      return <h3 className="initialContentMessage">{movieListState.error}</h3>;
    }

    return (
      <>
        {movieListState.movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            onClickImage={() => toggleModal(movie.Poster)}
            filmType={movie.Type}
            image={movie.Poster}
            releasedYear={movie.Year}
            title={movie.Title}
            id={movie.imdbID}
          />
        ))}
        {movieListState.hasMore && (
          <div className="loadingWrapper">
            <LoadingSpinner />
            <p>Loading More...</p>
          </div>
        )}
      </>
    );
  };
  //#endregion

  return (
    <Layout
      onSearchChange={handleSearchChange}
      searchInputName="movie-search-input"
      searchInputPlaceholder="Search movies.."
    >
      <Modal isOpen={isPosterModalOpen} onClose={toggleModal}>
        <div
          className="selectedImage"
          style={{ backgroundImage: `url('${selectedCardImage}')` }}
        />
      </Modal>
      <div className="movieListWrapper">{renderPageContent()}</div>
    </Layout>
  );
};

export default MovieListPage;
