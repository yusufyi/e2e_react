import { useState } from "react";
import ChildComponent from "./components/childComponents";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>My First React App</h1>
      <p>Welcome to my first React app.</p>
      <ChildComponent />
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
}

export default App;
