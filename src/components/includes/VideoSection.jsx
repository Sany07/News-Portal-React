import React from "react";

export const VideoSection = () => {
    return (
        <section id="video_section" className="video_section">
            <div className="container">
                <div className="well">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe
                                    title="video-1"
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/MJ-jbFdUPns"
                                    allowFullScreen
                                    frameBorder={0}
                                />
                            </div>
                            {/* embed-responsive */}
                        </div>
                        {/* col-md-6 */}
                        <div className="col-md-3">
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe
                                    title="video-2"
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/h5Jni-vy_5M"
                                />
                            </div>
                            {/* embed-responsive */}
                            <div className="embed-responsive embed-responsive-4by3 m16">
                                <iframe
                                    title="video-3"
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/wQ5Gj0UB_R8"
                                />
                            </div>
                            {/* embed-responsive */}
                        </div>
                        {/* col-md-3 */}
                        <div className="col-md-3">
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe
                                    title="video-4"
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/UPvJXBI_3V4"
                                />
                            </div>
                            {/* embed-responsive */}
                            <div className="embed-responsive embed-responsive-4by3 m16">
                                <iframe
                                    title="video-5"
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/DTCtj5Wz6BM"
                                />
                            </div>
                            {/* embed-responsive */}
                        </div>
                        {/* col-md-3 */}
                    </div>
                    {/* row */}
                </div>
                {/* well */}
            </div>
            {/* Container */}
        </section>
    );
};
