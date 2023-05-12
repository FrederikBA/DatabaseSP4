import { useState } from "react";
import { subscribe, publish } from "../utils/redisUtils";

const Two = () => {
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    await subscribe(channel);
    alert(`Subscribed to ${channel}`);
  };

  const handlePublish = async () => {
    await publish(channel, message);
    alert(`Published message to ${channel}`);
  };

  return (
    <div className="center">
      <h1>Two</h1>
      <input
        type="text"
        placeholder="Channel"
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
      <br />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
};

export default Two;
