import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    document.title = "Blog";
    fetch("https://api.spaceflightnewsapi.net/v3/blogs", {
      method: "get",
    })
      .then((value) => {
        if (!value.ok) {
          setLoading(false);
          return setNotFound(true);
        }
        return value.json();
      })
      .then((value) => {
        setArtikel(value);
        setLoading(false);
      });
    if (notFound) {
      return <h1>Data tidak ada</h1>;
    }
  });
  return (
    <section>
      <h1 className="blog">My Blog</h1>
      {loading ? (
        <i>Loading Data..</i>
      ) : (
        <>
          {artikel.map((v) => {
            return (
              <article key={v.id} className="art">
                <h2>
                  {" "}
                  <Link to={`/blog/${v.id}`}>{v.title}</Link>{" "}
                </h2>
                <time>{new Date(v.publishedAt).toLocaleDateString()}</time>
              </article>
            );
          })}
        </>
      )}
    </section>
  );
}
