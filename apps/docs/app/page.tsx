"use client";

import { Button as HopperButton, HopperProvider } from "@hopper-ui/components";
import Image from "next/image";
import AccessibleIcon from "./home/assets/accessible.svg";
import InternationalIcon from "./home/assets/international.svg";
import TypescriptIcon from "./home/assets/typescript.svg";
import DarkModeIcon from "./home/assets/dark-mode.svg";
import FontSizeIcon from "./home/assets/font-size.svg";
import LineHeightIcon from "./home/assets/line-height.svg";
import MarginIcon from "./home/assets/margin.svg";
import ArrowIcon from "./home/assets/arrow.svg";
import SelectArrowIcon from "./home/assets/select-arrow.svg";
import { type ColorScheme, ThemeContext } from "@/context/theme/ThemeProvider.tsx";
import { useContext } from "react";
import Button from "../components/button/Button";
import { ExternalLinkIcon, Icon } from "@/components/icon";

// eslint-disable-next-line max-len
import { CalendarIcon, ChartBarIcon, CheckmarkIcon, DeleteIcon, EyeVisibleIcon, FilterIcon, FocusIcon, ItalicIcon, LightbulbIcon, LockIcon, MailIcon, NotebookIcon, PinIcon, ProfileIcon, ReactionIcon, RecurringIcon, RewindIcon, SearchIcon, ShareIcon, StarIcon, StickyIcon, SyncIcon, TeamIcon, ThumbsUpIcon, UnarchiveIcon, WarningIcon } from "@hopper-ui/icons";

import "@hopper-ui/tokens/fonts.css";
import "./home/home.css";

export default function Home() {
    const { colorMode } = useContext(ThemeContext);

    const theme = colorMode as ColorScheme;

    return (
        <div className="hd-wrapper">
            <main className="hd-home">
                <div className="hd-home__heading">
                    <h1 className="hd-home__header">Fusce semper facilisis finibus.</h1>
                    <p className="hd-home__copy">Sed condimentum, arcu sit amet tempus posuere, sapien ex vulputate risus, placerat convallis lectus ex.</p>
                </div>
                <div className="hd-home__ctas">
                    <Button as="a" href="/components">Get Started</Button>
                    <Button as="a" href="https://github.com/gsoft-inc/wl-hopper" variant="secondary" target="_blank">Github <Icon src={ExternalLinkIcon} slot="end-icon" /></Button>
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
                    <div className="hd-home-samples__col hd-home-samples__main-wrapper">
                        <div className="hd-home-samples__row">
                            <div className="hd-home-samples__col">
                                <a className="hd-home-sample__item hd-home-sample__item-colors" href="/tokens/semantic/color">
                                    <h3 className="hd-home-sample__title">Colors <ArrowIcon className="hd-home-sample__title-icon" /></h3>
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
                                </a>
                                <a className="hd-home-sample__item hd-home-sample__item-sizes" href="/tokens/semantic/space">
                                    <h3 className="hd-home-sample__title">Sizes <ArrowIcon className="hd-home-sample__title-icon" /></h3>
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
                                </a>
                            </div>
                            <div className="hd-home-samples__col">
                                <a className="hd-home-sample__item hd-home-sample__item-text-styles" href="/tokens/semantic/typography">
                                    <h3 className="hd-home-sample__title">Text Styles <ArrowIcon className="hd-home-sample__title-icon" /></h3>
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
                                </a>
                            </div>
                        </div>
                        <a className="hd-home-sample__item hd-home-sample__item-icons" href="/icons/getting-started/introduction">
                            <h3 className="hd-home-sample__title">Icons <ArrowIcon className="hd-home-sample__title-icon" /></h3>
                            <p className="hd-home-sample__copy">A set of commonly used interface icons.</p>
                            <HopperProvider colorScheme={theme} className="hd-home-sample__icons">
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
                                    <NotebookIcon className="hd-home-sample__icons-icon hd-home-sample__icons-icon--strong" size="sm" />
                                    <DeleteIcon className="hd-home-sample__icons-icon" size="sm" />
                                    <StarIcon className="hd-home-sample__icons-icon" size="sm" />
                                    <StickyIcon className="hd-home-sample__icons-icon hd-home-sample__icons-icon--strong" size="sm" />
                                    <ProfileIcon className="hd-home-sample__icons-icon" size="sm" />
                                </div>
                                <div className="hd-home-sample__icons-row hd-home-sample__icons-extra-row">
                                    <FocusIcon className="hd-home-sample__icons-icon hd-home-sample__icons-icon--strong" size="sm" />
                                    <ReactionIcon className="hd-home-sample__icons-icon" size="sm" />
                                    <PinIcon className="hd-home-sample__icons-icon hd-home-sample__icons-icon--strong" size="sm" />
                                    <SyncIcon className="hd-home-sample__icons-icon" size="sm" />
                                    <UnarchiveIcon className="hd-home-sample__icons-icon" size="sm" />
                                    <TeamIcon className="hd-home-sample__icons-icon" size="sm" />
                                    <ShareIcon className="hd-home-sample__icons-icon" size="sm" />
                                    <RewindIcon className="hd-home-sample__icons-icon" size="sm" />
                                    <RecurringIcon className="hd-home-sample__icons-icon" size="sm" />
                                </div>
                            </HopperProvider>
                        </a>
                    </div>
                    <div className="hd-home-sample__item hd-home-sample__item-components">
                        <div className="hd-home-sample__item-upcoming"></div>
                        <div className="hd-home-sample__title-wrap">
                            <h3 className="hd-home-sample__title">Components</h3>
                            <span className="hd-tag-accent">upcoming</span>
                        </div>
                        <p className="hd-home-sample__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="hd-home-sample-components">
                            <div className="hd-home-sample-components__item-wrapper">
                                <div className="hd-home-sample-components__item">
                                    <Image src={`https://cdn.platform.workleap.com/hopper/webdoc/component-avatar-group-${theme}.png`} width="137" height="32" alt="Avatar Group component preview" />
                                </div>
                            </div>
                            <div className="hd-home-sample-components__item-wrapper">
                                <div className="hd-home-sample-components__item">
                                    <Image src={`https://cdn.platform.workleap.com/hopper/webdoc/component-select-field-${theme}.png`} width="220" height="40" alt="Select Fielg component preview" />
                                </div>
                            </div>
                            <div className="hd-home-sample-components__item-wrapper">
                                <div className="hd-home-sample-components__item">
                                    <HopperProvider colorScheme={theme}>
                                        <div className="hd-home-sample-components__buttons">
                                            <HopperButton excludeFromTabOrder>Confirm</HopperButton>
                                            <HopperButton excludeFromTabOrder variant="secondary">I need help</HopperButton>
                                        </div>
                                    </HopperProvider>
                                </div>
                            </div>
                            <div className="hd-home-sample-components__item-wrapper">
                                <div className="hd-home-sample-components__item">
                                    <Image src={`https://cdn.platform.workleap.com/hopper/webdoc/component-radio-group-${theme}.png`} width="99" height="48" alt="Radio Group Component preview" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
