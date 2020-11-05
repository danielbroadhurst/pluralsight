import React from "react";
import levenshtein from "levenshtein";

/**
 * Class Component with Render Check
 */
// export class Summary extends React.Component {
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         const oldKeys = Object.keys(this.props.cards);
//         const newKeys = Object.keys(nextProps.cards);
//
//         return oldKeys.length !== newKeys.length;
//     }
//
//     render() {
//     const cards = Object.values(this.props.cards);
//
//     const distances = { max: 0, min: 100000 };
//     cards.forEach(currentCard => {
//       cards.forEach(compareCard => {
//         if (compareCard === currentCard) {
//           return;
//         }
//         const distance = levenshtein(currentCard.label, compareCard.label);
//
//         distances.max = Math.max(distances.max, distance);
//         distances.min = Math.min(distances.min, distance);
//       });
//     });
//
//     return (
//       <div
//         style={{
//           position: "absolute",
//           right: 20,
//           top: 20,
//           backgroundColor: "#fafafa",
//           padding: "10px",
//           border: "3px solid #333"
//         }}
//       >
//         <div>You have {Object.keys(this.props.cards).length} cards!</div>
//         <div>Max difference in labels: {distances.max}</div>
//         <div>Min difference in labels: {distances.min}</div>
//       </div>
//     );
//   }
// }
/**
 * Functional Component
 */
export const Summary = React.memo(function Summary(props) {

    const cards = Object.values(props.cards);

    const distances = {max: 0, min: 100000};
    cards.forEach(currentCard => {
        cards.forEach(compareCard => {
            if (compareCard === currentCard) {
                return;
            }
            const distance = levenshtein(currentCard.label, compareCard.label);

            distances.max = Math.max(distances.max, distance);
            distances.min = Math.min(distances.min, distance);
        });
    });

    return (
        <div
            style={{
                position: "absolute",
                right: 20,
                top: 20,
                backgroundColor: "#fafafa",
                padding: "10px",
                border: "3px solid #333"
            }}
        >
            <div>You have {Object.keys(props.cards).length} cards!</div>
            <div>Max difference in labels: {distances.max}</div>
            <div>Min difference in labels: {distances.min}</div>
        </div>
    );
}, (p1, p2) =>
    Object.values(p1.cards).length ===
    Object.values(p2.cards).length
);

