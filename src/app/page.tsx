import Navbar from "@/components/global/Navbar";
import Header from "./home/Header";
import Article from "./home/Article";
import Footer from "../components/global/Footer";
import Cards from "./home/Cards";

export default function Home() {
  return (
    <div>
      <Header />
      <Cards />
      <Article />
      <Footer />
    </div>
  );
}
