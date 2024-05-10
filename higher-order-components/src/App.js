import { withUser } from "./withUser";
import { UserInfo } from "./UserInfo";
import { printProps } from "./printProps";
import { UserInfoForm } from "./UserInfoForm";

const UserInfoWithLoader = withUser(UserInfo, "123");

function App() {
  return <UserInfoForm />;
}

export default App;
