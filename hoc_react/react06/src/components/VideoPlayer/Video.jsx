import React, { useEffect } from "react";

const Video = () => {
  const videoRef = useRef();
  useEffect(() => {
    console.log(videoRef.current);
  }, []);
  return (
    <div>
      <Video ref={videoRef} />
    </div>
  );
};

export default Video;
