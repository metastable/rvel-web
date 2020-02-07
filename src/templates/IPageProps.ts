export interface IFrontmatter {
  title: string;
  subtitle: string;
  meta_title: string;
  meta_description: string;
  contacts: string;
}

export interface IPageProps {
  data?: {
    markdownRemark?: {
      frontmatter?: IFrontmatter;
    };
  };
}
