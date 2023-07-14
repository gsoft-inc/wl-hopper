import { HopperProvider, type ColorScheme } from "@hopper-ui/styled-system";
import type { ReactElement, ReactNode } from "react";
import { type RenderHookOptions, renderHook, render, type RenderOptions } from "@testing-library/react";

export interface ThemeProviderWrapperOptions {
    colorScheme?: ColorScheme;
}

function createThemeProviderWrapper({ colorScheme = "light" }: ThemeProviderWrapperOptions = {}) {
    return ({ children }: { children?: ReactNode }) => {
        return (
            <HopperProvider colorScheme={colorScheme}>
                {children}
            </HopperProvider>
        );
    };
}

export function renderWithTheme(ui: ReactElement, testingLibraryOptions: RenderOptions = {}, themeOptions?: ThemeProviderWrapperOptions) {
    return render(ui, {
        wrapper: createThemeProviderWrapper(themeOptions),
        ...testingLibraryOptions
    });
}

export function renderHookWithTheme<TProps, TResult>(callback: (props: TProps) => TResult, renderHookOptions: RenderHookOptions<TProps> = {}, themeOptions?: ThemeProviderWrapperOptions) {
    return renderHook(callback, {
        wrapper: createThemeProviderWrapper(themeOptions),
        ...renderHookOptions
    });
}

export * from "@testing-library/dom";
export * from "@testing-library/react";
export { renderWithTheme as render };
export { renderHookWithTheme as renderHook };
