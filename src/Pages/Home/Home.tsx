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
import { getFilms, setTotalCount } from "../../Redux/Reducers/filmsReducer";


const Home = () => {

   const dispatch = useDispatch();
   const allFilms = useSelector(filmsSelectors.getAllFilms);
   const totalCount = useSelector(filmsSelectors.getTotalCount);
   const searchInputValue = useSelector(filmsSelectors.setValueSearch);

   const [currentPage, setCurrentPage] = useState(1);

      useEffect(() => {
         const offset = 20 * (currentPage - 1);
         dispatch(getFilms({ query_term: searchInputValue, offset }));
      }, [searchInputValue, currentPage]);
      

      const onScroll = () => {
         setCurrentPage(currentPage + 1)
      }
   
      const hasMore = allFilms.length < totalCount;
      console.log(hasMore)
      console.log(currentPage)
      console.log(hasMore)   

   return (
   <>
      <div className={styles.container}>
         <Sidebar />

         <InfiniteScroll
         next={onScroll}
         hasMore={hasMore}
         dataLength={allFilms.length}
         loader={<h1 className={styles.loading}>{"LOADING"}</h1>}
         scrollThreshold={0.9}
         >
         <CardsList cardsList={allFilms} />
         </InfiniteScroll>
      </div>
   </>
   );
};

export default Home;