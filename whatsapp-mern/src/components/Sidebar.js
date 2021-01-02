import React from 'react'
import "./Sidebar.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from "./SidebarChat"
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Fcool-avatar-transparent-image-cool-boy-avatar-PNG-free-PNG-Images_169876&psig=AOvVaw3ASKaNWT0XWtPugDyB6hAU&ust=1609311936044000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCLyPH28u0CFQAAAAAdAAAAABAD" />
                <div className="sidebar__headerRight">
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
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start new chat " type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
