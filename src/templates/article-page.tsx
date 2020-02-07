import React from 'react';
import { graphql } from 'gatsby';
import { HTMLContent } from '../components/Content';
import ArticleTemplate from '../components/ArticleTemplate';
import SEO from '../components/SEO';
import Share from '../components/Share';
import Layout from '../components/Layout';
import { IPageProps } from './IPageProps';

const ArticlePage: React.FunctionComponent<IPageProps> = ({ data }) => {
  // @ts-ignore
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <section className="section">
        <SEO
          title={post.frontmatter.title}
          meta_title={post.frontmatter.meta_title}
          meta_desc={post.frontmatter.meta_description}
          cover={post.frontmatter.cover}
          slug={post.fields.slug}
          date={post.frontmatter.date}
        />
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ArticleTemplate
                content={post.html}
                contentComponent={HTMLContent}
                cover={post.frontmatter.cover}
                meta_title={post.frontmatter.meta_title}
                meta_desc={post.frontmatter.meta_description}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
              />
              <Share
                title={post.frontmatter.title}
                slug={post.fields.slug}
                excerpt={post.frontmatter.meta_description}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ArticlePage;
export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        meta_title
        meta_description
        tags
      }
    }
  }
`;
