import React, {useState} from 'react';
import {useNewsContext} from "../../../context/context";
import {getNewsList} from "../../../context/actions";

import styles from './NewsSettingsForm.module.scss';

export function NewsSettingsForm() {
  const newsContext = useNewsContext();

  const [search, setSearch] = useState('(россии OR российским OR рф OR россия OR российские OR россиянам) AND (нельзя OR запретили OR запретят OR запрещено OR запрет)');
  const [from, setFrom] = useState(getDefaultFrom());

  return (
    <form className={'form ' + styles.form}>
      <div className="form__row form__row_margin-s">
        <div className="form__col">
          <textarea onChange={(e) => setSearch(e.target.value)} value={search}/>
        </div>
      </div>
      <div className="form__row form__row_margin-s">
        <div className="form__col form__col_width-small">
          <input type="date" onChange={(e) => setFrom(e.target.value)} value={from}/>
        </div>
      </div>
      <div className="form__controls">
        <button
          className="form__control button"
          onClick={(e) => onLoadNewsClick(e, newsContext)}
        >Load news
        </button>
        <button
          className="form__control button button_color-lined"
          type="reset"
        >Reset
        </button>
      </div>
    </form>
  );

  function getDefaultFrom() {
    const now = new Date(new Date().valueOf() - 3600000 * 24 * 4);
    return `${now.getFullYear()}-${(0 + (now.getMonth() + 1).toString()).substr(-2)}-${(0 + now.getDate().toString()).substr(-2)}`;
  }

  function onLoadNewsClick(e, context) {
    e.preventDefault();
    return getNewsList(context.dispatch, {
      search,
      from,
    });
  }
}
