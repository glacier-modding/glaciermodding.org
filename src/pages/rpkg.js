import React from "react"
import Layout from "@theme/Layout"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const ImageCarousel = () => {
    const images = [
        {
            url: "/media/rpkg/rpkg-1.png",
        },
        {
            url: "/media/rpkg/rpkg-2.png",
        },
        {
            url: "/media/rpkg/rpkg-3.png",
        },
        {
            url: "/media/rpkg/rpkg-4.png",
        },
        {
            url: "/media/rpkg/rpkg-5.png",
        },
    ]

    const renderImages = () =>
        images.map((image, index) => (
            <div key={index}>
                <img src={image.url} />
            </div>
        ))

    return (
        <Carousel
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            swipeable={true}
            emulateTouch={true}
            useKeyboardArrows={true}
            width="100%"
            interval={5000}
            transitionTime={1000}
        >
            {renderImages()}
        </Carousel>
    )
}

export default function RPKG() {
    const RPKGVersion = "2.31.0"

    return (
        <Layout
            title="RPKG Tool"
            description="The RPKG tool allows for easy (un)packing of files from the Glacier Engine RPKG file format"
        >
            <header className="hero hero--primary">
                <div className="container">
                    <h1 className="hero__title">RPKG Tool</h1>
                    <p className="hero__subtitle">
                        Tool for dealing with RPKG archives and various file
                        formats
                    </p>
                    <a
                        href={`https://github.com/glacier-modding/RPKG-Tool/releases/download/v${RPKGVersion}/rpkg_v${RPKGVersion}-gui.zip`}
                        className="button button--secondary"
                    >
                        Download latest GUI v{RPKGVersion}
                    </a>
                    <span className="margin-horiz--sm"></span>
                    <a
                        href={`https://github.com/glacier-modding/RPKG-Tool/releases/download/v${RPKGVersion}/rpkg_v${RPKGVersion}-cli.zip`}
                        className="button button--secondary"
                    >
                        Download latest CLI v{RPKGVersion}
                    </a>
                    <div className="margin-vert--sm">
                        <a
                            href="https://github.com/glacier-modding/RPKG-Tool"
                            className="button button--info"
                            target="_blank"
                        >
                            Source code
                        </a>
                    </div>
                </div>
            </header>
            <main>
                <div className="container margin-vert--lg">
                    <ImageCarousel />
                </div>
            </main>
        </Layout>
    )
}
