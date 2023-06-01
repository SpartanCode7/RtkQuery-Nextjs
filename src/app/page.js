import Navbar from "../components/organisms/Navbar/Navbar"
import Footer from "../components/organisms/Footer/Footer"
import Product from "@/components/organisms/Product/Product"

export default function Home() {
  return (
    <main className="main">
        <Navbar />
        <Product />
        <Footer />
    </main>
  )
}