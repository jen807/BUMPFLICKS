import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | BUMPFLICKS</title>
    </Helmet>
  );
};

export default PageTitle;
