import Footer from "@/componants/Footer";
import Header from "@/componants/Header";

function Mainlayout({ children, ...props }) {
  return <>
 <Header/>
  {children}
  <Footer />
  </>;
}

export default Mainlayout;
