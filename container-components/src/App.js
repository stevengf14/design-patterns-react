//import { CurrentUserLoader } from "./CurrentUserLoader";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/241" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
