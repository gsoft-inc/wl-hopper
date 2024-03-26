import "./home/home.css";
import AccessibleIcon from "./home/assets/accessible.svg";
import InternationalIcon from "./home/assets/international.svg";
import TypescriptIcon from "./home/assets/typescript.svg";
import DarkModeIcon from "./home/assets/dark-mode.svg";

export default function Home() {
    return (
        <div className="hd-wrapper">
            <main className="hd-home">
                <div className="hd-home__heading">
                    <h1 className="hd-home__header">Fusce semper facilisis finibus.</h1>
                    <p className="hd-home__copy">Sed condimentum, arcu sit amet tempus posuere, sapien ex vulputate risus, placerat convallis lectus ex.</p>
                </div>
                <div className="hd-home__ctas">
                    <button type="button">Get Started</button>
                    <button type="button">Github </button>
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
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-200"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-200"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-200"></span>
                                        </div>
                                        <div className="hd-home-sample__colors-row">
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-200"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-200"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-200"></span>
                                            <span className="hd-home-sample__color hd-home-sample__color-rock-200"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hd-home-sample__item">
                                    <h3 className="hd-home-sample__title">Sizes</h3>
                                </div>
                            </div>
                            <div className="hd-home-samples__col">
                                <div className="hd-home-sample__item">
                                    <h3 className="hd-home-sample__title">Text Styles</h3>
                                </div>
                            </div>
                        </div>
                        <div className="hd-home-sample__item">
                            <h3 className="hd-home-sample__title">Icons</h3>
                            <p className="hd-home-sample__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className="hd-home-sample__item">
                        <h3 className="hd-home-sample__title">Components</h3>
                        <p className="hd-home-sample__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
