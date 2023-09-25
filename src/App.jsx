import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
import LeftContainer from "./layouts/LeftContainer.jsx";
import Visualization from "./layouts/Visualisation/Visualization.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap">
        <LeftContainer />
        <Visualization />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
