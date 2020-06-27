// @flow strict
import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import styles from './Buttons.module.scss';

type Props = {
    url: string
}

const HatenaBookmarkButton = ({ url }: Props) => (
  <div className={styles['button']}>
    <a href={ `https://b.hatena.ne.jp/entry/${url}` }
       className="hatena-bookmark-button"
       data-hatena-bookmark-layout="touch"
       data-hatena-bookmark-width="40"
       data-hatena-bookmark-height="40"
       title="このエントリーをはてなブックマークに追加"
    >
        <span onClick={(e) => {
          e.preventDefault();

          trackCustomEvent({
            category: 'share',
            action: 'click',
            label: 'hatena'
          });
        }}>
        <img
            className={styles['button__image']}
            src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
            alt="このエントリーをはてなブックマークに追加" width="40" height="40" style={{ border: 'none' }}
        />
        </span>
    </a>
    <script
        type="text/javascript"
        src="https://b.st-hatena.com/js/bookmark_button.js"
        charSet="utf-8"
        async="async"
    />
</div>
);

export default HatenaBookmarkButton;
