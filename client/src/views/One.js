import { useEffect, useState } from "react";
import { getData } from "../utils/redisUtils";

const One = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result.Data);
    }

    fetchData();
  }, []);

  return (
    <div className="center">
      <h1>One</h1>
      <p>{data}</p>
    </div>
  );
};

export default One;
