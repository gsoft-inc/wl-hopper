import React from "react";
import "./overlay.css";

interface OverlayProps {
    isOpen: boolean;
}

const Overlay = ({ isOpen }: OverlayProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="hd-overlay"></div>
    );
};

export default Overlay;
