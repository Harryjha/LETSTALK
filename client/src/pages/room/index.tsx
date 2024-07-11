import {
    Call,
    OwnCapability,
    StreamCall,
    useCall,
    useCallStateHooks,
    useRequestPermission,
  } from "@stream-io/video-react-sdk";
import { useUser } from "../../user-context";
import { Controls } from "./controls";
import { Participants } from "./participants";
import { PermissionRequestsPanel } from "./permission-request";
export const Room = () => {

    const {useCallCustomData,
        useParticipants,
        useCallCreatedBy,
        } = useCallStateHooks();

        const {user} = useUser()

        const custom = useCallCustomData();
        const participants = useParticipants();
        const createdBy = useCallCreatedBy();


     const{ hasPermission, requestPermission}= useRequestPermission(OwnCapability.SEND_AUDIO)
    return (<div className="room"> 
    <h2 className="title"> {custom?.title ?? "TITLE"} </h2>
    <h3 className="description"> {custom?.description ?? "DESCRIPTION"} </h3>
    <p className="participant-count"> {participants.length} participants </p>
    

    <Participants/>
    {user?.username === createdBy?.id && <PermissionRequestsPanel/>}
    { hasPermission ? ( <Controls/> 
    ) : (
    <button onClick={requestPermission}> &#9995; </button>
    )}

    
    </div>
    );
};