import React from 'react';
import "./SideChat.css";
import { Avatar } from '@material-ui/core';

function SideChat() {
    return (
      <div className="sidebarChat">
        <Avatar />
        <div className="sideChat_info">
          <h2>Sachin</h2>
          <p>hello bye</p>
        </div>
      </div>
    );
}

export default SideChat
