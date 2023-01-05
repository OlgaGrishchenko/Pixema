import React, { FC, useEffect, useState, ReactElement} from "react";

import { CardType } from "../../Constants/@types";
import ButtonGroup from "../../Components/ButtonGroup";

import { useNavigate, useParams } from "react-router-dom";
import { PathNames } from "../Router/Router";

import Card from "../../Components/Card";
import Sidebar from "../../Components/Sidebar";

import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from "./ContentPage.module.css";
import classNames from "classnames";

const MOCK_CARD = {
    id: 0,
    image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/26a099c6-f326-45ce-9e57-1dfa61937009/1920x",
    title: "Хороший год",
    genres: ["Драма -", " Мелодрама -", " Комедия"],
    rating: 7.7,

};


const ContentPage = () => {
    const {theme} = useThemeContext();
    const params = useParams();
    const { id } = params;


    return (
        <div className={styles.container}>
            <Sidebar />

            <div className={styles.oneFilm}>

                <div className={styles.leftContainer}>
                    <img 
                    src={"https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/26a099c6-f326-45ce-9e57-1dfa61937009/1920x"}
                    alt={"image"}
                    className={styles.image}/>

                    <ButtonGroup />

                </div>

                <div className={styles.rightContainer}>

                    <div className={styles.topContainer}>
                        <div className={styles.genres}>{MOCK_CARD.genres}</div>
                        <div className={classNames(styles.title, {[styles.lightTitle] : theme === Theme.Light})}>{MOCK_CARD.title}</div>
                        <div className={styles.rating}>{MOCK_CARD.rating}</div>
                        <div className={classNames(styles.desc, {[styles.lightDesc] : theme === Theme.Light})}>In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum. With the memory of the brave U.S. pilot, Captain Steve Trevor, etched on her mind, Diana Prince becomes embroiled in a sinister conspiracy of global proportions when a transparent, golden-yellow citrine gemstone catches the eye of the power-hungry entrepreneur, Maxwell Lord</div>
                        <div className={styles.info}>{"Year"}</div>
                    </div>

                    <div className={styles.downContainer}>

                        <div className={classNames(styles.recommendations, {[styles.lightRecommendations] : theme === Theme.Light})}>Recommendations</div>
                        

                        <div className={styles.cards}>
                            <Card card={MOCK_CARD}/>
                            <Card card={MOCK_CARD}/>
                        </div>

                    </div>
                </div>

    </div>
        </div>
    );
};

export default ContentPage;