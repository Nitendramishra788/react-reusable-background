

function EngineeringProfile({ profile }) {
    const {
        name,
        age,
        image,
        about,
        message
    } = profile;

    return (
        <section className="engineering-profile" id="home">

            {/* HUD Corner Decorations */}
            <span className="profile-corner profile-corner--tl" />
            <span className="profile-corner profile-corner--tr" />
            <span className="profile-corner profile-corner--bl" />
            <span className="profile-corner profile-corner--br" />

            {/* Top Header */}
            <div className="profile-header">

                <div className="profile-header__label">
                    <span className="profile-header__dot" />
                    PROFILE / SYSTEM ID
                </div>

                <div className="profile-header__status">
                    <span />
                    ONLINE
                </div>

            </div>

            {/* Main Content */}
            <div className="profile-main">

                {/* Image */}
                <div className="profile-image-section">

                    <div className="profile-image-frame">

                        <img
                            src={image}
                            alt={name}
                            className="profile-image"
                        />

                        <span className="image-corner image-corner--tl" />
                        <span className="image-corner image-corner--tr" />
                        <span className="image-corner image-corner--bl" />
                        <span className="image-corner image-corner--br" />

                    </div>

                    <div className="profile-image-id">
                        ID // PROFILE_001
                    </div>

                </div>

                {/* Information */}
                <div className="profile-info">

                    <span className="profile-greeting">
                        HELLO, I'M
                    </span>

                    <h1 className="profile-name">
                        {name}
                    </h1>

                    <div className="profile-meta">
                        <span>AGE</span>
                        <strong>{age}</strong>
                        <i />
                        <span>ENGINEERING PROFILE</span>
                    </div>

                    {message && (
                        <p className="profile-message">
                            {message}
                        </p>
                    )}

                    {about && (
                        <p className="profile-about">
                            {about}
                        </p>
                    )}


                    <a
                        href="/assets/cv.pdf"
                        download
                        className="profile-cv-btn"
                    >
                        <span>DOWNLOAD CV</span>
                        <span className="profile-cv-btn__arrow">↓</span>
                    </a>

                </div>

            </div>

            {/* Bottom System Information */}
            <div className="profile-footer">

                <span>
                    SYSTEM PROFILE // ACTIVE
                </span>

                <span>
                    PORTFOLIO_INTERFACE
                </span>

                <span>
                    ↓ EXPLORE
                </span>

            </div>

            {/* Scan Effect */}
            <div className="profile-scanline" />

        </section>
    );
}

export default EngineeringProfile;