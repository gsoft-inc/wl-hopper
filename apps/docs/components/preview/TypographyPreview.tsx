import "@hopper-ui/tokens/fonts.css";
import "./preview.css";

interface TypographyPreviewProps {
    values?: TypographyValues;
    style?: React.CSSProperties;
}

interface TypographyValues {
    lineHeight?: string;
    fontWeight?: string;
    fontSize?: string;
    fontFamily?: string;
}


const TypographyPreview = ({ values, style }: TypographyPreviewProps) => {
    return <div className="hd-preview hd-preview--font hd-preview--typography" style={{ lineHeight: values?.lineHeight, fontWeight: values?.fontWeight, fontSize: values?.fontSize, fontFamily: values?.fontFamily, ...style }}>Aa</div>;
};

export default TypographyPreview;

