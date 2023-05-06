import React, { FC, MouseEventHandler, useEffect, useState } from "react";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import classNames from 'classnames';
import styles from './Search.module.css';

import { SearchFilteredIcon } from '../../Assets/Search/SearchFilteredIcon';
import { SearchIcon } from '../../Assets/Search/SearchIcon';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import filmsSelectors from "../../Redux/Selectors/filmsSelectors";
import { setValueSearch } from "../../Redux/Reducers/filmsReducer";

type SearchProps = {
   value?: string | any;
   disabled?: boolean;
   filters?: boolean;
   className?: string;
   onChange: (value: string) => void;
};

const Search: FC<SearchProps> = (props) => {
   const {
      value,
      disabled,
      filters,
      className,
      onChange
   } = props;

   const searchInputValue = useSelector(filmsSelectors.setValueSearch);

   const {theme} = useThemeContext();

   const dispatch = useDispatch();

   const OnSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setValueSearch(event.target.value));
   }

   return (
      <div className={styles.wrapper}>
         <input
            placeholder="Search"
            className={classNames(styles.input, { [styles.disabled]: disabled }, {[styles.lightInput] : theme === Theme.Light})}
            onChange={OnSearchChange}
         />
      {/*filters ? (
         <div className={styles.svg}><SearchFilteredIcon /></div>
      ) : (
         <div className={styles.svg}><SearchIcon /></div>
      )*/}
   </div>
   );
};

export default Search;