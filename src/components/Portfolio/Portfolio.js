// @flow strict
import React, { useState } from 'react';
import SiteCard from './SiteCard';
import './Portfolio.modules.scss';
import type { Language } from '../../types';

type Props = {
  language: Language,
  handleClick: (lang: Language) => void
}

const Component: React.FC<Props> = (props) => (
  <div>
    <div className="portfolio">
      <div className="portfolio__flags">
        <ul className="flex justify-end px-3 pt-3 list-reset h-40px">
          <li className="text3xl cursor-pointer mr-2">
            <button type="button" aria-label="Japanese" onClick={() => props.handleClick('ja')}>🇯🇵</button>
          </li>
          <li className="text3xl cursor-pointer px-2">
            <button type="button" aria-label="English" onClick={() => props.handleClick('en')}>🇬🇧</button>
          </li>
          <li className="text3xl cursor-pointer mx-2">
            <button type="button" aria-label="Chinese" onClick={() => props.handleClick('ch')}>🇨🇳</button>
          </li>
        </ul>
      </div>
      <div className="pb-6">
        <h1 className="text-center font-bold my-0">ポートフォリオ</h1>
        <div className="flex flex-wrap justify-center">
          <SiteCard language={props.language}/>
        </div>
      </div>
    </div>
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
