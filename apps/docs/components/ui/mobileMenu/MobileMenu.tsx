"use client";

import Link from "next/link";
import IconButton from "../iconButton/IconButton";
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch";

import "./mobileMenu.css";

interface MobileMenuProps {
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
    return (
        <div className="hd-mobile-menu">
            <div className="hd-mobile-menu-header">
                <div className="hd-wrapper hd-flex">
                    <Link href="/" className="hd-brand" aria-label="Hopper Brand">
                        <svg width="117" height="32" viewBox="0 0 117 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_434_296)">
                                <path d="M25.1462 0H6.85377C3.06854 0 0 3.06854 0 6.85377V25.1462C0 28.9315 3.06854 32 6.85377 32H25.1462C28.9315 32 32 28.9315 32 25.1462V6.85377C32 3.06854 28.9315 0 25.1462 0Z" fill="#F0E9E1" />
                                <mask id="mask0_434_296" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="4" y="8" width="24" height="16">
                                    <path d="M27.091 8.0827H4.91577V23.9H27.091V8.0827Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_434_296)">
                                    {/* eslint-disable-next-line max-len */}
                                    <path d="M23.4383 8.08294H23.2081L20.8684 15.2066L18.6906 8.29328C18.6715 8.23212 18.6334 8.17868 18.5817 8.1408C18.5301 8.10289 18.4677 8.08254 18.4036 8.0827H14.6057C14.5297 8.08299 14.4558 8.10771 14.3949 8.1532C14.334 8.1987 14.2893 8.26256 14.2675 8.33535L11.8018 16.6667L9.4538 8.08294H4.91614L9.29404 23.6462C9.31477 23.7192 9.3587 23.7835 9.41923 23.8294C9.47973 23.8752 9.55349 23.9 9.6294 23.9003H13.6493C13.7133 23.9 13.7755 23.879 13.8269 23.8409C13.8782 23.8026 13.9159 23.7488 13.9345 23.6876L16.6722 14.4302L18.6591 20.6145C18.6819 20.6865 18.7272 20.7493 18.7882 20.7939C18.8493 20.8384 18.9229 20.8622 18.9985 20.8619H22.5003C22.587 20.8619 22.6715 20.8347 22.7419 20.784C22.8123 20.7334 22.865 20.6619 22.8926 20.5797L27.0907 8.08318L23.4383 8.08294Z" fill="#2545FF" />
                                    {/* eslint-disable-next-line max-len */}
                                    <path d="M16.6723 14.43L14.8303 8.6965C14.8221 8.67055 14.8057 8.64793 14.7836 8.63198C14.7615 8.61603 14.7349 8.60759 14.7077 8.60792C14.6804 8.60823 14.654 8.61728 14.6323 8.63375C14.6106 8.6502 14.5948 8.6732 14.5871 8.69933L12.9072 14.3745C14.0932 14.6181 15.2571 14.9588 16.3873 15.3931L16.6723 14.43Z" fill="url(#paint0_radial_434_296)" />
                                    {/* eslint-disable-next-line max-len */}
                                    <path d="M19.1815 20.3873L20.1772 17.3287C19.3179 16.7992 18.4232 16.3298 17.4993 15.9236L18.9338 20.3873C18.9423 20.4136 18.9589 20.4366 18.9812 20.4528C19.0035 20.4691 19.0304 20.4779 19.058 20.4779C19.0857 20.4779 19.1125 20.4691 19.1349 20.4528C19.1572 20.4366 19.1738 20.4136 19.1822 20.3873H19.1815Z" fill="url(#paint1_radial_434_296)" />
                                    {/* eslint-disable-next-line max-len */}
                                    <path d="M9.81121 23.3061C9.83238 23.2903 9.84789 23.2681 9.8554 23.2428L11.8016 16.667L11.1295 14.2244C9.7733 14.0414 8.40304 13.9846 7.03638 14.055L9.61977 23.2411C9.62519 23.2603 9.63516 23.2778 9.64884 23.2923C9.66255 23.3067 9.67954 23.3176 9.6984 23.324C9.71724 23.3304 9.73735 23.3321 9.75701 23.329C9.77665 23.3259 9.79525 23.318 9.81121 23.3061Z" fill="url(#paint2_radial_434_296)" />
                                </g>
                            </g>
                            {/* eslint-disable-next-line max-len */}
                            <path d="M45.2642 23V8.45455H48.3395V14.456H54.5824V8.45455H57.6506V23H54.5824V16.9915H48.3395V23H45.2642ZM65.0582 23.2131C61.7486 23.2131 59.6889 20.9474 59.6889 17.5881C59.6889 14.2074 61.7486 11.9489 65.0582 11.9489C68.3679 11.9489 70.4276 14.2074 70.4276 17.5881C70.4276 20.9474 68.3679 23.2131 65.0582 23.2131ZM65.0724 20.8693C66.571 20.8693 67.3523 19.4702 67.3523 17.5668C67.3523 15.6634 66.571 14.2571 65.0724 14.2571C63.5455 14.2571 62.7642 15.6634 62.7642 17.5668C62.7642 19.4702 63.5455 20.8693 65.0724 20.8693ZM72.3949 27.0909V12.0909H75.3778V13.9233H75.5128C75.9176 13.0355 76.7912 11.9489 78.6165 11.9489C81.0099 11.9489 83.0341 13.8097 83.0341 17.5597C83.0341 21.2102 81.0952 23.1776 78.6094 23.1776C76.848 23.1776 75.9318 22.1619 75.5128 21.2528H75.4205V27.0909H72.3949ZM75.3565 17.5455C75.3565 19.4915 76.1946 20.7699 77.6506 20.7699C79.1349 20.7699 79.9446 19.4489 79.9446 17.5455C79.9446 15.6562 79.1491 14.3565 77.6506 14.3565C76.1804 14.3565 75.3565 15.5994 75.3565 17.5455ZM85.0511 27.0909V12.0909H88.0341V13.9233H88.169C88.5739 13.0355 89.4474 11.9489 91.2727 11.9489C93.6662 11.9489 95.6903 13.8097 95.6903 17.5597C95.6903 21.2102 93.7514 23.1776 91.2656 23.1776C89.5043 23.1776 88.5881 22.1619 88.169 21.2528H88.0767V27.0909H85.0511ZM88.0128 17.5455C88.0128 19.4915 88.8509 20.7699 90.3068 20.7699C91.7912 20.7699 92.6009 19.4489 92.6009 17.5455C92.6009 15.6562 91.8054 14.3565 90.3068 14.3565C88.8366 14.3565 88.0128 15.5994 88.0128 17.5455ZM102.679 23.2131C99.3196 23.2131 97.267 21.054 97.267 17.5952C97.267 14.2287 99.348 11.9489 102.558 11.9489C105.442 11.9489 107.686 13.7812 107.686 17.4886V18.3196H100.257V18.3267C100.257 19.9531 101.216 20.9545 102.729 20.9545C103.737 20.9545 104.518 20.5213 104.824 19.6903L107.622 19.875C107.196 21.8991 105.378 23.2131 102.679 23.2131ZM100.257 16.4446H104.838C104.831 15.1449 103.922 14.2074 102.608 14.2074C101.266 14.2074 100.321 15.2017 100.257 16.4446ZM109.661 23V12.0909H112.594V13.9943H112.707C113.105 12.6449 114.107 11.9347 115.328 11.9347C115.634 11.9347 116.01 11.9773 116.28 12.0412V14.7259C115.996 14.6335 115.42 14.5625 115.001 14.5625C113.666 14.5625 112.686 15.4858 112.686 16.8281V23H109.661Z" fill="currentColor" />
                            <defs>
                                <radialGradient id="paint0_radial_434_296" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.5947 8.72063) scale(7.0845 7.0845)">
                                    <stop offset="0.1" stopColor="#F0E9E1" />
                                    <stop offset="0.4" stopColor="#A2AAED" />
                                    <stop offset="0.76" stopColor="#4862FA" />
                                    <stop offset="0.92" stopColor="#2545FF" />
                                </radialGradient>
                                <radialGradient id="paint1_radial_434_296" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.625 19.7027) scale(4.45058 4.45057)">
                                    <stop offset="0.05" stopColor="#F0E9E1" />
                                    <stop offset="0.25" stopColor="#B4B9EA" />
                                    <stop offset="0.53" stopColor="#687BF5" />
                                    <stop offset="0.72" stopColor="#3754FC" />
                                    <stop offset="0.82" stopColor="#2545FF" />
                                </radialGradient>
                                <radialGradient id="paint2_radial_434_296" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.9514 23.2012) rotate(-97.5121) scale(10.2828 10.8382)">
                                    <stop offset="0.1" stopColor="#F0E9E1" />
                                    <stop offset="0.19" stopColor="#E7E2E2" />
                                    <stop offset="0.33" stopColor="#CFCEE6" />
                                    <stop offset="0.51" stopColor="#A7AEEC" />
                                    <stop offset="0.72" stopColor="#7081F4" />
                                    <stop offset="0.95" stopColor="#2A49FE" />
                                    <stop offset="0.97" stopColor="#2545FF" />
                                </radialGradient>
                                <clipPath id="clip0_434_296">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <IconButton onClick={onClose} className="hd-mobile-menu-header-close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hd-mobile-menu-header-close-icon">
                            <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </IconButton>
                </div>
            </div>
            <div className="hd-mobile-menu-container">
                <div className="hd-mobile-menu-nav">
                    <ul className="hd-mobile-menu-nav-list">
                        <li>
                            <Link className="hd-mobile-menu-nav-list__link" href="/icons">Icons</Link>
                        </li>
                        <li>
                            <Link className="hd-mobile-menu-nav-list__link" href="/tokens/getting-started/introduction">Tokens</Link>
                        </li>
                        <li>
                            <Link className="hd-mobile-menu-nav-list__link" href="/components/installation">Components</Link>
                        </li>
                    </ul>
                </div>
                <div className="hd-mobile-menu-footer">
                    <nav>
                        <ul className="hd-mobile-menu-footer-list">
                            <li>
                                <Link href="https://www.github.com" target="_blank" className="hd-mobile-menu-footer-link">
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        {/* eslint-disable-next-line max-len */}
                                        <path d="M8 0.197266C3.58267 0.197266 0 3.77927 0 8.19727C0 11.7319 2.292 14.7306 5.47133 15.7886C5.87067 15.8626 6 15.6146 6 15.4039V13.9146C3.77467 14.3986 3.31133 12.9706 3.31133 12.9706C2.94733 12.0459 2.42267 11.7999 2.42267 11.7999C1.69667 11.3033 2.478 11.3139 2.478 11.3139C3.28133 11.3699 3.704 12.1386 3.704 12.1386C4.41733 13.3613 5.57533 13.0079 6.032 12.8033C6.10333 12.2866 6.31067 11.9333 6.54 11.7339C4.76333 11.5306 2.89533 10.8446 2.89533 7.77993C2.89533 6.90593 3.208 6.1926 3.71933 5.6326C3.63667 5.4306 3.36267 4.6166 3.79733 3.51527C3.79733 3.51527 4.46933 3.3006 5.998 4.33527C6.636 4.15793 7.32 4.06927 8 4.06593C8.68 4.06927 9.36467 4.15793 10.004 4.33527C11.5313 3.3006 12.202 3.51527 12.202 3.51527C12.6373 4.61727 12.3633 5.43127 12.2807 5.6326C12.794 6.1926 13.104 6.9066 13.104 7.77993C13.104 10.8526 11.2327 11.5293 9.45133 11.7273C9.738 11.9753 10 12.4619 10 13.2086V15.4039C10 15.6166 10.128 15.8666 10.534 15.7879C13.7107 14.7286 16 11.7306 16 8.19727C16 3.77927 12.418 0.197266 8 0.197266Z" fill="currentColor" />
                                    </svg>
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                <ThemeSwitch text="Appareance" className="hd-mobile-menu-footer-button" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
