import React, { FC, useState } from "react";
import { CardsListType } from "../../Constants/@types";
import Card from "../Card/Card";
import EmptyState from "../EmptyState";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./CardsList.module.css"
import { useDispatch, useSelector } from "react-redux";
import filmsSelectors from "../../Redux/Selectors/filmsSelectors";
import { setTotalCount } from "../../Redux/Reducers/filmsReducer";

type CardsListProps = {
   cardsList: CardsListType
}

const CardsList:FC<CardsListProps> = ({cardsList}) => {
  
   return cardsList && cardsList.length > 0 ? ( 

         <div className={styles.container}> 
         {cardsList.map((card)=>{
            return <Card card={card} key={card.id} />
         })}
      </div>
   ) : <EmptyState />
};

export default CardsList;