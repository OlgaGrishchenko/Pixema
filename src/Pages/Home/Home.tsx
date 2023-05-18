import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import CardsList from "../../Components/CardsList";
import { CardsListType } from "../../Constants/@types";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./Home.module.css";
import filmsSelectors from "../../Redux/Selectors/filmsSelectors";
import {
  getFilms,
  getSearchedFilms,
  setSearchedFilms,
  setTotalCount,
} from "../../Redux/Reducers/filmsReducer";
import Loader from "../../Components/Loader";
import Lottie from "react-lottie";
import * as animationData from "../../Assets/loading.json";

const Home = () => {
  const dispatch = useDispatch();
  const allFilms = useSelector(filmsSelectors.getAllFilms);
  const totalCount = useSelector(filmsSelectors.getTotalCount);
  const searchInputValue = useSelector(filmsSelectors.setValueSearch);
  const searchedFilms = useSelector(filmsSelectors.getSearchedFilms);

  const isLoading = useSelector(filmsSelectors.getLoading);

  const [currentPage, setCurrentPage] = useState(1);

  const renderFilmsData = () => {
    if (searchInputValue) {
      return searchedFilms;
    } else return allFilms;
  };

  const renderFilms = renderFilmsData();

  useEffect(() => {
    const offset = 20 * (currentPage - 1);
    if (searchInputValue) {
      dispatch(getSearchedFilms({ query_term: searchInputValue, offset }));
    } else {
      dispatch(getFilms({ query_term: searchInputValue, offset }));
    }
  }, [searchInputValue, currentPage]);

  const onScroll = () => {
    setCurrentPage(currentPage + 1);
  };

  const hasMore = allFilms.length < totalCount;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

  return (
    
    <>
      <div className={styles.container}>
        <Sidebar />

        {!isLoading ? 
        <InfiniteScroll
          next={onScroll}
          hasMore={hasMore}
          dataLength={renderFilms.length}
          loader={<Loader />}
          scrollThreshold={0.9}
          className={styles.infiniteScroll}
        >
          <CardsList cardsList={renderFilms} />
        </InfiniteScroll> : <Loader />}
      </div> 
    </>
  );
};

export default Home;
