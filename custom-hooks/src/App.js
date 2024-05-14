import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    <>
      <UserInfo userId="123" />
      <UserInfo userId="124" />
      <ProductInfo productId="241" />
      <ProductInfo productId="242" />
    </>
  );
}

export default App;
