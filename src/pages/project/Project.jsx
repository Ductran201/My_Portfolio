import React from "react";
import "./project.css";
import TitleHeader from "../../components/title-header";
import ProjectCard from "../../components/projectCard/ProjectCard";
export default function Project() {
  const projects = [
    {
      id: 1,
      // thumbUrl: [foodie1, foodie2, foodie3, foodie4, foodie5],
      date: "01/01/2024",
      title: "MyFoodie",
      description:
        "中央情報専門学校のプレゼンテーショングランプリ大会で1年生の制作部門(技術)「2位」を取りました作品です。ウェブサイトのテーマは「マイフーディ」です。中国、ベトナム、日本の料理の特徴や具体的なレシピを紹介しました。さらに「国の紹介」ページ、「ミニゲーム」ページ、「お問合せ」ページ、そしてページ内検索機能など、チーム全員がやりたいコンテンツをどんどん追加していきました。仕事量が増えるよりもスケジュール管理が大変だったのですが、全員が満足する良い作品を完成させました。 ",
      role: "フロントエンド",
      frontend: ["CSS", "Bootstrap", "Javascript"],
      backend: "Java, Spring Boot, MySQL",
      source: "https://github.com/LaPhuocLoc/MyFoodie2",
      // preview: 'https://rokku-food.netlify.app/',
      video: "https://www.youtube.com/watch?v=rx-fLzNr1eM",
      tags: [
        "git",
        "ui / ux",
        "css",
        "bootstrap",
        "responsive",
        "javascript",
        "web api",
        "web app",
        "food",
        "travel",
      ],
    },
    {
      id: 2,
      // thumbUrl: [movie1, movie2, movie3, movie4, movie5],
      date: "01/01/2024",
      title: "Movie App",
      description:
        "フロントエンドはSCSSとReact,バックエンドはTMDB APIを利用して、動画配信サービスのネットフリックスのようなWEBサイトを作成しました。",
      role: "フロントエンド",
      frontend: ["SCSS", "React"],
      backend: "The Movie Database (TMDB) API",
      source: "https://github.com/LaPhuocLoc/movie-app",
      // preview: 'https://rokku-movie.netlify.app/',
      video: "https://youtu.be/EwX2gFZFobA",
      tags: [
        "react",
        "scss",
        "responsive",
        "web api",
        "axios",
        "movie",
        "web app",
      ],
    },
    {
      id: 3,
      // thumbUrl: [game1, game2, game3, game4, game5],

      date: "01/01/2024",
      title: "Game Landing Page",
      description:
        "SCSSやReactJSを利用し、レスポンシブのゲームランディングページを作成しました。",
      role: "フロントエンド",
      frontend: ["SCSS", "React"],
      backend: "なし",
      source: "https://github.com/LaPhuocLoc/landing-page",
      // preview: 'https://rokku-game.netlify.app/',
      video: "https://youtu.be/Agv30p2llrU",
      tags: [
        "react",
        "scss",
        "vitejs",
        "animation",
        "game landing page",
        "web design",
      ],
    },
    {
      id: 4,
      // thumbUrl: [portfolio1, portfolio2, portfolio3, portfolio4],
      date: "01/01/2024",
      title: "My Portfolio",
      description:
        "このWebページです。HTMLとCSS(SASS),ReactJSを使用し、シングルページアプリケーションに仕上げました。これまでに手がけた制作物、身につけたスキルをまとめています。",
      role: "フロントエンド",
      frontend: ["SCSS", "React"],
      backend: "なし",
      source: "https://github.com/LaPhuocLoc/react-portfolio",
      // preview: 'https://rokku.netlify.app/',
      video: "なし",
      tags: [
        "react",
        "scss",
        "ui/ux",
        "responsive",
        "animation",
        "portfolio",
        "web design",
      ],
    },
    {
      id: 5,
      // thumbUrl: [ec1, ec2, ec3, ec4],

      date: "01/01/2024",
      title: "E-Commerce Store",
      description:
        "SCSSやReactJSを利用し、レスポンシブのWEBデザインのECサイトを作成しています。未完成なので、バックエンドはまだ何もありません。",
      role: "フロントエンド",
      frontend: ["SCSS", "Ant Design", "React"],
      backend: "なし",
      source: "https://github.com/LaPhuocLoc/commerce-app",
      // preview: 'https://rokku-commerce.netlify.app/',
      video: "https://youtu.be/fJ6J75EB3dw",
      tags: [
        "react",
        "scss",
        "responsive",
        "ant design",
        "ecommerce",
        "web app",
      ],
    },
    {
      id: 6,
      // thumbUrl: [music1, music2],

      date: "01/01/2024",
      title: "Music Player",
      description:
        "CSSとJavascriptを用いてミュージックプレイヤーアプリを作成しました。",
      role: "フロントエンド",
      frontend: ["CSS", "Javascript"],
      backend: "なし",
      source: "https://github.com/LaPhuocLoc/Mp3Player",
      // preview: 'https://rokku-music.netlify.app/',
      video: "https://youtu.be/kvvyQNWTAMQ",
      tags: ["javascript", "css", "ui/ux", "music app"],
    },
    {
      id: 7,
      // thumbUrl: [theater1, theater2, theater3],

      date: "01/01/2024",
      title: "Theater Homepage",
      description:
        "CSSやJavascript,Bootstrapを用いて映画館情報のレスポンシブのWEBサイトを作成しました。",
      role: "フロントエンド",
      frontend: ["CSS", "Bootstrap", "Javascript"],
      backend: "なし",
      source: "https://github.com/LaPhuocLoc/Movie-Theater",
      // preview: 'https://rokku-theater.netlify.app/',
      video: "https://youtu.be/2MY77Glw-3Q",
      tags: [
        "css",
        "javascript",
        "responsive",
        "bootstrap",
        "movie",
        "web design",
      ],
    },
  ];
  return (
    <>
      <div className="slide"></div>
      <div className="section project">
        <TitleHeader first={"my"} second={"projects"} third={"work"} />
        <div className="container">
          <div className="tab">
            <ul className="tab__nav">
              <li className="tab__nav-item">ALL</li>
              <li className="tab__nav-item">HTML/CSS/JAVASCRIPT</li>
              <li className="tab__nav-item">REACTJS</li>
              <li className="tab__nav-item">API</li>
            </ul>

            <div className="tab__panel">
              {/* <div className="portfolio-card">
                <div
                  className="bg-wrap"
                  // style={{ backgroundImage: `url(${item.thumbUrl[0]})` }}
                >
                  <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
                    alt=""
                  />
                </div>
                <h3>title</h3>
              </div>

              <div className="portfolio-card">
                <div className="bg-wrap">
                  <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
                    alt=""
                  />
                </div>
                <h3>title</h3>
              </div>
              <div className="portfolio-card">
                <div className="bg-wrap">
                  <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
                    alt=""
                  />
                </div>
                <h3>title</h3>
              </div>
              <div className="portfolio-card">
                <div className="bg-wrap">
                  <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
                    alt=""
                  />
                </div>
                <h3>title</h3>
              </div>
              <div className="portfolio-card">
                <div className="bg-wrap">
                  <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
                    alt=""
                  />
                </div>
                <h3>title</h3>
              </div> */}

              {projects.map((item) => (
                <ProjectCard item={item} />
              ))}
            </div>

            {/* <TabPanel className="tab__panel">
              {portfolio
                .filter((item) => item.tags.includes("javascript"))
                .map((filteredItem, i) => (
                  <PortfolioCard
                    item={filteredItem}
                    id={filteredItem.id}
                    key={i}
                  />
                ))}
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio
                .filter((item) => item.tags.includes("react"))
                .map((filteredItem, i) => (
                  <PortfolioCard
                    item={filteredItem}
                    id={filteredItem.id}
                    key={i}
                  />
                ))}
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio
                .filter((item) => item.tags.includes("web api"))
                .map((filteredItem, i) => (
                  <PortfolioCard
                    item={filteredItem}
                    id={filteredItem.id}
                    key={i}
                  />
                ))}
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio.map((item, i) => (
                <PortfolioCard item={item} id={item.id} key={i} />
              ))}
            </TabPanel> */}
          </div>
        </div>
      </div>
      {/* {portfolio.map((item, i) => (
        <PortfolioDetail item={item} id={item.id} key={i} />
      ))} */}
    </>
  );
}
