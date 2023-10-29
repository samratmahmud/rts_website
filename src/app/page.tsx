import Navbar from "@/components/global/Navbar";
import Header from "./home/Header";
import Card from "./home/Card";
import Article from "./home/Article";
import Footer from "../components/global/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Card />
      <Article />
      <Footer />
    </div>
  );
}
