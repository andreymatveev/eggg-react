import React, {useReducer} from 'react';
import cn from 'classnames';
import styles from './NewsListItem.module.scss';
import {postPhotoInitialState, PostPhotoReducer} from "../../../context/reducer";
import {postPhoto} from "../../../context/actions";

export function NewsListItem(props) {

  const [postPhotoState, dispatch] = useReducer(PostPhotoReducer, postPhotoInitialState);

  return (
    <div className={cn(styles.item)}>
      <div className={styles.item__image}>
        <img src={props.item.urlToImage} alt=""/>
      </div>
      <div className={styles.item__title}>
        <a href={props.item.url} target="_blank" rel="noreferrer">{props.item.title}</a>
      </div>
      <div
        className={styles.item__date}
      >{props.item.publishedAt} — {props.item.source.name}</div>
      <div className={styles.item__description} dangerouslySetInnerHTML={{__html: props.item.description}}/>
      <div className={styles.item__publish}>
        <button
          className="button"
          onClick={(e) => onPublishClick(e, dispatch, props.item)}
        >Опубликовать
        </button>
      </div>
    </div>
  );

  function onPublishClick(e, dispatch, item) {
    e.preventDefault();
    return postPhoto(dispatch, {
      photoUrl: item.urlToImage,
      title: item.title,
      url: item.url,
    })
  }
}
