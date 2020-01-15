// @flow strict
import React from 'react';
import TwitterButton from './TwitterButton';
import HatenaBookmarkButton from './HatenaBookmarkButton';
import PocketButton from './PocketButton';
import ClipButton from './ClipButton';

type Props = {
  title: string,
  shareTitle: string,
  url: string,
}

const ShareButtons = ({ title, shareTitle, url }: Props) => <>
  <TwitterButton url={url} title={shareTitle}/>
  <HatenaBookmarkButton url={url}/>
  <PocketButton url={url} title={title}/>
  <ClipButton url={url}/>
</>;

export default ShareButtons;