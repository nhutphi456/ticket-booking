import { Button } from "antd";
import { redirect } from "react-router-dom";
import MainLayout from "../layouts/main";
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
