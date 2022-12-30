import React from "react";
import { Outlet } from "react-router-dom";
import CardsList from "../../Components/CardsList";
import { CardsListType } from "../../Constants/@types";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";

import styles from "./Home.module.css";
import { ButtonGroup } from "@material-ui/core";


const Home = () => {

   const MOCK_CARD = {
      id: 0,
      image:
         "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/26a099c6-f326-45ce-9e57-1dfa61937009/1920x",
      title: "Хороший год",
      genres: ["Драма -", " Мелодрама -", " Комедия"],
      rating: 7.7,
   };

   const MOCK_CARDS_LIST = [
      MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD
   ];

   return (
   <>
      <div className={styles.container}>
         <Menu />
         <CardsList cardsList={MOCK_CARDS_LIST} />
      </div>
   </>
   );
};

export default Home;