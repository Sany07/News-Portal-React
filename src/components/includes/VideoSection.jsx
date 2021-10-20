import React from "react";

export const VideoSection = () => {
    return (
        <>
            <section id="video_section" className="video_section">
                <div className="container">
                    <div className="well">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="embed-responsive embed-responsive-4by3">
                                    <iframe
                                        className="embed-responsive-item"
                                        src="https://www.youtube.com/embed/MJ-jbFdUPns"
                                        frameborder="0"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="embed-responsive embed-responsive-4by3">
                                    <iframe
                                        className="embed-responsive-item"
                                        src="https://www.youtube.com/embed/h5Jni-vy_5M"
                                    ></iframe>
                                </div>

                                <div className="embed-responsive embed-responsive-4by3 m16">
                                    <iframe
                                        className="embed-responsive-item"
                                        src="https://www.youtube.com/embed/wQ5Gj0UB_R8"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="embed-responsive embed-responsive-4by3">
                                    <iframe
                                        className="embed-responsive-item"
                                        src="https://www.youtube.com/embed/UPvJXBI_3V4"
                                    ></iframe>
                                </div>

                                <div className="embed-responsive embed-responsive-4by3 m16">
                                    <iframe
                                        className="embed-responsive-item"
                                        src="https://www.youtube.com/embed/DTCtj5Wz6BM"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
