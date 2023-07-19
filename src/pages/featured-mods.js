import React from "react"
import Layout from "@theme/Layout"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import featuredModsData from "./featured-mods.json";

const ImageCarousel = ({ images }) => {
    const renderImages = () => {
        if (Array.isArray(images)) {
            return images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Image ${index}`} />
                </div>
            ));
        } else {
            return (
                <div>
                    <img src={images} alt="Featured Mod" />
                </div>
            );
        }
    };

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
    );
};

export default function FeaturedMods() {
    return (
        <Layout
            title="Featured Mods"
            description="Various mods for Hitman 3 that are worth checking out"
        >
            <main>
                <div className="container">
                    {Array.from(new Set(featuredModsData.map((mod) => mod.category))).map((category) => (
                        <div key={category} className="margin-vert--md">
                            <h2>{category}</h2>
                            <div className="row">
                                {featuredModsData.filter((mod) => mod.category === category).map((mod, index) => (
                                    <div className="col col--4" key={index}>
                                        <div className="card margin-vert--sm">
                                            <div className="card__header">
                                                <div className="avatar">
                                                    <div className="avatar__intro">
                                                        <div className="avatar__name">{mod.name}</div>
                                                        <small className="avatar__subtitle">{mod.author}</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__image">
                                                <ImageCarousel images={mod.imageURL} />
                                            </div>
                                            <div className="card__body">
                                                <p>{mod.description}</p>
                                            </div>
                                            <div className="card__footer">
                                                {mod.installLink && (
                                                    <a
                                                        href={mod.installLink}
                                                        className="button button--primary button--block margin-bottom--md"
                                                        target="_blank"
                                                    >
                                                        Install
                                                    </a>
                                                )}
                                                {mod.nexusLink && (
                                                    <a
                                                        href={mod.nexusLink}
                                                        className="button button--secondary button--block"
                                                        target="_blank"
                                                    >
                                                        Nexus Page
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </Layout>
    );
}
