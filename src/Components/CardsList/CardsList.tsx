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

   const dispatch = useDispatch();
   const getTotalCount = useSelector(filmsSelectors.getTotalCount);
   const totalCount = useSelector(filmsSelectors.getPageTotalCount);
   const [currentPage, setCurrentPage] = useState(1);

   const onScroll = () => {
      dispatch(setTotalCount(totalCount + 1))
   }

   const hasMore = cardsList.length < getTotalCount;
   console.log(hasMore)
   console.log(getTotalCount)
   console.log(totalCount)

   return cardsList && cardsList.length > 0 ? ( 
      <InfiniteScroll
         next={onScroll}
         hasMore={hasMore}
         dataLength={cardsList.length}
         loader={<h1>{"LOADING"}</h1>}
         scrollThreshold={0.9}
      >
         <div className={styles.container}> 
         {cardsList.map((card)=>{
            return <Card card={card} key={card.id} />
         })}
      </div>
            </InfiniteScroll>
   ) : <EmptyState />
};

export default CardsList;