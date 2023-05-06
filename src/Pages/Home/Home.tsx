import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import CardsList from "../../Components/CardsList";
import { CardsListType } from "../../Constants/@types";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import styles from "./Home.module.css";
import filmsSelectors from "../../Redux/Selectors/filmsSelectors";
import { getFilms } from "../../Redux/Reducers/filmsReducer";


const Home = () => {

   const dispatch = useDispatch();
   const allFilms = useSelector(filmsSelectors.getAllFilms);
   const getTotalCount = useSelector(filmsSelectors.getTotalCount);
   const searchInputValue = useSelector(filmsSelectors.setValueSearch);

      useEffect(() => {
         dispatch(getFilms({query_term: searchInputValue, page: getTotalCount }));
      }, [searchInputValue, getTotalCount]);

   return (
   <>
      <div className={styles.container}>
         <Sidebar />
         <CardsList cardsList={allFilms} />
      </div>
   </>
   );
};

export default Home;