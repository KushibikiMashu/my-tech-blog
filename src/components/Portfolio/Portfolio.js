// eslint-disable
import React, { useState } from 'react';
import Link from 'gatsby-link';
import SiteCard from './SiteCard';
import './portfolio.modules.scss';
import type { Language } from '../../types';

type Props = {
  language: Language,
  handleClick: (lang: Language) => void
}

const Component: React.FC<Props> = (props) => (
  <div>
    <div className="mx-auto container">
      <div className="self-start pt-4 justify-center my-auto">
        <ul className="flex justify-end px-3 pt-3 list-reset leading-narrow">
          <li className="text-3xl cursor-pointer mr-2">
            <button type="button" aria-label="Japanese" onClick={() => props.handleClick('ja')}>🇯🇵</button>
          </li>
          <li className="text-3xl cursor-pointer px-2 border-l border-r border-solid border-grey-dark">
            <button type="button" aria-label="English" onClick={() => props.handleClick('en')}>🇬🇧</button>
          </li>
          <li className="text-3xl cursor-pointer mx-2">
            <button type="button" aria-label="Chinese" onClick={() => props.handleClick('ch')}>🇨🇳</button>
          </li>
        </ul>
      </div>
      {/* <div className="pb-6"><h1 className="section-title">ABOUT</h1> */}
      {/*  <div className="card-container"> */}
      {/*    <div className="card"> */}
      {/*      <div className="about-card-title">Career</div> */}
      {/*      <i */}
      {/*        className="fas fa-shoe-prints py-6 w-full text-center text-4rem */}
      {/*         md:text-5xl rotate-1/8 text-red-darker"></i> */}
      {/*      <div className="px-8 py-6"> */}
      {/*        <p className="card-text md:h-210px"> */}
      {/*          <div>1991年生まれ。2015年京都大学法学部卒業。総合商社に新卒で入社し、経理として働く。 */}
      {/*            2017年に退社し、海外旅行をしてブログ立ち上げ。ブログ制作を通してプログラミングに目覚め、 */}
      {/*            独学の後、2018年1月より未経験からエンジニアとしてWeb制作会社に就職。 */}
      {/*            現在、都内のIT企業にてエンジニアとして働いている。</div> */}
      {/*        </p> */}
      {/*      </div> */}
      {/*    </div> */}
      {/*    <div className="card"> */}
      {/*      <div className="about-card-title">Experiences</div> */}
      {/*      <i className="fas fa-code py-2 md:py-4 w-full
           text-4rem text-center text-blue-dark"></i> */}
      {/*      <div className="px-8 py-6"> */}
      {/*        <p className="card-text md:h-210px"> */}
      {/*          <div>PHP (Laravel, WordPress, Yii). */}
      {/*            JavaScript (React / Redux / Flow, Node.js). Python (Jupyter */}
      {/*            Notebook, Pandas, matplotlib, Word2vec). */}
      {/*            CSS (Bootstrap 4). AWS (Lambda, Cloud Watch, EC2, */}
      {/*            Route53, KMS). Docker, Vagrant. Selenium, Puppeteer etc. */}
      {/*            このサイトはElmとTailwind CSSで作成しています。 */}
      {/*          </div> */}
      {/*        </p> */}
      {/*      </div> */}
      {/*    </div> */}
      {/*    <div className="card"> */}
      {/*      <div className="about-card-title">Favorites</div> */}
      {/*      <i className="fas fa-star py-2 md:py-4 w-full text-4rem
          text-center text-yellow-dark"></i> */}
      {/*      <div className="px-8 py-6"> */}
      {/*        <p className="card-text md:h-210px"> */}
      {/*          <div>プログラミング・日本語ラップ・ウィスキー・旅行（国内・海外）・ */}
      {/*            歴史・伝統・思想・哲学・企業分析・水泳・英語・中国茶・食べ歩き・ */}
      {/*            カフェ巡り・新しい技術。何より学ぶことが好き。</div> */}
      {/*        </p> */}
      {/*      </div> */}
      {/*    </div> */}
      {/*  </div> */}
      {/* </div> */}
      <div className="pb-6">
        <h1 className="text-center font-bold">個人開発サイト</h1>
        <div className="flex flex-wrap justify-center">
          <SiteCard language={props.language}/>
        </div>
      </div>
      <div className="py-6"><h1 className="section-title">OTHERS</h1>
        <div className="others-container">
          <div className="other-item">
            <Link to="/"><img
              className="other-image hover:shadow-lg" src="/media/portfolio/techblog.png"
              alt="my tech blog"/></Link>
            <div className="other-text">Tech Blog</div>
          </div>
          <div className="other-item"><a className="no-underline"
                                         href="https://note.mu/panda_programm/n/n5135b0294d85"><img
            className="other-image hover:shadow-lg" src="/media/portfolio/lightning_talk.jpg"
            alt="Giving a lightning talk"/></a>
            <div className="other-text">Lightning Talk</div>
          </div>
          <div className="other-item"><a className="no-underline" href="https://ccculture.netlify.com/"><img
            className="other-image hover:shadow-lg" src="/media/portfolio/blog.png"
            alt="Blog about travel in China"/></a>
            <div className="other-text">Travel Blog</div>
          </div>
        </div>
      </div>
    </div>

    {/* side barのコンタクトに移動する */}
    {/* <div> */}
    {/*  <div className="bg-grey-lighter text-center"><h1 */}
    {/*    className="w-full py-4 text-3xl md:text-2xl text-grey-darkest">CONTACT</h1> */}
    {/*    <div><a className="no-underline" href="https://twitter.com/Panda_Program"><span */}
    {/*      className="footer-icon text-twitter">
        <i className="fab fa-twitter-square"></i></span></a><a */}
    {/*      className="no-underline" href="https://www.facebook.com/mashu.kushibiki"><span */}
    {/*      className="footer-icon text-facebook">
        <i className="fab fa-facebook"></i></span></a><a */}
    {/*      className="no-underline" href="https://www.linkedin.com/in/mashu-kushibiki"><span */}
    {/*      className="footer-icon text-linkedin">
        <i className="fab fa-linkedin"></i></span></a><a */}
    {/*      className="no-underline" href="https://github.com/KushibikiMashu"><span */}
    {/*      className="footer-icon text-github">
        <i className="fab fa-github-square"></i></span></a></div> */}
    {/*    <div className="pt-4 pb-3 text-grey-darker"> */}
    {/*      <p className="text-base md:text-sm">by MASHU KUSHIBIKI</p><p */}
    {/*      className="text-base md:text-sm">created with Elm</p></div> */}
    {/*  </div> */}
    {/* </div> */}

  </div>
);

type ContainerProps = {}

const Container: React.FC<ContainerProps> = () => {
  const [language, changeLanguage] = useState('ja');
  const handleClick = (language: Language) => changeLanguage(language);

  return <Component language={language} handleClick={handleClick}/>;
};

Container.displayName = 'Portfolio';

export default Container;
