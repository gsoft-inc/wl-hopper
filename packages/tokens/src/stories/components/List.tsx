import "./list.css";

interface ListProps {
    styles: { name: string; value: string }[];
}

export const List = ({ styles }: ListProps) => {
    const listItems = styles.map(style => {
        return (
            <li className="list__item" key={style.name} >
                <div className="list__color" style={{ backgroundColor: style.value }} />
                <span className="list__value">{style.value}</span>
                <span className="list__name">{style.name}</span>
            </li>);
    });

    return <ul className="list">{listItems}</ul>;
};
