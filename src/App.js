import React, { useState } from "react";

function App() {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [taskDifferences, setTaskDifferences] = useState(null);

  const handleCompute = () => {
    // Split the input strings into arrays
    const arrayA = listA.split(",").map((item) => item.trim());
    const arrayB = listB.split(",").map((item) => item.trim());

    // Find differences
    const itemsOnlyInA = arrayA.filter((item) => !arrayB.includes(item));
    const itemsOnlyInB = arrayB.filter((item) => !arrayA.includes(item));
    const itemsInBoth = arrayA.filter((item) => arrayB.includes(item));
    const combined = [...itemsOnlyInA, ...itemsOnlyInB];

    // Set the computed differences in the state
    setTaskDifferences({ itemsOnlyInA, itemsOnlyInB, itemsInBoth, combined });
  };

  return (
    <div className="flex flex-col items-center md:justify-center xs:justify-start md:px-0 xs:p-8 flex-grow flex-1 bg-[#2C3333] text-white w-[100dvw] md:h-[100dvh] gap-4 md:w-[100dvw]">
      <div className="flex flex-col gap-4 lg:w-[60dvw] md:w-[45dvw] xs:w-[100dvw] items-center justify-center">
        <div className="flex md:flex-row justify-center items-center gap-4 xs:flex-col lg:w-full xs:w-full">
          <div className="flex flex-col items-center bg-[#2E4F4F] rounded-md md:px-8 gap-3 box-border xs:px-2">
            <div className="flex flex-col justify-between gap-2 mx-4 my-6">
              <label className="text-left">List A:</label>
              <input
                type="text"
                value={listA}
                onChange={(e) => setListA(e.target.value)}
                className="outline-none rounded-sm text-black"
              />
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#2E4F4F] rounded-md md:px-8 gap-3 box-border xs:px-2">
            <div className="flex flex-col justify-between gap-2 mx-4 my-6">
              <label>List B:</label>
              <input
                type="text"
                value={listB}
                onChange={(e) => setListB(e.target.value)}
                className="outline-none rounded-sm text-black"
              />
            </div>
          </div>
        </div>
        <button
          className="bg-[#0E8388] px-4 py-2 rounded-md hover:ring-2 hover:ring-[#CBE4DE]"
          onClick={handleCompute}
        >
          Compute
        </button>
      </div>

      {taskDifferences && (
        <div className="flex flex-col gap-4 xl:w-[50dvw] lg:w-[60dvw] md:w-[80dvw] xs:w-[70dvw] justify-center bg-[#2E4F4F] rounded-md box-border md:p-8 xs:p-2">
          <h2 className="flex items-center text-2xl justify-center">Differences</h2>
          <div className="md:text-base xs:text-sm">
            <h3>Items present only in A:</h3>
            {taskDifferences.itemsOnlyInA.length > 0 ? (
              <ul>
                {taskDifferences.itemsOnlyInA.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No items</p>
            )}
          </div>
          <div className="md:text-base xs:text-sm">
            <h3>Items present only in B:</h3>
            {taskDifferences.itemsOnlyInB.length > 0 ? (
              <ul>
                {taskDifferences.itemsOnlyInB.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No items</p>
            )}
          </div>
          <div className="md:text-base xs:text-sm">
            <h3>Items present in both A and B:</h3>
            {taskDifferences.itemsInBoth.length > 0 ? (
              <ul>
                {taskDifferences.itemsInBoth.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No items</p>
            )}
          </div>
          <div className="md:text-base xs:text-sm">
            <h3>Items combining both A and B (unique):</h3>
            {taskDifferences.combined.length > 0 ? (
              <ul>
                {taskDifferences.combined.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No items</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
