import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";

const { HashRouter, Routes, Route } = require("react-router-dom");

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
