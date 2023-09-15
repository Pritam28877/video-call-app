import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Room = () => {
  const { roomID } = useParams();
  const meeting = async (element) => {
    const appID = 189493556;
    const serverSecret = "5f7664356598c2f13f3339cdead04d83";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Guset"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };
  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default Room;
