import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from '@material-ui/icons/Search';
import SideChat from './SideChat';

function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar_header">
          <Avatar src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-970-80.jpg.webp" />

          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchIcon />
            <input placeholder="Search or start new chat" type="text" />
          </div>
        </div>
        <div className="sidebar_chats">
            <SideChat />
            <SideChat />
            <SideChat />
        </div>
      </div>
    );
}

export default Sidebar
