import { HopperProvider, type ColorScheme } from "../../packages/components/src/index.ts";
import { render, renderHook, type RenderHookOptions, type RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";

export interface HopperProviderWrapperOptions {
    colorScheme?: ColorScheme;
}

function createHopperProviderWrapper({ colorScheme = "light" }: HopperProviderWrapperOptions = {}): RenderOptions["wrapper"] {
    return ({ children }) => {
        return (
            <HopperProvider colorScheme={colorScheme}>
                {children}
            </HopperProvider>
        );
    };
}

export function renderWithTheme(
    ui: ReactElement,
    testingLibraryOptions: RenderOptions = {},
    themeOptions?: HopperProviderWrapperOptions
): ReturnType<typeof render> {
    return render(ui, {
        wrapper: createHopperProviderWrapper(themeOptions),
        ...testingLibraryOptions
    });
}

export function renderHookWithTheme<TProps, TResult>(
    callback: (props: TProps) => TResult, renderHookOptions: RenderHookOptions<TProps> = {},
    themeOptions?: HopperProviderWrapperOptions
): ReturnType<typeof renderHook<TResult, TProps>> {
    return renderHook(callback, {
        wrapper: createHopperProviderWrapper(themeOptions),
        ...renderHookOptions
    });
}

export { act, fireEvent, screen, waitFor } from "@testing-library/react";
export { renderWithTheme as render, renderHookWithTheme as renderHook };

