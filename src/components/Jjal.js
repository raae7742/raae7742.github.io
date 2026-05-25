import React, { useState } from "react";
import { JJAL_LIST, CATEGORIES, recommend } from "../data/jjalData";
import "../styles/Jjal.css";

function googleImageUrl(name) {
  return `https://www.google.com/search?q=${encodeURIComponent(name + ' 짤')}&tbm=isch`;
}

function JjalCard({ jjal }) {
  const url = googleImageUrl(jjal.name);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="jjal-card"
    >
      <div className="jjal-card-header">
        <span className="jjal-card-category">{jjal.category}</span>
        <h3 className="jjal-card-name">{jjal.name}</h3>
        <span className="jjal-card-source">{jjal.source}</span>
      </div>
      <p className="jjal-card-desc">{jjal.description}</p>
      <span className="jjal-card-link">구글 이미지 검색 →</span>
    </a>
  );
}

function Jjal() {
  const [mode, setMode] = useState("search");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [activeCategory, setActiveCategory] = useState("전체");

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmitted(query.trim());
  };

  const searchResults = submitted ? recommend(submitted) : [];

  const browseResults =
    activeCategory === "전체"
      ? JJAL_LIST
      : JJAL_LIST.filter((j) => j.category === activeCategory);

  return (
    <div className="jjal">
      <header className="jjal-header">
        <div className="jjal-header-inner">
          <div className="jjal-title-wrap">
            <h1 className="jjal-title">블로그 짤모음</h1>
            <p className="jjal-subtitle">
              {mode === "search" ? "맥락을 입력하면 어울리는 짤을 추천해드립니다." : "카테고리별로 짤을 찾아보세요."}
            </p>
          </div>
        </div>
      </header>

      <div className="jjal-tabs">
        <button
          className={`jjal-tab${mode === "search" ? " active" : ""}`}
          onClick={() => setMode("search")}
        >
          맥락으로 찾기
        </button>
        <button
          className={`jjal-tab${mode === "browse" ? " active" : ""}`}
          onClick={() => setMode("browse")}
        >
          카테고리 보기
        </button>
      </div>

      <main className="jjal-main">
        {mode === "search" && (
          <div className="jjal-search-mode">
            <form className="jjal-form" onSubmit={handleSearch}>
              <textarea
                className="jjal-textarea"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="어떤 상황인가요? 예) 야근 3일째인데 팀장이 또 일을 줬다"
                rows={3}
              />
              <button type="submit" className="jjal-submit">
                추천받기
              </button>
            </form>

            {submitted && searchResults.length === 0 && (
              <p className="jjal-empty">매칭되는 짤이 없습니다. 다른 표현으로 입력해보세요.</p>
            )}

            {searchResults.length > 0 && (
              <div className="jjal-results">
                <span className="jjal-results-label">
                  "{submitted}" — {searchResults.length}개 추천
                </span>
                <div className="jjal-grid">
                  {searchResults.map((j) => (
                    <JjalCard key={j.id} jjal={j} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {mode === "browse" && (
          <div className="jjal-browse-mode">
            <div className="jjal-category-pills">
              {CATEGORIES.map((cat) => {
                const count = cat === "전체" ? JJAL_LIST.length : JJAL_LIST.filter((j) => j.category === cat).length;
                return (
                  <button
                    key={cat}
                    className={`jjal-pill${activeCategory === cat ? " active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat} <span className="jjal-pill-count">{count}</span>
                  </button>
                );
              })}
            </div>
            <div className="jjal-grid">
              {browseResults.map((j) => (
                <JjalCard key={j.id} jjal={j} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Jjal;
