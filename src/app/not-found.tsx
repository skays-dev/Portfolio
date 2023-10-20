'use client'

import Link from "next/link";
import image404 from "../../public/assets/img/404.jpg";
import Aos from 'aos';
import { useEffect } from 'react';
import dynamic from 'next/dynamic'
import { FC } from "react";

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

const NotFound: FC = (): JSX.Element => {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={44}
                color="122, 42, 202"
                outerAlpha={0.3}
                innerScale={0.7}
                outerScale={1.2}
            />
            <div className="error_page">
                <div
                    className="hero bg-image"
                    style={{
                        backgroundImage: `url(${image404.src})`,
                    }}
                >
                    <div className="content">
                        <h1 data-aos="fade-up" data-aos-duration="1200">
                            404!
                        </h1>
                        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
                            The page you are looking for could not be found.
                        </p>

                        <div
                            className="button"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                        >
                            <Link href="/">BACK TO HOME</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
