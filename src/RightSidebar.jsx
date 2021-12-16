import React from "react";

function RightSidebar(props) {
  const { isShowRightSidebar } = props;

  return (
    <div
      className={
        isShowRightSidebar
          ? "right-sidebar-container right-sidebar-show"
          : "right-sidebar-container"
      }
    >
      Right Sidebar
    </div>
  );
}

export default RightSidebar;
