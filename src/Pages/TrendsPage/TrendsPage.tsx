import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import CardsList from "../../Components/CardsList";
import { CardsListType } from "../../Constants/@types";
import Sidebar from "../../Components/Sidebar";

import styles from "./TrendsPage.module.css";
import filmsSelectors from "../../Redux/Selectors/filmsSelectors";
import { getFilms, getTrendsFilms } from "../../Redux/Reducers/filmsReducer";


const TrendsPage = () => {

   const dispatch = useDispatch();
   
   const trendsFilms = useSelector(filmsSelectors.getTrendsFilms);
      useEffect(() => {
         dispatch(getTrendsFilms());
      }, []);

   return (
   <>
      <div className={styles.container}>
         <Sidebar />
         <CardsList cardsList={trendsFilms} />
      </div>
   </>
   );
};

export default TrendsPage;