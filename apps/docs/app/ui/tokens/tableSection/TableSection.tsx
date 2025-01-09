import TokenTable from "@/app/ui/tokens/table/TokenTable.tsx";

import "@hopper-ui/tokens/fonts.css";
import { useMemo } from "react";

interface TokenProps {
    name: string;
    value: string;
}

interface TableSectionProps {
    tokens: TokenProps[];
    categories: string[];
    excludedCategories?: string[];
    categoryKey: string;
    tokenType?: "core" | "semantic";
}

const TableSection = ({ tokens, categories, excludedCategories, categoryKey, tokenType }: TableSectionProps) => {
    const categoryTokens = useMemo(() => {
        return tokens.filter(token => {
            const excludedCategoryTokens = excludedCategories?.some(category => token.name.includes(category));

            return categories.some(category => token.name.includes(category)) && !excludedCategoryTokens;
        });
    }, [tokens, categories, excludedCategories]);

    return (
        <div className="hd-table-section">
            <TokenTable tokenType={tokenType} category={categoryKey} data={categoryTokens} />
        </div>
    );
};

export default TableSection;
