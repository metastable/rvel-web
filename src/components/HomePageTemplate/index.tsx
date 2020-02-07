import React from 'react';
import Helmet from 'react-helmet';
import Offerings, { IGridItem } from '../Offerings';
import Testimonials, { ITestimonialsProps } from '../Testimonials';

interface IHomePageTemplateProps extends ITestimonialsProps {
  title?: string;
  meta_title?: string;
  meta_description?: string;
  heading?: string;
  description?: string;
  offerings?: {
    blurbs?: IGridItem[];
  };
}

const HomePageTemplate: React.FunctionComponent<IHomePageTemplateProps> = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <section className="hero is-primary is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div>
                  <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings && offerings.blurbs} />
                <h2 className="has-text-weight-semibold is-size-2">Testimonials</h2>
                <Testimonials testimonials={testimonials && testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default HomePageTemplate;
