import React from 'react';
import {useNewsContext} from "../../../context/context";
import {NewsListItem} from "../NewsListItem/NewsListItem";

import styles from './NewsList.module.scss';

export function NewsList() {

  const newsContext = useNewsContext();

  return (
    <div className={styles.list}>
      {(newsContext.news.news || []).map((item, index) => (
        <NewsListItem item={item} key={index}/>
      ))}
    </div>
  );
}
