"use client";

import { allPages } from "contentlayer/generated";
import { notFound } from "next/navigation";

import "./sidebar.css";

export default function SidebarPage() {
    const page = allPages.find(iconPage => iconPage._id === "pages/playground-sidebar.mdx");

    if (!page) {
        notFound();
    }

    return (
        <div className="hd-wrapper hd-flex">
            <div className="hd-container">
                <main>
                    <nav className="sidebar">
                        <ul>
                            <li className="sidebar-item">
                                <a href="#section-1">Item & 12</a>
                            </li>
                            <li className="sidebar-item selected">
                                <a href="#section-2">Item 02</a>
                            </li>
                            <li className="sidebar-item">
                                <a href="#section-3">Item 33</a>
                            </li>
                        </ul>
                    </nav>
                </main>
            </div>
        </div>
    );
}
