"use client";

import { Button as HopperButton, HopperProvider } from "@hopper-ui/components";
import AccessibleIcon from "./home/assets/accessible.svg";
import InternationalIcon from "./home/assets/international.svg";
import TypescriptIcon from "./home/assets/typescript.svg";
import DarkModeIcon from "./home/assets/dark-mode.svg";
import FontSizeIcon from "./home/assets/font-size.svg";
import LineHeightIcon from "./home/assets/line-height.svg";
import MarginIcon from "./home/assets/margin.svg";
import SelectArrowIcon from "./home/assets/select-arrow.svg";
import { ThemeContext } from "@/context/theme/ThemeProvider.tsx";
import { useContext } from "react";
import Button from "../components/button/Button";

import { CalendarIcon, ChartBarIcon, CheckmarkIcon, DeleteIcon, EyeVisibleIcon, FilterIcon, ItalicIcon, LightbulbIcon, LockIcon, MailIcon, ProfileIcon, SearchIcon, ShareIcon, StarIcon, StickyIcon, ThumbsUpIcon, WarningIcon } from "@hopper-ui/icons";

import "@hopper-ui/tokens/fonts.css";
import "./home/home.css";

export default function Home() {
    const { colorMode } = useContext(ThemeContext);

    const theme = colorMode;

    return (
        <div className="hd-wrapper">
            <main className="hd-home">
                <div className="hd-home__heading">
                    <h1 className="hd-home__header">Fusce semper facilisis finibus.</h1>
                    <p className="hd-home__copy">Sed condimentum, arcu sit amet tempus posuere, sapien ex vulputate risus, placerat convallis lectus ex.</p>
                </div>
                <div className="hd-home__ctas">
                    <Button as="a" href="#a" className="hd-button hd-button-primary">Get Started</Button>
                    <a href="https://github.com/gsoft-inc/wl-hopper" className="hd-button hd-button-secondary">Github </a>
                </div>
                <div className="hd-home__features">
                    <div className="hd-home__feature-item">
                        <h2 className="hd-home__feature-title"><AccessibleIcon className="hd-home-feature-title__icon" />Accessible</h2>
                        <p className="hd-home__feature-copy">
                            Built with accessibility in mind Hopper is based on React Aria Components
                        </p>
                    </div>
                    <div className="hd-home__feature-item">
                        <h2 className="hd-home__feature-title"><InternationalIcon className="hd-home-feature-title__icon" />International</h2>
                        <p className="hd-home__feature-copy">
                            Experience is pushed further with internationalization.
                        </p>
                    </div>
                    <div className="hd-home__feature-item">
                        <h2 className="hd-home__feature-title"><TypescriptIcon className="hd-home-feature-title__icon hd-icon-fill" />Typescript</h2>
                        <p className="hd-home__feature-copy">
                            Typescript based for reduced learning curve and error detection.
                        </p>
                    </div>
                    <div className="hd-home__feature-item">
                        <h2 className="hd-home__feature-title"><DarkModeIcon className="hd-home-feature-title__icon" />Dark mode</h2>
                        <p className="hd-home__feature-copy">
                            Switching from light to dark mode couldn't be easier.
                        </p>
                    </div>
                </div>
                <div className="hd-home-samples">
                    <div className="hd-home-samples__col">
                        <div className="hd-home-samples__row">
                            <div className="hd-home-samples__col">
                                <div className="hd-home-sample__item hd-home-sample__item-colors">
                                    <h3 className="hd-home-sample__title">Colors</h3>
                                    <div className="hd-home-sample__colors">
                                        <div className="hd-home-sample__colors-row">
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-200"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-300"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-400"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-500"></span>
                                        </div>
                                        <div className="hd-home-sample__colors-row">
                                            <span className="hd-home-sample__color hd-home-sample__color-sapphire-200"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-sapphire-300"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-sapphire-400"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-sapphire-500"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hd-home-sample__item hd-home-sample__item-sizes">
                                    <h3 className="hd-home-sample__title">Sizes</h3>
                                    <div className="hd-home-sample__sizes">
                                        <div className="hd-home-sample__size hd-home-sample__size-16">
                                            <span className="hd-home-sample__size-text">16</span>
                                            <div className="hd-home-sample__size-bar"></div>
                                        </div>
                                        <div className="hd-home-sample__size hd-home-sample__size-24">
                                            <span className="hd-home-sample__size-text">24</span>
                                            <div className="hd-home-sample__size-bar"></div>
                                        </div>
                                        <div className="hd-home-sample__size hd-home-sample__size-32">
                                            <span className="hd-home-sample__size-text">32</span>
                                            <div className="hd-home-sample__size-bar"></div>
                                        </div>
                                        <div className="hd-home-sample__size hd-home-sample__size-40">
                                            <span className="hd-home-sample__size-text">40</span>
                                            <div className="hd-home-sample__size-bar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hd-home-samples__col">
                                <div className="hd-home-sample__item hd-home-sample__item-text-styles">
                                    <h3 className="hd-home-sample__title">Text Styles</h3>
                                    <div className="hd-home-sample__text-styles">
                                        <div className="hd-home-sample__text-styles-col">
                                            <span className="hd-home-sample__text">A<span className="hd-home-sample__text-lowercase">a</span></span>
                                        </div>
                                        <div className="hd-home-sample__text-styles-col hd-home-sample__text-styles-controls">
                                            <div className="hd-home-sample__control-knob-title">
                                                <span className="hd-home-sample__control-title">Regular</span>
                                                <SelectArrowIcon />
                                            </div>
                                            <div className="hd-home-sample__control-knob">
                                                <FontSizeIcon />
                                                <span className="hd-home-sample__control-knob-value">84</span>
                                            </div>
                                            <div className="hd-home-sample__control-knob">
                                                <LineHeightIcon />
                                                <span className="hd-home-sample__control-knob-value">96</span>
                                            </div>
                                            <div className="hd-home-sample__control-knob">
                                                <MarginIcon />
                                                <span className="hd-home-sample__control-knob-value">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hd-home-sample__item hd-home-sample__item-icons">
                            <h3 className="hd-home-sample__title">Icons</h3>
                            <p className="hd-home-sample__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <HopperProvider colorScheme="light">
                                <div className="hd-home-sample__icons">
                                    <div className="hd-home-sample__icons-row">
                                        <CalendarIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <ChartBarIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <CheckmarkIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <FilterIcon className="hd-home-sample__icons-icon hd-home-sample__icons-icon--strong" size="sm" />
                                        <LightbulbIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <MailIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <SearchIcon className="hd-home-sample__icons-icon hd-home-sample__icons-icon--strong" size="sm" />
                                        <ShareIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <WarningIcon className="hd-home-sample__icons-icon" size="sm" />
                                    </div>
                                    <div className="hd-home-sample__icons-row">
                                        <ThumbsUpIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <LockIcon className="hd-home-sample__icons-icon hd-home-sample__icons-icon--active" size="sm" />
                                        <ItalicIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <EyeVisibleIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <LockIcon className="hd-home-sample__icons-icon hd-home-sample__icons-icon--strong" size="sm" />
                                        <DeleteIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <StarIcon className="hd-home-sample__icons-icon" size="sm" />
                                        <StickyIcon className="hd-home-sample__icons-icon hd-home-sample__icons-icon--strong" size="sm" />
                                        <ProfileIcon className="hd-home-sample__icons-icon" size="sm" />
                                    </div>
                                </div>
                            </HopperProvider>
                        </div>
                    </div>
                    <div className="hd-home-sample__item hd-home-sample__item-components">
                        <h3 className="hd-home-sample__title">Components</h3>
                        <p className="hd-home-sample__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="hd-home-sample-components">
                            <div className="hd-home-sample-components__item">
                                <div className="hd-home-sample-components__fake-avatar"></div>
                            </div>
                            <div className="hd-home-sample-components__item">
                                <div className="hd-home-sample-components__fake-select"></div>
                            </div>
                            <div className="hd-home-sample-components__item">
                                <HopperProvider colorScheme={theme}>
                                    <div className="hd-home-sample-components__buttons">
                                        <HopperButton>Confirm</HopperButton>
                                        <HopperButton variant="secondary">I need help</HopperButton>
                                    </div>
                                </HopperProvider>
                            </div>
                            <div className="hd-home-sample-components__item">
                                <div className="hd-home-sample-components__fake-radios"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
