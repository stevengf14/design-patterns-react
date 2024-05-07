//import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

function App() {
  return (
    <>
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="124">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="125">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
