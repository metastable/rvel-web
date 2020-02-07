import React from 'react';

export interface ITestimonialsProps {
  testimonials?: {
    quote?: string;
    author?: string;
  }[];
}

const Testimonials: React.FunctionComponent<ITestimonialsProps> = ({ testimonials }) => (
  <div>
    {testimonials &&
      testimonials.map((testimonial, id) => (
        <article className="message" key={id}>
          <div className="message-body">
            {testimonial.quote}
            <br />
            <cite> – {testimonial.author}</cite>
          </div>
        </article>
      ))}
  </div>
);
export default Testimonials;
