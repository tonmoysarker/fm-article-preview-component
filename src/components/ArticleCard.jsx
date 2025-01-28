/* eslint-disable react/prop-types */
import "./ArticleCard.css";

function ArticleCard(props) {
  return (
    <article className="article-card auto-grid">
      <picture className="article-card__image">
        <img src={props.article.coverImageUrl} alt="Wardrobe" />
      </picture>
      <section className="article-card__content flow">
        <h2>{props.article.title}</h2>
        <p>{props.article.description}</p>
        <section className="article-card__author auto-flex">
          <img src={props.article.avatarUrl} alt="Michelle Appleton" />
          <div>
            <h3>{props.article.authorName}</h3>
            <p>{props.article.publishedDate}</p>
          </div>
          <button>
            <i className="fa fa-share" aria-hidden="true"></i>
          </button>
        </section>
      </section>
    </article>
  );
}

export default ArticleCard;
