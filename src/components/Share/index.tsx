import React, { Component } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
//@ts-ignore
import config from '../../../config';
import './styles.sass';

class Share extends Component<{ title: string; slug: string; excerpt: string; mobile?: boolean }, {}> {
  render() {
    const { title, slug, excerpt, mobile } = this.props;
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
    const url = config.siteUrl + realPrefix + slug;
    const iconSize = mobile ? 36 : 48;
    const filter = (count: number) => (count > 0 ? count : '');
    return (
      <div className="social-links">
        <RedditShareButton url={url} title={title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>{count => <div className="share-count">{filter(count)}</div>}</RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton url={url} title={title} description={excerpt}>
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </div>
    );
  }
}

export default Share;
