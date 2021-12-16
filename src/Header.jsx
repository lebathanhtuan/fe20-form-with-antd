import React from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

function Header(props) {
  const { setIsShowLeftSidebar, name, address } = props;

  return (
    <div className="header">
      <div>
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "white" }} />}
          onClick={() => setIsShowLeftSidebar(true)}
        ></Button>
        Logo
      </div>
      <div>
        Hello {name}, {address}
      </div>
    </div>
  );
}

export default Header;
