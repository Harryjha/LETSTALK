import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";

export const LiveButton =() => {

    const call = useCall();
    const { useIsCallLive } = useCallStateHooks();
  const isLive = useIsCallLive();

  return(
    <button 
    style={{
        backgroundColor: "rgb(35, 35, 35)",
        boxShadow: isLive ? "0 0 1px 2px rgba(0, 255, 0, 0.3)" : "none",
      }}
    onClick={async ()=> {
        if(isLive){
            call?.stopLive();
        }else{
        call?.goLive();
        }
    }}
    
    >
        
         {isLive ? "Stop Live" : "Go Live"}</button>

   
    );
};