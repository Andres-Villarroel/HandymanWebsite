import React from "react";
const Sidebar = () => {
    const isSidebarDisabled = window.matchMedia('(max-width: 600px)').matches;
    if (isSidebarDisabled) {
        return null;
    }
    return (
        <div>
            {/* {sidebar content goes here} */}
        </div>
    );
};
export default Sidebar