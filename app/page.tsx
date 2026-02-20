import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Psychotherapy from "./components/Psychotherapy";
import Profile from "./components/Profile";
import Methods from "./components/Methods";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Psychotherapy/>
    <Profile/>
    <Methods/>
    <ContactSection/>
    <Footer/>
    </>
  );
}
