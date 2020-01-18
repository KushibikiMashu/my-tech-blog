// @flow strict
import React from 'react';
import TwitterButton from './TwitterButton';
import HatenaBookmarkButton from './HatenaBookmarkButton';
import PocketButton from './PocketButton';
import LinkButton from './LinkButton';

type Props = {
  title: string,
  shareTitle: string,
  url: string,
}

const ShareButtons = ({ title, shareTitle, url }: Props) => <>
  <TwitterButton url={url} title={shareTitle}/>
  <HatenaBookmarkButton url={url}/>
  <PocketButton url={url} title={title}/>
  <LinkButton url={url}/>
</>;

export default ShareButtons;