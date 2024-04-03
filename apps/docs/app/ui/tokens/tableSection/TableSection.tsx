"use client";

import React from "react";
import Table from "@/app/ui/tokens/table/Table";

import "@hopper-ui/tokens/fonts.css";

interface TokenProps {
    name: string;
    value: string;
}

interface TableSectionProps {
    tokens: TokenProps[];
    categories: string[];
    excludedCategories?: string[];
    categoryKey: string;
}

const TableSection = ({ tokens, categories, excludedCategories, categoryKey }: TableSectionProps) => {
    const categoryTokens = tokens.filter(token => {
        const excludedCategoryTokens = excludedCategories?.some(category => token.name.includes(category));

        return categories.some(category => token.name.includes(category)) && !excludedCategoryTokens;
    });

    return <div className="hd-table-section">
        <Table category={categoryKey} data={categoryTokens} />
    </div>;
};

export default TableSection;
