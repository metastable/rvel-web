import React from 'react';

export interface IGridItem {
  image?: string;
  text?: string;
}

interface IOfferingsProps {
  gridItems?: IGridItem[];
}

const Offerings: React.FunctionComponent<IOfferingsProps> = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-6" style={{ borderRadius: '5px' }}>
        <section className="section">
          <p className="has-text-centered">
            <img alt="" src={item.image} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);
export default Offerings;
