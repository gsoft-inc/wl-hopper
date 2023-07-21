import type { ReactNode } from "react";
import "./card.css";

export function Card({ children }: { children: ReactNode }) {
    return (
        <div className="hd-card">
            {children}
        </div>
    );
}
