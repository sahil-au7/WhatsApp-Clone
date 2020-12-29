import React from 'react'
import "./Sidebar.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, Icon, IconButton } from '@material-ui/core';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn5.vectorstock.com%2Fi%2F1000x1000%2F07%2F39%2Fman-avatar-profile-view-vector-22890739.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fman-avatar-profile-view-vector-22890739&tbnid=rkx7znchm9w4fM&vet=12ahUKEwjE-cGj0PLtAhWBGCsKHeY5AY0QMygzegQIARBY..i&docid=8zofVYB6oF_NSM&w=1000&h=1080&q=avatar%20image%20cool&ved=2ahUKEwjE-cGj0PLtAhWBGCsKHeY5AY0QMygzegQIARBY" />
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
        </div>
    )
}

export default Sidebar
