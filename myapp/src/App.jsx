import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OnlineDelivery from "./components/OnlineDelivery";
import TopRest from "./components/TopRest";

const App = () => {
  return (
    <div>
      <Header />
      <Category />
      <TopRest />
      <OnlineDelivery />
      <Footer />
    </div>
  );
};

export default App;
