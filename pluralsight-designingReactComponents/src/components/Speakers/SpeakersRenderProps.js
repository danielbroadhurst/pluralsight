function SpeakersRenderProps(props) {
  const speakers = [
    { imgSrc: "https://via.placeholder.com/300", name: "First Speaker" },
    { imgSrc: "https://via.placeholder.com/300", name: "Second Speaker" },
    { imgSrc: "https://via.placeholder.com/300", name: "Third Speaker" },
  ];
  return props.children({
    speakers: speakers,
  });
}

export default SpeakersRenderProps;
