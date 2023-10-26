// components/UserHeader.js
import React from 'react';

function UserHeader() {
    return (
        <div className="user-header">
            <img src="path_to_avatar_image" alt="User Avatar" />
            <span>ID: Chicken#123</span>
            {/* 这里可以放一个设置按钮的图标 */}
        </div>
    );
}

export default UserHeader;
