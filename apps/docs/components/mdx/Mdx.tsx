import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "@/components/mdx/components.tsx";

interface MdxProps {
    code: string;
}

const Mdx = ({ code }: MdxProps) => {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
};

export default Mdx;
