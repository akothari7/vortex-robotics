import { UI_Constants } from "../ui/Constants";
import Layout from "../ui/general/Layout";
import { Header } from "../ui/typography/Header";
import { useQuery } from "react-query";

const IndexPage = () => {
  return (
    <div>
      <h1>admin</h1>
      <a href="http://localhost:4000/api/auth/logout">Logout</a>
    </div>
  );
};

export default IndexPage;
