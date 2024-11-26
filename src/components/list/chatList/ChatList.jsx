import React, { useState } from "react";
import "./chatList.css";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);

    return (
        <div className="chatList">
            <div className="Search">
                <div className="searchBar">
                    <img src="/search.png" alt="Search" />
                    <input type="text" placeholder="Search" />
                </div>
                <img 
                    src={addMode ? "/minus.png" : "/plus.png"} 
                    alt="Toggle Add Mode" 
                    className="add" 
                    onClick={() => setAddMode((prev) => !prev)} 
                />
            </div>
            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>User-2</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>User-3</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>User-4</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>User-5</span>
                    <p>Hello</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default ChatList;
