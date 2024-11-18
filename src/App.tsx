import dayjs from "dayjs";
import Calendar from "./Calendar";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(dayjs("2023-11-08"));

  return (
    <div className="App">
      <Calendar
        value={value}
        locale={"zh-CN"}
        onChange={(val) => {
          setValue(val);
        }}
      ></Calendar>
    </div>
  );
}

export default App;
