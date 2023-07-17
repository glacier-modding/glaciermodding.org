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
                <br />
                <div className="container">
                    <div className="row">
                        {featuredModsData.map((mod, index) => (
                            <div className="col col--4" key={index}>
                                <div className="card margin-vert--sm">
                                    <div className="card__header">
                                        <div class="avatar">
                                            <div class="avatar__intro">
                                                <div class="avatar__name">{mod.name}</div>
                                                <small class="avatar__subtitle">{mod.author}</small>
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
                                            >
                                                Install
                                            </a>
                                        )}
                                        {mod.nexusLink && (
                                            <a
                                                href={mod.nexusLink}
                                                className="button button--secondary button--block"
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
            </main>
        </Layout>
    );
}
