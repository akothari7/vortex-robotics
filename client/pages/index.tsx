import { UI_Constants } from "../ui/Constants";
import Layout from "../ui/general/Layout";
import axios from "axios";
import { Header } from "../ui/typography/Header";

const IndexPage = () => (
  <Layout title="Vortex Robotics | Home">
    <a href="http://localhost:4000/api/auth/github">Login with GitHub</a>
  </Layout>
);

export default IndexPage;
