import React from "react";
import "./overlay.css";

interface OverlayProps {
    isOpen: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="hd-overlay"></div>
    );
};

export default Overlay;
