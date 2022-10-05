import React, { useState } from "react";
import styles from "./styles/SearchItem.module.scss";

type Props = {
  defaultKeyword: string;
  doSearch: (keyword: string) => void;
};

function SearchComponent({ defaultKeyword, doSearch }: Props) {
  const [inputText, setInputText] = useState(defaultKeyword);

  function handleSubmit() {
    doSearch(inputText);
  }

  return (
    <div className={styles.searchContainer}>
      <input
        type={"text"}
        //defaultValue={defaultKeyword}
        value={inputText}
        placeholder="ブログ内検索"
        className={styles.searchText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input
        type={"submit"}
        value="検索"
        className={styles.searchSubmit}
        onClick={handleSubmit}
      />
    </div>
  );
}

export default SearchComponent;
