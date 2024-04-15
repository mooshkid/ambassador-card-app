import { useState } from "react";
import { CardState, CardItem } from "./types/types";
import "./styles/main.scss";
import CardCanvas from "./ components/CardCanvas";

const AmbassadorCard = () => {
  const initialState: CardState = {
    id: {
      value: "No. 1234567890",
      display: true,
      fontSize: 16,
      color: "hotpink",
      xPosition: 375,
      yPosition: 100,
    },
    name: {
      value: "John Smith",
      display: true,
      fontSize: 24,
      color: "turquoise",
      xPosition: 375,
      yPosition: 150,
    },
    date: {
      value: "2024-04-14",
      display: true,
      fontSize: 12,
      color: "black",
      xPosition: 375,
      yPosition: 200,
    },
    points: {
      value: "9000 pt",
      display: true,
      fontSize: 18,
      color: "orange",
      xPosition: 375,
      yPosition: 250,
    },
  };

  const [ambassadorCardState, setAmbassadorCardState] = useState<CardState>(JSON.parse(localStorage.getItem("ambassadorCardState") as string) || initialState);

  const saveToLocalStorage = () => {
    localStorage.setItem("ambassadorCardState", JSON.stringify(ambassadorCardState));
  };

  const handleChange = (row: keyof CardState, key: keyof CardItem, value: string | number | boolean) => {
    setAmbassadorCardState({
      ...ambassadorCardState,
      [row]: { ...ambassadorCardState[row], [key]: value },
    });
    console.log("ambassador card state", ambassadorCardState);
  };

  const handleReset = () => {
    setAmbassadorCardState(initialState);
  };

  return (
    <div className='ambassador-card'>
      <CardCanvas cardState={ambassadorCardState} />
      <div className='ambassador-card-table'>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Value</th>
              <th>Display</th>
              <th>Size</th>
              <th>Color</th>
              <th>X Position</th>
              <th>Y Position</th>
            </tr>
          </thead>
          <tbody>
            {/* id row  */}
            <tr>
              <td>ID</td>
              <td>
                <input type='text' value={ambassadorCardState.id.value} onChange={(e) => handleChange("id", "value", e.target.value)} />
              </td>
              <td>
                <input type='checkbox' checked={ambassadorCardState.id.display} onChange={(e) => handleChange("id", "display", e.target.checked)} />
              </td>
              <td>
                <input type='number' value={ambassadorCardState.id.fontSize} onChange={(e) => handleChange("id", "fontSize", parseInt(e.target.value))} />
              </td>
              <td>
                <input type='text' value={ambassadorCardState.id.color} onChange={(e) => handleChange("id", "color", e.target.value)} />
              </td>
              <td>
                <input type='number' value={ambassadorCardState.id.xPosition} onChange={(e) => handleChange("id", "xPosition", parseInt(e.target.value))} />
              </td>
              <td>
                <input type='number' value={ambassadorCardState.id.yPosition} onChange={(e) => handleChange("id", "yPosition", parseInt(e.target.value))} />
              </td>
            </tr>

            {/* name row */}
            <tr>
              <td>Name</td>
              <td>
                <input type='text' value={ambassadorCardState.name.value} onChange={(e) => handleChange("name", "value", e.target.value)} />
              </td>
              <td>
                <input type='checkbox' checked={ambassadorCardState.name.display} onChange={(e) => handleChange("name", "display", e.target.checked)} />
              </td>
              <td>
                <input type='number' value={ambassadorCardState.name.fontSize} onChange={(e) => handleChange("name", "fontSize", parseInt(e.target.value))} />
              </td>
              <td>
                <input type='text' value={ambassadorCardState.name.color} onChange={(e) => handleChange("name", "color", e.target.value)} />
              </td>
              <td>
                <input type='number' value={ambassadorCardState.name.xPosition} onChange={(e) => handleChange("name", "xPosition", parseInt(e.target.value))} />
              </td>
              <td>
                <input type='number' value={ambassadorCardState.name.yPosition} onChange={(e) => handleChange("name", "yPosition", parseInt(e.target.value))} />
              </td>
            </tr>

            {/* date row  */}
            <tr>
              <td>Date</td>
              <td>
                <input type='date' value={ambassadorCardState.date.value} onChange={(e) => handleChange("date", "value", e.target.value)} />
              </td>
              <td>
                <input type='checkbox' checked={ambassadorCardState.date.display} onChange={(e) => handleChange("date", "display", e.target.checked)} />
              </td>
              <td>
                <input type='number' value={ambassadorCardState.date.fontSize} onChange={(e) => handleChange("date", "fontSize", parseInt(e.target.value))} />
              </td>
              <td>
                <input type='text' value={ambassadorCardState.date.color} onChange={(e) => handleChange("date", "color", e.target.value)} />
              </td>
              <td>
                <input type='number' value={ambassadorCardState.date.xPosition} onChange={(e) => handleChange("date", "xPosition", parseInt(e.target.value))} />
              </td>
              <td>
                <input type='number' value={ambassadorCardState.date.yPosition} onChange={(e) => handleChange("date", "yPosition", parseInt(e.target.value))} />
              </td>
            </tr>

            {/* points row  */}
            <tr>
              <td>Points</td>
              <td>
                <input type='text' value={ambassadorCardState.points.value} onChange={(e) => handleChange("points", "value", e.target.value)} />
              </td>
              <td>
                <input type='checkbox' checked={ambassadorCardState.points.display} onChange={(e) => handleChange("points", "display", e.target.checked)} />
              </td>
              <td>
                <input
                  type='number'
                  value={ambassadorCardState.points.fontSize}
                  onChange={(e) => handleChange("points", "fontSize", parseInt(e.target.value))}
                />
              </td>
              <td>
                <input type='text' value={ambassadorCardState.points.color} onChange={(e) => handleChange("points", "color", e.target.value)} />
              </td>
              <td>
                <input
                  type='number'
                  value={ambassadorCardState.points.xPosition}
                  onChange={(e) => handleChange("points", "xPosition", parseInt(e.target.value))}
                />
              </td>
              <td>
                <input
                  type='number'
                  value={ambassadorCardState.points.yPosition}
                  onChange={(e) => handleChange("points", "yPosition", parseInt(e.target.value))}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='buttons'>
          <button onClick={saveToLocalStorage}>Save</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorCard;
