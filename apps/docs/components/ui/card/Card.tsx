import type { ReactNode } from "react";

import "./card.css";

const Card = ({ children }: { children: ReactNode }) => (
    <div className="hd-card">
        {children}
    </div>
);

export default Card;
