import type { ReactNode } from "react";
import "./card.css";

export default function Card({ children }: { children: ReactNode }) {
    return (
        <div className="hd-card">
            {children}
        </div>
    );
}
