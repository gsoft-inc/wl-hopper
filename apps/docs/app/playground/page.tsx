import Link from "next/link";
import Title from "@/components/ui/title/Title";

export default function PlaygroundPage() {
    return (
        <main>
            <Title level={1}>Playground Links</Title>
            <ul style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBlock: "2rem"
            }}
            >
                <li>
                    <Link href="/playground/codeblock">Codeblock →</Link>
                </li>
                <li>
                    <Link href="/playground/headings-link">Heading link →</Link>
                </li>
                <li>
                    <Link href="/playground/typography">Typography →</Link>
                </li>
            </ul>
        </main>
    );
}
