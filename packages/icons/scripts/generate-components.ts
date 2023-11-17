

export interface SVGData {
    data: string;
    name: string;
    size: number;
}

export async function generateComponents(SVGsDir: string, svgData: SVGData[]) {
    console.log("SVG Data: ", svgData);
}