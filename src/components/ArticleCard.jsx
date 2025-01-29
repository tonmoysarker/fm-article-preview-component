/* eslint-disable react/prop-types */
import "./ArticleCard.css";
import ToolTip from "./ToolTip";

function ArticleCard(props) {
  const toolTipContent = (
    <p>
      SHARE: 
      <a href="#">
        <i className="fa fa-facebook" aria-label="facebook"></i>
      </a>
      <a href="#">
        <i className="fa fa-twitter" aria-label="twitter"></i>
      </a>
      <a href="#">
        <i className="fa fa-pinterest-p" aria-label="pininterest"></i>
      </a>
    </p>
  );

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
          <ToolTip content={toolTipContent} direction="top">
            <button className="article-card__share-button">
              <i className="fa fa-share" aria-hidden="true"></i>
            </button>
          </ToolTip>
        </section>
      </section>
    </article>
  );
}

export default ArticleCard;
