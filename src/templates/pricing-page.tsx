import React from 'react';
import { graphql } from 'gatsby';
import PricingPageTemplate from '../components/PricingPageTemplate';
import Layout from '../components/Layout';
import { IPageProps } from './IPageProps';

const PricingPage: React.FunctionComponent<IPageProps> = ({ data }) => {
  // @ts-ignore
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <PricingPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};
export default PricingPage;
export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
