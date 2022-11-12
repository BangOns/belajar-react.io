import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [notFound, setNotFound] = useState(false);
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`, {
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
        document.title = value.title;

        setArtikel(value);
        setLoading(false);
      });
  }, [params]);
  if (notFound) {
    return <h1>Data tidak ada</h1>;
  }
  return (
    <>
      {loading ? (
        <i>Loading Data...</i>
      ) : (
        <article key={artikel.id}>
          <h1>{artikel.title}</h1>
          <div class="img-detail">
            <img src={artikel.imageUrl} alt={artikel.title} className="img" />
          </div>
          {artikel.summary}
        </article>
      )}
    </>
  );
}
