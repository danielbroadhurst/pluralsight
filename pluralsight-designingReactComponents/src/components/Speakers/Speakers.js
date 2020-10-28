import React, { useContext } from "react";
import withData from "./withData";
import SpeakersRenderProps from "./SpeakersRenderProps";
import SpeakerContext from "./SpeakerContext";

/**
 * Higher Order Component
 * @param {Array} param0 Speakers array
 */
// const Speakers = ({ speakers }) => {
//   return (
//     <div>
//       {speakers.map(({ imgSrc, name }) => {
//         return <img src={imgSrc} alt={name} key={name} />;
//       })}
//     </div>
//   );
// };
// const maxSpeakersToShow = 2;
// export default withData(maxSpeakersToShow)(Speakers);

/**
 * Render Props which pass data to their child components.
 */
// const Speakers = () => {
//   return (
//     <SpeakersRenderProps>
//       {({ speakers }) => {
//         return (
//           <div>
//             {speakers.map(({ imgSrc, name }) => {
//               return <img src={imgSrc} alt={name} key={name} />;
//             })}
//           </div>
//         );
//       }}
//     </SpeakersRenderProps>
//   );
// };
// export default Speakers;

const Speakers = () => {
  const speakers = useContext(SpeakerContext);
  return (
    <div>
      {speakers.map(({ imgSrc, name }) => {
        return <img src={imgSrc} alt={name} key={name} />;
      })}
    </div>
  );
};

export default Speakers;
