import Tabs from "@/components/tabs/Tabs.tsx";
import { HighlightCode, highlightCode } from "@/components/highlightCode";

import type { ReactElement } from "react";

export interface PackageInstallationProps {
    library: string;
    mode: "dev" | "prod";
}

type MethodIcons = Record<typeof methods[number], ReactElement>;

const methods = ["pnpm", "yarn", "npm"] as const;

const methodsIcons: MethodIcons = {
    pnpm: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 156 156">
        <path fill="#F9AD00"
            d="M48.78 48.78H0V0h48.78v48.78ZM102.44 48.78H53.66V0h48.78v48.78ZM156.1 48.78h-48.78V0h48.78v48.78Z"
        />
        <path fill="#4E4E4E" d="M102.44 102.44H53.66V53.66h48.78v48.78Z" />
        <path fill="#F9AD00" d="M156.1 102.44h-48.78V53.66h48.78v48.78Z" />
        <path fill="#4E4E4E"
            d="M48.78 156.1H0v-48.78h48.78v48.78ZM102.44 156.1H53.66v-48.78h48.78v48.78ZM156.1 156.1h-48.78v-48.78h48.78v48.78Z"
        />
    </svg>,
    yarn: <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
        <path fill="#368FB9"
            d="M128 0C57.328 0 0 57.328 0 128s57.328 128 128 128 128-57.328 128-128S198.672 0 128 0"
        />
        {/* eslint-disable max-len */}
        <path fill="#FFF"
            d="M203.317 174.06c-7.907 1.878-11.91 3.608-21.695 9.983-15.271 9.884-31.976 14.48-31.976 14.48s-1.383 2.076-5.387 3.015c-6.918 1.68-32.963 3.114-35.335 3.163-6.376.05-10.28-1.63-11.367-4.25-3.311-7.907 4.744-11.367 4.744-11.367s-1.779-1.087-2.817-2.076c-.939-.939-1.927-2.816-2.224-2.125-1.235 3.015-1.878 10.379-5.189 13.69-4.547 4.596-13.146 3.064-18.236.395-5.585-2.965.395-9.933.395-9.933s-3.015 1.779-5.436-1.878c-2.175-3.36-4.2-9.094-3.657-16.16.593-8.056 9.587-15.865 9.587-15.865s-1.581-11.91 3.608-24.117c4.695-11.12 17.347-20.065 17.347-20.065s-10.626-11.762-6.672-22.338c2.57-6.92 3.608-6.87 4.448-7.166 2.965-1.137 5.831-2.373 7.957-4.695 10.625-11.466 24.166-9.292 24.166-9.292s6.425-19.52 12.356-15.715c1.828 1.186 8.401 15.814 8.401 15.814s7.018-4.102 7.809-2.57c4.25 8.254 4.744 24.019 2.866 33.607-3.163 15.814-11.07 24.315-14.233 29.652-.741 1.236 8.5 5.14 14.332 21.3 5.387 14.777.593 27.182 1.433 28.566.148.247.198.346.198.346s6.177.494 18.582-7.166c6.622-4.102 14.48-8.698 23.425-8.797 8.65-.149 9.094 9.983 2.57 11.564zm11.763-7.265c-.89-7.017-6.82-11.86-14.431-11.762-11.367.148-20.905 6.03-27.231 9.934-2.471 1.532-4.596 2.669-6.425 3.509.395-5.733.05-13.245-2.916-21.498-3.608-9.885-8.45-15.963-11.91-19.472 4.003-5.832 9.489-14.332 12.058-27.478 2.224-11.219 1.533-28.664-3.558-38.45-1.038-1.976-2.767-3.41-4.942-4.003-.89-.247-2.57-.741-5.881.198-4.991-10.329-6.721-11.416-8.056-12.306-2.767-1.779-6.029-2.174-9.093-1.038-4.102 1.483-7.61 5.437-10.922 12.454a51.47 51.47 0 0 0-1.334 3.015c-6.277.445-16.161 2.718-24.513 11.762-1.038 1.137-3.064 1.977-5.19 2.768h.05c-4.349 1.532-6.326 5.09-8.747 11.515-3.361 8.994.098 17.84 3.508 23.574-4.645 4.151-10.823 10.773-14.084 18.532-4.053 9.588-4.498 18.978-4.35 24.068-3.459 3.658-8.796 10.527-9.39 18.237-.79 10.773 3.114 18.088 4.844 20.756.494.791 1.038 1.434 1.63 2.076-.197 1.334-.246 2.768.05 4.25.643 3.46 2.817 6.277 6.128 8.056 6.524 3.46 15.617 4.942 22.635 1.433 2.52 2.669 7.117 5.239 15.469 5.239h.494c2.125 0 29.109-1.433 36.967-3.36 3.509-.841 5.93-2.324 7.512-3.658 5.04-1.582 18.977-6.326 32.123-14.826 9.291-6.03 12.504-7.315 19.423-8.995 6.72-1.63 10.922-7.759 10.082-14.53z"
        />
    </svg>,
    npm: <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
        <path fill="#C12127" d="M0 256V0h256v256z" />
        <path fill="#FFF" d="M48 48h160v160h-32V80h-48v128H48z" />
    </svg>
};

const installMethods = methods.map(method => ({
    category: method,
    title: method,
    titleIcon: methodsIcons[method]
}));

const formatCode = async (method: string, library: string, mode: string) => {
    const code = `${method} ${method === "npm" ? "install" : "add"} ${mode === "dev" ? "-D" : ""} @hopper-ui/${library}`;

    return await highlightCode(`
\`\`\`shell
${code.replace(/\s{2,}/g, " ")}
\`\`\`
`);
};

const PackageInstallation = async ({ library, mode = "prod" }: PackageInstallationProps) => {
    const tabsContent = await Promise.all(methods.map(async method => {
        const code = await formatCode(method, library, mode);

        return (
            <div key={method}>
                <HighlightCode code={code} />
            </div>
        );
    }));

    return (
        <Tabs tabs={installMethods}>
            {tabsContent}
        </Tabs>
    );
};

export default PackageInstallation;
