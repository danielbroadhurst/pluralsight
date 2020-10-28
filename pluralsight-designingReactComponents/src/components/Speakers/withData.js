/**
 * Higher Order Component which will return a new component with data.
 * @param {Number} maxSpeakersToShow
 */
const withData = (maxSpeakersToShow) => (Component) => {
  const speakers = [
    { imgSrc: "https://via.placeholder.com/300", name: "First Speaker" },
    { imgSrc: "https://via.placeholder.com/300", name: "Second Speaker" },
    { imgSrc: "https://via.placeholder.com/300", name: "Third Speaker" },
  ];
  return () => {
    const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
    return <Component speakers={limitSpeakers}></Component>;
  };
};

export default withData;
