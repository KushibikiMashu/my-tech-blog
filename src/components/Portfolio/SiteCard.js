import React from 'react';
import { webSiteData } from './data';

type Props = {
  sites: {
    title: string,
    description: {
      ja: string,
      en: string,
      ch: string,
    },
    techs: string[],
    image: {
      src: string,
      alt: string,
    },
    link: string,
  }[]
}

const Component: React.FC<Props> = (props) => (
  <>
    {props.sites.map((site) => (
      <div className="card hover:shadow-lg my-5 md:my-4">
        <a className="no-underline" href={site.link}>
          <div className="text-center py-3 px-4">
            <div className="portfolio-card-title">{site.title}</div>
          </div>
          <img className="w-full" src={site.image.src} alt={site.image.alt}/>
          <div className="px-8 py-4">
            <p className="card-text md:h-105px">
              <div>
                {site.description.ja}
              </div>
            </p>
          </div>
          <div className="px-5 pt-2 pb-4">
            {site.techs.map((tech) => <span className="tooltip">#{tech}</span>)}
          </div>
        </a>
      </div>
    ))}
  </>
);

type ContainerProps = {}

const Container: React.FC<ContainerProps> = () => <Component sites={webSiteData}/>;

Container.displayName = 'SiteCard';

export default Container;
