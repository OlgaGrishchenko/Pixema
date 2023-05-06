import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import CardsList from "../../Components/CardsList";
import { CardsListType } from "../../Constants/@types";
import Sidebar from "../../Components/Sidebar";

import styles from "./SearchPage.module.css";
import filmsSelectors from "../../Redux/Selectors/filmsSelectors";
import { getFilms } from "../../Redux/Reducers/filmsReducer";


const SearchPage = () => {

   const dispatch = useDispatch();
   const allFilms = useSelector(filmsSelectors.getAllFilms);
   const { query_term } = useParams();

      useEffect(() => {
         dispatch(getFilms( {query_term} ));
      }, [query_term]);

   return (
   <>
      <div className={styles.container}>
         <Sidebar />
         <CardsList cardsList={allFilms} />
      </div>
   </>
   );
};

export default SearchPage;