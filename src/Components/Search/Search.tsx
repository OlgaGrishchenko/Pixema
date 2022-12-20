import React, { FC } from "react";

import classNames from 'classnames';
import styles from './Search.module.css';

import { SearchFilteredIcon } from '../../Assets/Search/SearchFilteredIcon';
import { SearchIcon } from '../../Assets/Search/SearchIcon';

type SearchProps = {
   value: string;
   disabled: boolean;
   filters: boolean;
   className?: string;
};

const Search: FC<SearchProps> = (props) => {
   const {
      value,
      disabled,
      filters,
      className,
   } = props;

   return (
      <div className={styles.wrapper}>
         <input
            placeholder="Search"
            className={classNames(styles.input, { [styles.disabled]: disabled })}
         />
      {filters ? (
         <div className={styles.svg}><SearchFilteredIcon /></div>
      ) : (
         <div className={styles.svg}><SearchIcon /></div>
      )}
   </div>
   );
};

export default Search;