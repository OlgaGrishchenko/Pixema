import React, { FC } from "react";

import styles from "./Card.module.css"
import classNames from "classnames";

import { CardType } from "../../Constants/@types";

type CardProps = {
   card: CardType;
};

const Card: FC<CardProps> = ({ card }) => {
   const { image, rating, title, genres } = card;

   return (
      <div className={styles.container}>
         
         <span
            className={classNames(styles.rating, {
               [styles.ratingRed]: rating <= 5,
               [styles.ratingYellow]: rating > 5 && rating <= 7,
               [styles.ratingGreen]: rating > 7,
         })}
         >
         {rating}
         </span>

         <img className={styles.card} src={image} alt={''} />
         <div className={styles.title}>{title}</div>
         <div className={styles.genres}>{genres}</div>
      </div>
   );
};

export default Card;