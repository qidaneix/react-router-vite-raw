import { useParams } from "react-router-dom";
import { useState } from "react";
export default function Invoice() {
  const params = useParams();
  const [value, setValue] = useState("");
  return (
    <div style={{ margin: "auto" }}>
      <h2>Invoice {params.id}</h2>
      <div>
        子元素非受控：
        <input type="text" />
      </div>
      <div>
        子元素受控：
        <input
          type="text"
          value={value}
          onInput={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
