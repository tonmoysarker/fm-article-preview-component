import "./App.css";
import ArticleCard from "./components/ArticleCard";
import cardImage from "./assets/images/drawers.jpg";
import avatar from "./assets/images/avatar-michelle.jpg";

const article = {
  coverImageUrl: cardImage,
  title:
    "Shift the overall look and fill by adding these wonderful touches to furniture in your home",
  description:
    "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I`ve got some simple tips to make any room feel complete.",
    avatarUrl: avatar,
    authorName: "Michelle Appleton",
    publishedDate: "28 Jun 2020",
    socialLinks: {
      facebook: "facebook.com",
      twitter: "twitter.com",
    }

};
function App() {
  return (
    <main className="wrapper">
      <ArticleCard article={article} />
    </main>
  );
}

export default App;
