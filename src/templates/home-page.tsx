import React from 'react';
import { graphql } from 'gatsby';
import HomePageTemplate from '../components/HomePageTemplate';
import Layout from '../components/Layout';
import { IPageProps } from './IPageProps';

const HomePage: React.FunctionComponent<IPageProps> = ({ data }) => {
  // @ts-ignore
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        offerings={frontmatter.offerings}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};
export default HomePage;
export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;
