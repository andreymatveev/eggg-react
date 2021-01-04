import React from 'react';
import {NewsProvider} from "../../context/context";
import {NewsList} from "../../components/News/NewsList/NewsList";
import {NewsSettingsForm} from "../../components/News/NewsSettingsForm/NewsSettingsForm";

export function NewsPage() {
  return (
    <NewsProvider>
      <div className="content">
        <NewsSettingsForm/>
        <NewsList/>
      </div>
    </NewsProvider>
  );
}
