// eslint-disable
import React from 'react';

type Props = {}

const Component: React.FC<Props> = () => (
  <>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
    <div>
      <div>
        <div className="max-w-xl mx-auto container">
          <div className="self-start pt-4 justify-center my-auto">
            <ul className="flex justify-end px-3 pt-3 list-reset leading-narrow">
              <li className="flag mr-2">🇯🇵</li>
              <li className="flag px-2 border-l border-r border-solid border-grey-dark">🇬🇧</li>
              <li className="flag mx-2">🇨🇳</li>
            </ul>
          </div>
          <div className="pb-6"><h1 className="section-title">ABOUT</h1>
            <div className="card-container">
              <div className="card">
                <div className="about-card-title">Career</div>
                <i
                  className="fas fa-shoe-prints py-6 w-full text-center text-4rem
                   md:text-5xl rotate-1/8 text-red-darker"></i>
                <div className="px-8 py-6">
                  <p className="card-text md:h-210px">
                    <div>1991年生まれ。2015年京都大学法学部卒業。総合商社に新卒で入社し、経理として働く。
                      2017年に退社し、海外旅行をしてブログ立ち上げ。ブログ制作を通してプログラミングに目覚め、
                      独学の後、2018年1月より未経験からエンジニアとしてWeb制作会社に就職。
                      現在、都内のIT企業にてエンジニアとして働いている。</div>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="about-card-title">Experiences</div>
                <i className="fas fa-code py-2 md:py-4 w-full text-4rem text-center text-blue-dark"></i>
                <div className="px-8 py-6">
                  <p className="card-text md:h-210px">
                    <div>PHP (Laravel, WordPress, Yii).
                      JavaScript (React / Redux / Flow, Node.js). Python (Jupyter
                      Notebook, Pandas, matplotlib, Word2vec).
                      CSS (Bootstrap 4). AWS (Lambda, Cloud Watch, EC2,
                      Route53, KMS). Docker, Vagrant. Selenium, Puppeteer etc.
                      このサイトはElmとTailwind CSSで作成しています。
                    </div>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="about-card-title">Favorites</div>
                <i className="fas fa-star py-2 md:py-4 w-full text-4rem text-center text-yellow-dark"></i>
                <div className="px-8 py-6">
                  <p className="card-text md:h-210px">
                    <div>プログラミング・日本語ラップ・ウィスキー・旅行（国内・海外）・
                      歴史・伝統・思想・哲学・企業分析・水泳・英語・中国茶・食べ歩き・
                      カフェ巡り・新しい技術。何より学ぶことが好き。</div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6"><h1 className="section-title">PORTFOLIO</h1>
            <div className="card-container">
              <div className="card hover:shadow-lg my-5 md:my-0"><a className="no-underline"
                                                                    href="https://creepynutsfans.com/">
                <div className="flex items-center h-74px py-3 px-4"><span
                  className="card-avatar text-white bg-blue-darkest"><i className="fas fa-music"></i></span>
                  <div className="portfolio-card-title">Creepy Nuts Fans</div>
                </div>
                <img className="w-full" src="/media/portfolio/creepynutsfans.png" alt="Creepy Nuts Fans"/>
                <div className="px-8 py-4">
                  <p className="card-text md:h-105px">
                    <div>日本一のラッパーR-指定、世界一のDJ松永のユニットCreepy Nutsの最新情報が集まるサイト。
                      Next.js+TypeScriptで作り、Vercelにデプロイ</div>
                  </p>
                </div>
                <div className="px-5 pt-2 pb-4"><span className="tooltip">#Next.js</span><span
                  className="tooltip">#React</span><span className="tooltip">#TypeScript</span><span
                  className="tooltip">#Tailwind CSS</span><span className="tooltip">#Vercel</span></div>
              </a>
              </div>
              <div className="card hover:shadow-lg my-5 md:my-0"><a className="no-underline"
                                                                    href="https://bitcoin-chart.netlify.com/">
                <div className="flex items-center h-74px py-3 px-4"><span
                  className="text-2.5rem text-bitcoin-chart mr-4"><i className="fab fa-bitcoin"></i></span>
                  <div className="portfolio-card-title">Bitcoin Chart</div>
                </div>
                <img className="w-full" src="/media/portfolio/bitcoin_chart.png" alt="Bitcoin chart"/>
                <div className="px-8 py-4">
                  <p className="card-text md:h-105px">
                    <div>ビットコインの取引所ごとの価格差に着目し、価格をグラフで可視化。
                      GASでスクレイピングしたデータをSpreadSheetに保存。
                      React+TypeScriptで描画している。</div>
                  </p>
                </div>
                <div className="px-5 pt-2 pb-4"><span className="tooltip">#React</span><span
                  className="tooltip">#TypeScript</span><span className="tooltip">#SpreadSheet</span><span
                  className="tooltip">#Google Apps Script</span><span className="tooltip">#Bootstrap 4</span><span
                  className="tooltip">#Highcharts</span><span className="tooltip">#Neltify</span></div>
              </a>
              </div>
              <div className="card hover:shadow-lg my-5 md:my-0"><a className="no-underline"
                                                                    href="https://japanese-whisky-nav.net">
                <div className="flex items-center h-74px py-3 px-4"><span
                  className="card-avatar text-white bg-orange-darker"><i className="fas fa-glass-whiskey"></i></span>
                  <div className="portfolio-card-title">Whisky Distilleries Navi</div>
                </div>
                <img className="w-full" src="/media/portfolio/whisky_distilleries.png"
                     alt="Japanese whisky distilleries"/>
                <div className="px-8 py-4">
                  <p className="card-text md:h-105px">
                    <div>国内の主なウィスキー蒸留所を一覧できるサイト。
                      各蒸留所の見学予約ページにワンクリックで遷移することができる。レスポンシブ対応済みのサイト。</div>
                  </p>
                </div>
                <div className="px-5 pt-2 pb-4"><span className="tooltip">#HTML</span>
                  <span className="tooltip">#Bootstrap 4</span><span
                  className="tooltip">#jQuery</span><span className="tooltip">#Neltify</span></div>
              </a></div>
            </div>
          </div>
          <div className="py-6"><h1 className="section-title">OTHERS</h1>
            <div className="others-container">
              <div className="other-item"><a className="no-underline" href="http://panda-program.com/"><img
                className="other-image hover:shadow-lg" src="/media/portfolio/techblog.png" alt="my tech blog"/></a>
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
        <div>
          <div className="bg-grey-lighter text-center"><h1
            className="w-full py-4 text-3xl md:text-2xl text-grey-darkest">CONTACT</h1>
            <div><a className="no-underline" href="https://twitter.com/Panda_Program"><span
              className="footer-icon text-twitter"><i className="fab fa-twitter-square"></i></span></a><a
              className="no-underline" href="https://www.facebook.com/mashu.kushibiki"><span
              className="footer-icon text-facebook"><i className="fab fa-facebook"></i></span></a><a
              className="no-underline" href="https://www.linkedin.com/in/mashu-kushibiki"><span
              className="footer-icon text-linkedin"><i className="fab fa-linkedin"></i></span></a><a
              className="no-underline" href="https://github.com/KushibikiMashu"><span
              className="footer-icon text-github"><i className="fab fa-github-square"></i></span></a></div>
            <div className="pt-4 pb-3 text-grey-darker">
              <p className="text-base md:text-sm">by MASHU KUSHIBIKI</p><p
              className="text-base md:text-sm">created with Elm</p></div>
          </div>
        </div>
      </div>
    </div>
  </>
);

type ContainerProps = {}

const Container: React.FC<ContainerProps> = () => <Component/>;

Container.displayName = 'Portfolio';

export default Container;
