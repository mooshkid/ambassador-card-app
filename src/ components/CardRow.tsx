// const rows = (Object.keys(ambassadorCardState) as (keyof CardState)[]).map((key) => {
//   const row = ambassadorCardState[key]; // Get the row data
//   return (
//     <tr key={key}>
//       <td>{key}</td>
//       <td>
//         <input
//           type='text'
//           value={row.value}
//           onChange={(e) => handleChange(key, "value", e.target.value)}
//         />
//       </td>
//       <td>
//         <input
//           type='number'
//           value={row.fontSize}
//           onChange={(e) => handleChange(key, "fontSize", parseInt(e.target.value))}
//         />
//       </td>
//       <td>
//         <input
//           type='text'
//           value={row.color}
//           onChange={(e) => handleChange(key, "color", e.target.value)}
//         />
//       </td>
//       <td>
//         <input
//           type='number'
//           value={row.xPosition}
//           onChange={(e) => handleChange(key, "xPosition", parseInt(e.target.value))}
//           style={{ width: "100px" }}
//         />
//       </td>
//       <td>
//         <input
//           type='number'
//           value={row.yPosition}
//           onChange={(e) => handleChange(key, "yPosition", parseInt(e.target.value))}
//           style={{ width: "100px" }}
//         />
//       </td>
//     </tr>
//   );
// });
