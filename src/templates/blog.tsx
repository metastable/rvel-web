import React, { Component } from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import config from '../../config';
import Helmet from 'react-helmet';
import PostCard from '../components/PostCard';
import Layout from '../components/Layout';

interface IPaginationLinkProps {
  test: boolean;
  url: string;
  text: string;
}

const PaginationLink: React.FunctionComponent<IPaginationLinkProps> = props => {
  if (!props.test) {
    return (
      <Link to={`/blog/${props.url}`} className="button is-rounded">
        {props.text}
      </Link>
    );
  } else {
    return (
      <span className="button is-rounded" aria-disabled="true">
        {props.text}
      </span>
    );
  }
};
export default class BlogPage extends Component<{ pageContext: any }, {}> {
  render() {
    const { pageContext } = this.props;
    const { group, index, first, last } = pageContext;
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
    const nextUrl = (index + 1).toString() + '/';
    const websiteSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    };
    return (
      <Layout>
        <Helmet>
          <title>Blog | Gatsby Starter Business</title>

          <script type="application/ld+json">{JSON.stringify(websiteSchemaOrgJSONLD)}</script>
        </Helmet>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="section">
                    <h1 className="title">Blog</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <PostCard posts={group} />
          <section className="section">
            <div className="buttons is-centered">
              <PaginationLink test={first} url={previousUrl} text="Previous Page" />
              <PaginationLink test={last} url={nextUrl} text="Next Page" />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
