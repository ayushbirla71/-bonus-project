import React, { useState } from "react";

const Calculator = () => {
  let [Input1, setInput1] = useState(0);
  let [Input2, setInput2] = useState(0);
  let [ans, setans] = useState(0);

  let performTask = (type) => {
    if (type === "sum") {
      setans(Input1 + Input2);
    } else if (type === "mult") {
      setans(Input1 * Input2);
    } else if (type === "devis") {
      setans(Input1 / Input2);
    } else if (type === "subt") {
      setans(Input1 - Input2);
    } else if (type === "spe") {
      setInput1(0);
      setInput2(0);
      setans(0);
    }
  };

  return (
    <div
      style={{
        padding: "1%",
        border: "solid",
        justifyContent: "center",
        width: "50%",
        textAlign: "center",
      }}
    >
        <h1>Mini Calculator</h1>
      <div style={{ border: "solid", margin: "2%" }}>
        <h1 style={{ margin: "2%" }}>{ans}</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2%",
        }}
      >
        <label>
          {" "}
          Input 01{" "}
          <input
          type="number"
          style={{width:"100%"}}
            onChange={(e) => {
              setInput1(e.target.value);
            }}
          />
        </label>
        <label>
          {" "}
          Input 02{" "}
          <input
          type="number"
          style={{width:"100%"}}
            onChange={(e) => {
              setInput2(e.target.value);
            }}
          />
        </label>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2%",
        }}
      >
        <button onClick={() => performTask("sum")}>addition</button>
        <button onClick={() => performTask("subt")}>subtraction</button>
        <button onClick={() => performTask("mult")}>multiplication</button>
        <button onClick={() => performTask("devis")}>devision</button>
      </div>
      <button onClick={() => performTask("spe")}>Delete</button>
    </div>
  );
};

export default Calculator;
