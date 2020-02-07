import React from 'react';
import favicon from './assets/img/favicon.ico';

interface IHTMLProps {
  htmlAttributes?: object;
  headComponents?: any[];
  bodyAttributes?: object;
  preBodyComponents?: any[];
  postBodyComponents?: any[];
  body: string;
}

export default class HTML extends React.Component<IHTMLProps, {}> {
  constructor(props: IHTMLProps) {
    super(props);
  }

  render() {
    // @ts-ignore
    return (
      <html lang="en" className="has-navbar-fixed-top">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
