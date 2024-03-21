import clsx from "clsx";
import Title from "@/components/title/Title.tsx";
import Tag from "@/components/tag/Tag.tsx";
import LinkList, { type Links } from "@/app/ui/components/linkList/LinkList.tsx";
import "./heading.css";

export interface HeadingProps {
    title: string;
    tag?: string;
    description?: string;
    className?: string;
    links?: Links[];
}

const Heading = ({ title, tag, className, description, links }: HeadingProps) => {
    return (
        <div className={clsx("hd-heading", className)}>
            <div className="hd-heading__title">
                <Title as="h1">{title}</Title>
                {tag && <Tag>{tag}</Tag>}
            </div>
            {description && <p className="hd-heading__description">{description}</p>}
            {links && <LinkList className="hd-heading__links" links={links} />}
        </div>
    );
};

export default Heading;
