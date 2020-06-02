// @flow strict
import React from 'react';
import TwitterButton from './TwitterButton';
import HatenaBookmarkButton from './HatenaBookmarkButton';
import LinkButton from './LinkButton';

type Props = {
  shareTitle: string,
  url: string,
}

const ShareButtons = ({ shareTitle, url }: Props) => <>
  <HatenaBookmarkButton url={url}/>
  <TwitterButton url={url} title={shareTitle}/>
  <LinkButton url={url}/>
</>;

export default ShareButtons;
