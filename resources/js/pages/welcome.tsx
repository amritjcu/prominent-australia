import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div>
                {/* ========== HEADER ========== */}
                <Navbar />
                {/* ========== END HEADER ========== */}
                {/* Hero */}
                <Hero />
                {/* End Hero */}
                {/* Features */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 lg:mt-24 mx-auto">
                    {/* Grid */}
                    <div className="md:grid md:grid-cols-2 md:gap-12 xl:gap-32">
                        <div className="mt-5 sm:mt-10 lg:mt-0">
                            <div className="space-y-6 sm:space-y-8">
                                {/* Title */}
                                <div className="space-y-2 md:space-y-4">
                                    <h2 className="font-bold text-3xl lg:text-5xl text-gray-800 leading-tight">
                                        Powder Coating Supplier in Australia
                                    </h2>
                                    <p className="text-gray-500 leading-7">
                                        The trusted supplier and distributor of
                                        Powder coating in Australia. Prominent
                                        Australia Pty Ltd is a leading supplier
                                        and distributor in Australia for
                                        customers who are demanding high-quality
                                        powder and e-coating corrosion
                                        protection.
                                    </p>
                                    <p className="text-gray-500 leading-7">
                                        Our allied product that adheres to
                                        international quality standards ISO
                                        9001:2015, ISO 14001:2015, ISO
                                        45001:2018 and IATF 16949:2016 certiﬁed
                                        company, which gives premium coating
                                        shades and achieved the highest
                                        customers satisfaction.
                                    </p>
                                </div>
                                {/* End Title */}
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-700">
                                        Follow us via
                                    </span>
                                    <Link
                                        href="#"
                                        className="text-red-500 hover:text-red-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-facebook"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-red-500 hover:text-red-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-twitter"
                                        >
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-red-500 hover:text-red-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-linkedin"
                                        >
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect
                                                width={4}
                                                height={12}
                                                x={2}
                                                y={9}
                                            />
                                            <circle cx={4} cy={4} r={2} />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-red-500 hover:text-red-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-instagram"
                                        >
                                            <rect
                                                width={20}
                                                height={20}
                                                x={2}
                                                y={2}
                                                rx={5}
                                                ry={5}
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line
                                                x1="17.5"
                                                x2="17.51"
                                                y1="6.5"
                                                y2="6.5"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* End Col */}
                        <div>
                            <img
                                className="rounded-xl py-8 object-cover"
                                src="/images/feature2.jpeg"
                                width={500}
                                height={500}
                                alt="Features Image"
                            />
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Grid */}
                </div>
                {/* End Features */}
                {/* Clients */}
                <div className="px-4 sm:px-6 lg:px-8 lg:py-16 py-10">
                    <div className="relative py-6 md:py-10 overflow-hidden before:absolute before:top-0 before:start-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:top-0 after:end-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent">
                        {/* Title */}
                        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                            <h2 className="text-2xl font-bold md:text-5xl lg:py-10 md:leading-tight">
                                Our Happy Clients
                            </h2>
                        </div>
                        {/* End Title */}
                        <div className="flex justify-between items-center gap-x-4 max-w-7xl mx-auto">
                            <svg
                                className="w-14 md:w-32 h-auto text-red-600 mx-auto"
                                enableBackground="new 0 0 2499 614"
                                viewBox="0 0 2499 614"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z"
                                    fill="currentColor"
                                />
                            </svg>
                            <svg
                                className="w-14 md:w-32 h-auto text-red-600 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947"
                                width={2500}
                                height={607}
                            >
                                <path
                                    d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z"
                                    fill="currentColor"
                                />
                            </svg>
                            <svg
                                className="w-14 md:w-32 h-auto text-red-600 mx-auto"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 2428 1002"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M311.5 389.8h191.8l67 117.5 77.8-117.5h178.3L682.7 590.7l154 220.7H648.1l-77.8-135.8-91.7 135.8h-175l153.2-220.7-145.3-200.9Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1279.3 640.7H955.4c2.9 26 10 45.2 21 58a76.5 76.5 0 0 0 61.1 27.3c16 0 31.5-4 45.3-12 8.8-5 18.2-13.7 28.2-26.5l159.2 14.7c-24.4 42.4-53.7 72.7-88 91.2-34.5 18.2-83.8 27.5-148.2 27.5-55.8 0-99.7-7.9-131.8-23.6a193.2 193.2 0 0 1-79.6-75c-21-34.4-31.6-74.6-31.6-121 0-65.8 21.2-119.2 63.3-159.8 42.3-40.8 100.6-61.3 175-61.3 60.3 0 108 9.2 142.8 27.5a184 184 0 0 1 79.8 79.3c18.3 34.7 27.4 79.8 27.4 135.3v18.4ZM1115 563.3c-3.2-31.3-11.6-53.7-25.2-67.1a73.1 73.1 0 0 0-53.8-20.3 73.6 73.6 0 0 0-61.6 30.6c-9.7 12.7-16 31.6-18.5 56.8H1115Zm137-173.5h168.3l81.9 267.1 84.5-267H1750l-179.1 421.5h-143.3L1252 389.8Zm463.2 212c0-64.3 21.7-117.4 65-159 43.5-41.7 102-62.6 176-62.6 84.4 0 148.2 24.5 191.3 73.5 34.6 39.4 52 88 52 145.8 0 64.7-21.5 117.8-64.5 159.3-43 41.3-102.4 62-178.5 62-67.7 0-122.5-17.1-164.3-51.5-51.4-42.6-77-98.4-77-167.6Zm162-.5c0 37.7 7.5 65.5 22.8 83.4a72 72 0 0 0 57.3 27.1c23.4 0 42.5-9 57.4-26.7 15-17.8 22.5-46 22.5-85.4 0-36.4-7.6-63.7-22.7-81.5a70.5 70.5 0 0 0-56-26.7c-23.5 0-43 9-58.3 27-15.4 18.2-23 45.9-23 82.8ZM2363.1.1a64 64 0 0 1 0 127.9 64 64 0 0 1 0-128Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1912.1 671.5c220.3-135 326.4-327 334-419.2 8.7-106.7-71-235.9-358.9-238-345 3.6-790 158.3-1163.6 360.4h138c315.8-152.6 672-266.2 1000.8-275.2 287.7-7.8 304.4 149.2 302 199-3.6 71-74.7 234.5-252.3 373Zm-1315.7-222-36 22.7 10 17.5 26-40.1ZM419.8 567.5C212 717 57 873.2.8 1001.9 77.8 897.1 217 771 394.9 647l40.4-58.1-15.5-21.4Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M2036.3 580a819.8 819.8 0 0 0 114.2-122.8l-3-3.5c-8-9.2-17-17.5-26.5-25-21 39.8-50 83.7-88.2 128.3 1.6 7 2.8 14.7 3.5 23Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <svg
                                className="w-14 md:w-32 h-auto text-red-600 mx-auto"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 127 33"
                            >
                                <path
                                    d="M9.3 16.5C9.3 9 14.3 2.7 21.2.7a16.5 16.5 0 1 0 0 31.6c-6.9-2-11.9-8.3-11.9-15.8Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M21.7 10c4 0 7.4 2.8 8.5 6.4a8.9 8.9 0 1 0-17 0c1-3.6 4.4-6.3 8.5-6.3Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M24.8 19.4c0 3-2 5.5-4.8 6.3A6.6 6.6 0 1 0 20 13c2.8.8 4.8 3.4 4.8 6.4Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M39.6 13.5A4.4 4.4 0 0 1 44 9.1h1.3v2.7l-1 .2-1 .6-.2.4-.1.5h2.3v3H43v9.2h-3.4v-9.3h-1.3v-2.9h1.3ZM55.7 13.5h3.4v6.1a6.9 6.9 0 0 1-1.7 4.6 6 6 0 0 1-4.5 1.8c-1 0-1.8-.1-2.5-.5a6 6 0 0 1-3.2-3.4c-.3-.8-.4-1.6-.4-2.5v-6H50v6c0 .5 0 1 .2 1.3l.5 1c.2.4.5.6.9.8.3.2.8.3 1.2.3a2.6 2.6 0 0 0 2.1-1c.3-.3.4-.7.5-1l.2-1.4v-6ZM61.2 25.7V9.5h3.4v16.2h-3.4ZM66.9 25.7V9.5h3.3v16.2H67ZM78.5 21.2l3.3-7.7h3.7l-5.7 12.2h-2.7l-5.6-12.2H75l3.4 7.7ZM87 13.5h3.3v12.2H87V13.5Zm1.6-5 .8.1.6.4.4.7.2.7a1.9 1.9 0 0 1-.6 1.4l-.6.4a2 2 0 0 1-.8.1c-.5 0-1-.2-1.3-.5a2 2 0 0 1-.4-2.1c0-.3.2-.5.4-.7l.6-.4.7-.1ZM98.8 13.2a6.7 6.7 0 0 1 4.8 1.9 6.3 6.3 0 0 1 1.9 5.7h-9.8a3.3 3.3 0 0 0 3.2 2.2c.5 0 1-.1 1.4-.4.5-.2.9-.5 1.2-1h3.7c-.2.7-.5 1.3-1 1.8a6.1 6.1 0 0 1-3.3 2.3 7 7 0 0 1-6.9-1.6 6.1 6.1 0 0 1-2-4.5 6.1 6.1 0 0 1 2-4.5c.7-.6 1.4-1 2.2-1.4.8-.3 1.7-.5 2.6-.5Zm3.2 5.2c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.3-.7-2-.7s-1.4.3-2 .7c-.5.4-.9.9-1.1 1.5h6.3ZM123 13.5h3.6l-5 12.2H119l-2.5-6.5-2.5 6.5h-2.7l-5-12.2h3.6l2.7 7 2.8-7h2.2l2.8 7 2.7-7Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <svg
                                className="hidden sm:block w-14 md:w-32 h-auto text-red-600 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                x={0}
                                y={0}
                                viewBox="0 0 88 22"
                                xmlSpace="preserve"
                                enableBackground="new 0 0 88 22"
                            >
                                <path
                                    d="M36.3 14.6a7.3 7.3 0 0 1-5.6 2.8c-3.8 0-6.8-2.7-6.8-6.2a6 6 0 0 1 2-4.5A6 6 0 0 1 30.5 5c2.2 0 4.3 1 5.6 2.8l-2.5 1.8a3.7 3.7 0 0 0-3.1-1.8 3.5 3.5 0 0 0-3.5 3.5c.1 2 1.7 3.5 3.6 3.5 1.3 0 2.5-.6 3.2-1.7l2.5 1.5z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M37.7 0H40.8V17.1H37.7z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M49.1 14.7c2 0 3.7-1.6 3.8-3.6-.1-2-1.8-3.6-3.8-3.6s-3.7 1.6-3.8 3.6c.1 2 1.7 3.6 3.8 3.6m0-9.8c1.7-.1 3.4.5 4.7 1.7 1.3 1.2 2 2.8 2.1 4.5a6.4 6.4 0 0 1-2.1 4.5 6.4 6.4 0 0 1-4.7 1.7c-3.8 0-6.8-2.7-6.8-6.2s3-6.2 6.8-6.2"
                                    fill="currentColor"
                                />
                                <path
                                    d="M55.3 5.1 59 5.1 62 11.5 65.2 5.1 68.6 5.1 62 17.8z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M77.5 9.4a3 3 0 0 0-2.9-1.9c-1.3 0-2.5.7-3.1 1.9h6zm2 6.3a7 7 0 0 1-4.6 1.6c-3.8 0-6.8-2.7-6.8-6.2 0-1.7.7-3.3 1.9-4.5a6 6 0 0 1 4.6-1.7c1.7-.1 3.3.6 4.5 1.8s1.8 2.8 1.7 4.5v.8h-9.6a3.9 3.9 0 0 0 6.5 1.5l1.8 2.2zm2.8-5.3c0-2.9 2.2-5.2 5.7-5.2V8c-.7 0-1.5.3-2 .8s-.7 1.3-.6 2v6.3h-3.1v-6.7z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M9.7 5.6a5 5 0 0 0-8.3-3.5C0 3.5-.4 5.6.3 7.4s2.5 3 4.5 3h4.9V5.6zm1.4 0a5 5 0 0 1 8.3-3.5c1.4 1.4 1.8 3.5 1.1 5.3s-2.5 3-4.5 3h-4.9V5.6zm0 11a5 5 0 0 0 8.3 3.5c1.4-1.4 1.8-3.5 1.1-5.3s-2.5-3-4.5-3h-4.9v4.8zm-6.3 3.5c1.9 0 3.5-1.5 3.5-3.5v-3.5H4.8c-1.9 0-3.5 1.5-3.5 3.5s1.6 3.5 3.5 3.5zm4.9-3.5a5 5 0 0 1-8.3 3.5C0 18.7-.4 16.6.3 14.8s2.5-3 4.5-3h4.9v4.8z"
                                    fill="currentColor"
                                />
                            </svg>
                            <svg
                                className="hidden md:block w-14 md:w-32 h-auto text-red-600 mx-auto"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 107 32"
                            >
                                <g clipPath="url(#a)" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.1 0A3.1 3.1 0 0 0 0 3.1v25.2c0 1.7 1.4 3.1 3.1 3.1h25.2c1.7 0 3.1-1.4 3.1-3.1V3C31.4 1.4 30 0 28.3 0H3Zm7.3 18H13c2 0 3.3-2 2.5-3.8l-2.7-6a2.4 2.4 0 0 1 4.4-2L24.7 23a2.5 2.5 0 1 1-4.6 2l-.5-1c-.4-1-1.4-1.6-2.5-1.6h-3c-1 0-2 .6-2.5 1.6l-.4 1a2.5 2.5 0 0 1-4.7-2L8 19.6c.4-1 1.3-1.6 2.4-1.6Zm10.7-9.4L22.5 5c0-.3.5-.3.6 0l.6 1.2.1.1 1.5.8c.2.1.2.5 0 .6L21.5 9a.3.3 0 0 1-.5-.4ZM7.4 13.4l3.6 1.3c.3.1.5-.1.4-.4l-1.3-3.6a.3.3 0 0 0-.6 0L8.7 12l-.1.2-1.3.6c-.2.1-.2.5 0 .6ZM42.1 26.7h-3l6.6-20.3c.1-.3.4-.4.6-.4h4.5c.2 0 .5.1.6.4L58 26.7h-3l-2-6.3H44l-2 6.3Zm2.9-9 2.8-8.6a.8.8 0 0 1 1.5 0l2.8 8.7H45Z"
                                    />
                                    <path d="M60.5 11.3v15.4h2.7V12c0-.3-.3-.6-.7-.6h-2ZM106 6h-2v20.7h2.7V6.6c0-.3-.3-.6-.7-.6ZM68.2 13.5a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM77.9 11.4c3.9.3 5.4 3.8 5.7 5.4h-2.9c-.3-2-2.7-3.9-5.7-2.8-3.3 1.2-3.2 4.8-3 6 .2 1.1.6 3 3 4 3 1.1 5.4-.8 5.7-2.8h2.9c-.3 1.7-1.8 5-5.7 5.4-4.3.5-6-1.5-6.8-2.4a7 7 0 0 1-1.4-2.8c-.8-3.5.4-6.5 1.4-7.6.7-1 2.5-2.8 6.8-2.4Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M87.8 13.8c-1 1-2.2 4-1.5 7.6.2.8.8 2 1.5 2.8.7.9 2.3 2.5 5.8 2.5 3.6 0 5.1-1.6 5.9-2.5a7 7 0 0 0 1.4-2.8c.8-3.5-.5-6.5-1.4-7.6-.7-1-2.3-2.5-5.9-2.5-3.5 0-5.1 1.6-5.8 2.5Zm1 6.3c-.2-1.3-.4-4.9 3-6a5.4 5.4 0 0 1 3.6 0c3.4 1.1 3.3 4.7 3.1 6-.2 1-.6 3-3 4a5.4 5.4 0 0 1-3.7 0c-2.4-1-2.9-3-3-4Z"
                                    />
                                </g>
                            </svg>
                            <svg
                                className="hidden md:block w-14 md:w-32 h-auto text-red-600 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                width={2500}
                                height={1036}
                                viewBox="0 -6.166 294.398 121.975"
                            >
                                <path
                                    d="M12.139 90.511c-3.939 0-7.799-.479-10.938-1.292l.487-8.277c3.053 1.123 7.313 2.012 11.254 2.012 5.952 0 10.775-2.492 10.775-8.359C23.718 63.172 0 68.002 0 50.466c0-9.325 7.315-15.834 19.941-15.834 3.214 0 6.51.397 9.809.959l-.485 7.802c-3.132-.963-6.591-1.527-9.806-1.527-6.754 0-10.211 3.134-10.211 7.638 0 10.855 23.72 6.839 23.72 23.798-.005 9.973-7.882 17.209-20.829 17.209M54.106 90.264c-2.249 0-3.938-.076-6.03-.479v17.397h-8.601V49.746h8.12c0 2.094-.082 5.309-.484 7.476h.162c2.25-5.068 6.833-8.283 12.944-8.283 9.487 0 14.712 6.75 14.712 18.814.001 14.076-7.473 22.511-20.823 22.511m3.861-34.246c-6.434 0-9.892 7.558-9.892 14.384v12.312c1.852.562 3.86.804 6.272.804 6.833 0 11.497-4.182 11.497-14.958.001-8.039-2.49-12.542-7.877-12.542zM102.519 57.381C94.561 55.936 90.7 61.485 90.7 73.466v16.238h-8.606V49.746H90.3c0 2.246-.246 5.791-.809 8.844h.162c1.771-5.388 5.79-10.377 13.271-9.651l-.405 8.442M114.803 43.797c-3.056 0-5.55-2.414-5.55-5.393 0-2.971 2.494-5.385 5.55-5.385 2.974 0 5.467 2.333 5.467 5.385 0 2.979-2.493 5.393-5.467 5.393m4.26 45.907h-8.6V49.746h8.6v39.958zM154.449 89.704V63.975c0-4.982-1.374-7.875-5.951-7.875-6.03 0-10.457 6.345-10.457 14.302v19.303h-8.603V49.746h8.203c0 2.094-.162 5.546-.563 7.796l.082.075c2.33-5.141 7.157-8.68 13.91-8.68 9.084 0 11.9 5.711 11.9 12.787v27.979h-8.521M186.675 90.425c-8.524 0-11.1-3.294-11.1-12.214V56.417h-7.634v-6.671h7.634V37.04l8.523-2.333v15.039h10.532v6.671h-10.448v19.137c0 5.954 1.205 7.558 5.224 7.558 1.769 0 3.699-.24 5.226-.643v7.076c-2.331.486-5.307.88-7.957.88"
                                    fill="currentColor"
                                />
                                <path
                                    d="M233.712 78.636c11.72-15.086 20.938-32.809 20.938-45.537 0-6.652-4.765-11.295-10.978-14.823.123 13.831-4.668 46.263-9.96 60.36M195.279 115.809c27.47-9.188 67.29-30.598 94.985-49.725 2.324-1.6 4.135-3.085 4.135-5.685 0-4.519-8.275-10.576-12.292-12.987-21.792 22.653-65.163 56.596-86.828 68.397"
                                    fill="currentColor"
                                />
                                <path
                                    d="M220.76 96.567c16.938-11.709 41.545-33.739 49.873-45.727 1.963-2.82 3.416-4.454 3.416-7.405 0-4.839-5.644-8.382-9.703-10.849-9.727 22.924-31.579 51.469-43.586 63.981M236.192 64.087c2.191-14.477.903-31.952-1.894-42.913-1.521-5.969-6.901-12.706-11.88-14.812 6.526 18.522 12.128 44.898 13.774 57.725"
                                    fill="currentColor"
                                />
                                <path
                                    d="M231.367 43.779C226.235 29.91 213.446.998 194.633-6.165c12.247 13.516 30.417 40.337 36.734 49.944"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* End Clients */}
                {/* Icon Blocks */}
                <div className="bg-gray-100">
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto">
                        {/* Title */}
                        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-24">
                            <h2 className="text-2xl font-bold md:text-5xl md:leading-tight">
                                Our Specialization
                            </h2>
                        </div>
                        {/* End Title */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
                            {/* Icon Block */}
                            <div className="border border-gray-300 rounded-lg p-6 flex flex-col h-80 items-center justify-center text-center">
                                <div className="flex justify-center items-center size-20 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                                    <svg
                                        className="shrink-0 size-12 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            width={10}
                                            height={14}
                                            x={3}
                                            y={8}
                                            rx={2}
                                        />
                                        <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                                        <path d="M8 18h.01" />
                                    </svg>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Epoxy Powder
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        Suitable where maximum corrosion and
                                        chemical resistance is required.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="border border-gray-300 p-6 rounded-lg flex flex-col h-80 items-center justify-center text-center">
                                <div className="flex justify-center items-center size-20 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                                    <svg
                                        className="shrink-0 size-12 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 7h-9" />
                                        <path d="M14 17H5" />
                                        <circle cx={17} cy={17} r={3} />
                                        <circle cx={7} cy={7} r={3} />
                                    </svg>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Epoxy Polyester
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        A hybrid powder is a mixture of epoxy
                                        and polyester resins, which forms a hard
                                        film with good resistance.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="border border-gray-300 rounded-lg p-6 flex flex-col h-80 items-center justify-center text-center">
                                <div className="flex justify-center items-center size-20 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                                    <svg
                                        className="shrink-0 size-12 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                    </svg>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Pure Polyester Powder
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        It has excellent UV resistance and
                                        suitable for exterior coating.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="border border-gray-300 rounded-lg p-6 flex flex-col h-80 items-center justify-center text-center">
                                <div className="flex justify-center items-center size-20 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                                    <svg
                                        className="shrink-0 size-12 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                                    </svg>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Heat resistance powder
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        Designed for the projects that have
                                        extreme high heat resistance.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="border border-gray-300 rounded-lg p-6 flex flex-col h-80 items-center justify-center text-center">
                                <div className="flex justify-center items-center size-20 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                                    <svg
                                        className="shrink-0 size-12 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 7h-9" />
                                        <path d="M14 17H5" />
                                        <circle cx={17} cy={17} r={3} />
                                        <circle cx={7} cy={7} r={3} />
                                    </svg>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Polyurethane Powder
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        Alternate to polyester powder, it has
                                        polyurethanic resins that gives strong
                                        protection film.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="border border-gray-300 p-6 rounded-lg flex flex-col h-80 items-center justify-center text-center">
                                <div className="flex justify-center items-center size-20 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                                    <svg
                                        className="shrink-0 size-12 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 7h-9" />
                                        <path d="M14 17H5" />
                                        <circle cx={17} cy={17} r={3} />
                                        <circle cx={7} cy={7} r={3} />
                                    </svg>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Nylon Powder
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        Popularly known as thermoplastic powder
                                        coating and provides good thermal
                                        insulation, electrical strength and
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </div>
                </div>
                {/* End Icon Blocks */}
                {/* Hero */}
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-24">
                    {/* Title */}
                    <div className="mt-5 max-w-2xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                            Pick your own colour
                        </h1>
                    </div>
                    {/* End Title */}
                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-600">
                            Find the one that works for you from the most
                            popular colours for your industry
                        </p>
                        <p className="text-lg text-gray-600">
                            Download the shade card by clicking here
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="mt-8 gap-3 flex justify-center">
                        <Link
                            className="px-12 inline-flex justify-center items-center gap-x-3 text-center bg-red-600 text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-red-600 py-3 "
                            href="#"
                        >
                            Buy Now
                        </Link>
                        <button className="px-12 border border-red-600 text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-red-600 py-3 ">
                            Learn More
                        </button>
                    </div>
                    {/* End Buttons */}
                </div>
                {/* End Hero */}
                {/* Card Blog */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto">
                    {/* Title */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-5xl md:leading-tight">
                            PROMINENT COLOR RANGE
                        </h2>
                    </div>
                    {/* End Title */}
                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Card */}
                        <Link
                            className="group flex flex-col focus:outline-none"
                            href="#"
                        >
                            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                <img
                                    className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                    src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                    alt="Blog Image"
                                />
                            </div>
                            <div className="mt-7">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                                    #0C0C0C
                                </h3>
                                <p className="mt-3 text-2xl text-gray-800">
                                    Woodland Grey
                                </p>
                            </div>
                        </Link>
                        {/* End Card */}
                        {/* Card */}
                        <Link
                            className="group flex flex-col focus:outline-none"
                            href="/products"
                        >
                            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                <img
                                    className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                    src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                    alt="Blog Image"
                                />
                            </div>
                            <div className="mt-7">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                                    #FEFEFE
                                </h3>
                                <p className="mt-3 text-2xl text-gray-800">
                                    Antique Silver
                                </p>
                            </div>
                        </Link>
                        {/* End Card */}
                    </div>
                    {/* End Grid */}
                </div>
                {/* End Card Blog */}
                {/* Contact Us */}
                <Contact
                    title="Send An Inquiry"
                    subtitle="We'd love to talk about how we can help you."
                />
                {/* End Contact Us */}
                <Footer />
                <CookieConsent variant="small" />
            </div>
        </>
    );
}
