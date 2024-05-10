import { UserInfo } from "./UserInfo";
import { printProps } from "./printProps";

const UserInfoWrapped = printProps(UserInfo);

function App() {
  return <UserInfoWrapped a={1} b="Hello" c={{ name: "Shaun" }} />;
}

export default App;
