import Link from "next/link";
import { Icon, EmptyComponent } from "@/components/icon";
import Card from "@/components/card/Card";
import Title from "@/components/title/Title";
import { OverviewComponents } from "@/examples/overview";

interface OverviewTileProps {
    _id: string;
    title: string;
    slug: string;
    description?: string;
}

interface OverviewTileComponentProps {
    component: OverviewTileProps;
}

const OverviewTile = ({ component: { _id, title, slug, description } }: OverviewTileComponentProps) => {
    const ComponentIcon = OverviewComponents[title] || EmptyComponent;

    return (
        <Card align="start" ghost className="hd-component-overview-item" key={_id}>
            <Link
                className="hd-component-overview-item__link"
                href={`/components/${slug}`}
            >
                <div className="hd-component-overview-item__img">
                    <Icon src={ComponentIcon} />
                </div>
                <div className="hd-component-overview-item__caption">
                    <Title as="h3"
                        level={3}
                        className="hd-component-overview-item__title"
                    >{title}</Title>
                    <p className="hd-component-overview-item__description">{description}</p>
                </div>
            </Link>
        </Card>
    );
};

export default OverviewTile;
