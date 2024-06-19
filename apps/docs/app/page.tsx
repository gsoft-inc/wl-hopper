import Wrapper from "@/app/ui/layout/wrapper/Wrapper";

export default function Home() {
    return (
        <Wrapper>
            <main className="hd-home">
                <h1 className="hd-display">Welcome to Workleap's <strong
                    className="hd-text--strong"
                >Hopper</strong> Design System.</h1>
                <p className="hd-display__subtitle">The documentation is currently in <strong
                    className="hd-text--strong"
                >beta</strong>.</p>
            </main>
        </Wrapper>
    );
}
