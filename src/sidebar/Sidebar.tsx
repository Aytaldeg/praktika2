import { Fragment, useState } from "react";
import "../sidebar/Sidebar.scss";

export function Sidebar() {
  const [Sidebar, setSidebar] = useState<boolean>(false);
  return (
    <Fragment>
      {Sidebar ? (
        <div className="sidebar_active">
          <div className="sidebar_active-items">
            <div
              className="sidebar_active-items-switch"
              onClick={() => setSidebar(!Sidebar)}
            >
              Switch
            </div>
            <div className="sidebar_active-items-item">First</div>
            <div className="sidebar_active-items-item">Second</div>
            <div className="sidebar_active-items-item">Third</div>
          </div>
        </div>
      ) : (
        <div className="sidebar">
          <div className="sidebar-items">
            <div
              className="sidebar-items-switch"
              onClick={() => setSidebar(!Sidebar)}
            >
              S
            </div>
            <div className="sidebar-items-item">1</div>
            <div className="sidebar-items-item">2</div>
            <div className="sidebar-items-item">3</div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
