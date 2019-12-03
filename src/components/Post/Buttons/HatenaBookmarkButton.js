import React from 'react';

const HatenaBookmarkButton = () => <div>
    <a href="https://b.hatena.ne.jp/entry/"
       className="hatena-bookmark-button"
       data-hatena-bookmark-layout="touch"
       data-hatena-bookmark-width="40"
       data-hatena-bookmark-height="40"
       title="このエントリーをはてなブックマークに追加"
    >
        <img
            src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
            alt="このエントリーをはてなブックマークに追加" width="40" height="40" style={{ border: 'none' }}
        />
    </a>
    <script
        type="text/javascript"
        src="https://b.st-hatena.com/js/bookmark_button.js"
        charSet="utf-8"
        async="async"
    />
</div>;

export default HatenaBookmarkButton;
