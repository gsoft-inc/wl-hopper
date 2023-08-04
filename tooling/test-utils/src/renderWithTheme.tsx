import { HopperProvider, type ColorScheme } from "@hopper-ui/styled-system";
import type { ReactElement, ReactNode } from "react";
import { type RenderHookOptions, renderHook, render, type RenderOptions } from "@testing-library/react";

export interface HopperProviderWrapperOptions {
    colorScheme?: ColorScheme;
}

function createHopperProviderWrapper({ colorScheme = "light" }: HopperProviderWrapperOptions = {}) {
    return ({ children }: { children?: ReactNode }) => {
        return (
            <HopperProvider colorScheme={colorScheme}>
                {children}
            </HopperProvider>
        );
    };
}
export interface HopperRenderOptions extends RenderOptions {
    withHopperProvider?: boolean;
}

export function renderWithTheme(
    ui: ReactElement,
    testingLibraryOptions: HopperRenderOptions = {},
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
export { renderWithTheme as render };
export { renderHookWithTheme as renderHook };
