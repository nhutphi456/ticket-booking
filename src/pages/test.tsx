import { Button } from "antd";
import withAuthSync from "../components/authentication/withAuthSync";
import MainLayout from "../layouts/main";
import { redirect } from "react-router-dom";
const TestPage = () => {
  return (
    <MainLayout>
      <Button style={{ zIndex: "1000" }} onClick={() => redirect("/")}>
        home
      </Button>
    </MainLayout>
  );
};

export default TestPage;
