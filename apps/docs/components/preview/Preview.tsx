import './preview.css';

interface PreviewProps {
    name?: string;
    value?: string;
}

const Preview = ({ name, value}: PreviewProps) => {

    if(name?.includes("space")) {
        return <div className="hd-preview" style={{ width: value }} />
    }

    if(name?.includes("border-radius") || name?.includes("shape")) {
        return <div className="hd-preview hd-preview--stroke" style={{ borderTopLeftRadius: value }} />
    }

    if(name?.includes("font-family")) {
        return <div className="hd-preview hd-preview--font" style={{ fontFamily: value }}>Aa</div>
    }

    return <div className="hd-preview" style={{ backgroundColor: value }} />
}

export default Preview;
