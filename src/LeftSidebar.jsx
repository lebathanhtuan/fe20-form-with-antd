import React from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

function LeftSidebar(props) {
  const { isShowLeftSidebar, setIsShowLeftSidebar } = props;

  return (
    <div
      className={
        isShowLeftSidebar ? "sidebar-overlay sidebar-show" : "sidebar-overlay"
      }
    >
      <div className="sidebar-container">
        <div className="sidebar-content">
          Sidebar
          <Button
            type="text"
            icon={<CloseOutlined style={{ color: "white" }} />}
            onClick={() => setIsShowLeftSidebar(false)}
          ></Button>
        </div>
      </div>
      <div
        className="sidebar-outside"
        onClick={() => setIsShowLeftSidebar(false)}
      />
    </div>
  );
}

export default LeftSidebar;
