import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/header/header";
import Menu from "../src/components/Menu/Menu";
import Speakers from "../src/components/Speakers/Speakers";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";

import SpeakerContext from "../src/components/Speakers/SpeakerContext";

function Page() {
  const speakers = [
    { imgSrc: "https://via.placeholder.com/300", name: "First Speaker" },
    { imgSrc: "https://via.placeholder.com/300", name: "Second Speaker" },
    { imgSrc: "https://via.placeholder.com/300", name: "Third Speaker" },
  ];
  return (
    <div>
      <Header />
      <Menu />
      <SpeakerContext.Provider value={speakers}>
        <SpeakerSearchBar />
        <Speakers />
      </SpeakerContext.Provider>
      <Footer />
    </div>
  );
}

export default Page;
