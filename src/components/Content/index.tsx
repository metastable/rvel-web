import React from 'react';

interface IContentProps{
  className: string;
  content: string;
}

export const HTMLContent: React.FunctionComponent<IContentProps> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);
const Content: React.FunctionComponent<IContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
);
export default Content;
