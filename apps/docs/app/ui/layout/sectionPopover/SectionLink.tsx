import { UseSectionLinkContext } from "./sectionLinkContext";

interface SectionLinkProps {
    children: React.ReactNode;
    className: string;
    href: string;
}

const SectionLink: React.FC<SectionLinkProps> = ({ children, className, href }) => {
    const { onClick } = UseSectionLinkContext();

    return (
        <a
            className={className}
            href={href}
            onClick={onClick}
        >
            {children}
        </a>
    );
};

export default SectionLink;
