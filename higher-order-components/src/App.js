import { withUser } from "./withUser";
import { UserInfo } from "./UserInfo";
import { printProps } from "./printProps";

const UserInfoWithLoader = withUser(UserInfo, "123");

function App() {
  return <UserInfoWithLoader />;
}

export default App;
