import React from 'react';
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { SearchOutlined} from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330; // IST offset UTC +5:30

var ISTTime = new Date(
  currentTime.getTime() + (ISTOffset + currentOffset) * 60000
);

// ISTTime now represents the time in IST coordinates

var hoursIST = ISTTime.getHours();
var minutesIST = ISTTime.getMinutes();

function Chat() {
    return (
      <div className="chat">
        <div className="chatHeader">
          <Avatar />
          <div className="chatHeaderInfo">
            <h3>Room number</h3>
            <p>Last seen</p>
          </div>
          <div className="chatHeaderRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="chatBody">
          <p className="chatMessage">
            <span className="chatName">Sachin</span>
            This is a message.
            <span className="chatTime">{hoursIST + ":" + minutesIST}</span>
          </p>
          <p className="chatMessage chatReceive">
            <span className="chatName">Sachin</span>
            This is a message.
            <span className="chatTime">{hoursIST + ":" + minutesIST}</span>
          </p>
        </div>
        <div className="chatFooter">
          <InsertEmoticonIcon/>
          <form>
            <input type="text" placeholder="Send a message" />
            <button type="submit">Send</button>
          </form>
          <MicIcon/>
        </div>
      </div>
    );
}

export default Chat
