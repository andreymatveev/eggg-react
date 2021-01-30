import React, {useState} from 'react';
import {useNewsContext} from "../../../context/context";
import {getNewsList} from "../../../context/actions";

import styles from './NewsSettingsForm.module.scss';

const defaultSearch = '(россии OR российским OR рф OR россия OR российские OR россиянам OR правительство OR депутаты OR парламент) AND (нельзя OR запретили OR запретят OR запрещено OR запрет OR ограничен OR ограничили)';

export function NewsSettingsForm() {
  const newsContext = useNewsContext();

  const [search, setSearch] = useState(defaultSearch);
  const [from, setFrom] = useState(getDefaultFrom());

  function SetDefaultForm() {
    setFrom(getDefaultFrom());
    setSearch(defaultSearch);
  }

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
        <div className="form__control-spacer"></div>
        <button
          className="form__control button button_color-lined"
          type="button"
          onClick={(e) => onClearClick(e)}
        >Clear
        </button>
        <button
          className="form__control button button_color-lined"
          type="button"
          onClick={(e) => onDefaultClick(e)}
        >Default
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

  function onClearClick(e) {
    e.preventDefault();
    setSearch('');
  }

  function onDefaultClick(e) {
    e.preventDefault();
    SetDefaultForm();
  }
}
