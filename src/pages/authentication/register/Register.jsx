import "./register.css";

// material UI

function Register() {
  return (
    <>
      <div id="container-register">
        <img
          id="background-register"
          src="./authentication/register/registerbg.png"
          alt=""
        />
        <img
          id="background-asset1-register"
          src="./authentication/register/asset1.png"
          alt=""
        />
        <img
          id="background-asset2-register"
          src="./authentication/register/asset2.png"
          alt=""
        />
        <img
          id="background-planet-register"
          src="./authentication/register/planet.png"
          className="floating"
          alt=""
        />
        <div id="container-inner-register">
          <div id="container-inner-left-register">
            <div id="container-inner-left-form-register">
              <p id="container-inner-left-form-header-register">
                CREATE ACCOUNT
              </p>
              <h1 id="container-inner-left-form-main-register">
                Reach for the stars.
              </h1>
              <p id="contaner-inner-left-form-sub-register">
                Already a Member?{" "}
                <span style={{ color: "SkyBlue" }}>Log in</span>
              </p>
              <form action="">
                <div id="form-container-register">
                  <div style={{ display: "flex" }}>
                    <div className="form-container-namedesign-register">
                      <div id="form-container-icon-register">
                        <i
                          class="bi bi-person-vcard-fill"
                          style={{ color: "white", fontSize: "1.5vw" }}
                        ></i>
                      </div>
                      <input
                        className="container-inner-left-form-input-register"
                        placeholder="First Name"
                        type="text"
                      />
                    </div>
                    <div className="form-container-namedesign-register">
                      <div id="form-container-icon-register">
                        <i
                          class="bi bi-person-vcard-fill"
                          style={{ color: "white", fontSize: "1.5vw" }}
                        ></i>
                      </div>
                      <input
                        className="container-inner-left-form-input-register"
                        placeholder="Last Name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="form-container-namedesign-register">
                      <div id="form-container-icon-register">
                        <i
                          class="bi bi-person-fill"
                          style={{ color: "white", fontSize: "1.5vw" }}
                        ></i>
                      </div>
                      <input
                        className="container-inner-left-form-input-register"
                        placeholder="Gender"
                        type="text"
                      />
                    </div>
                    <div className="form-container-namedesign-register">
                      <div id="form-container-icon-register">
                        <i
                          class="bi bi-calendar-week-fill"
                          style={{ color: "white", fontSize: "1.5vw" }}
                        ></i>
                      </div>
                      <input
                        className="container-inner-left-form-input-register"
                        onFocus={(event) => (event.target.type = "date")}
                        onBlur={(event) => {
                          if (!event.target.value) {
                            event.target.type = "text";
                            event.target.value = "Birthday";
                          }
                        }}
                        type="date"
                      />
                    </div>
                  </div>
                  <input
                    className="container-inner-left-form-input-register"
                    type="email"
                  />
                  <input
                    className="container-inner-left-form-input-register"
                    type="password"
                  />
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
          <div id="container-inner-right-register">
            <div
              id="carouselExampleDark"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                  <img
                    id="container-inner-right-socialmedia-register"
                    src="./authentication/register/socialmedia.png"
                    className="d-block floating"
                    alt="..."
                  />
                  <div className="carousel-caption">
                    <h5 className="container-inner-right-header-register">
                      Express. Explore. Share
                    </h5>
                    <p className="container-inner-right-sub-register">
                      Let your voice be heard in the vast cosmos of creativity.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                  <img
                    id="container-inner-right-planets-register"
                    src="./authentication/register/planets.png"
                    className="d-block floating"
                    alt="..."
                  />
                  <div className="carousel-caption ">
                    <h5 className="container-inner-right-header-register">
                      Customize your universe
                    </h5>
                    <p className="container-inner-right-sub-register">
                      Personalize your planet. Make your mark in the <br />
                      constellation of individuality.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                  <img
                    id="container-inner-right-reels-register"
                    src="./authentication/register/reels.png"
                    className="d-block floating"
                    alt="..."
                  />
                  <div className="carousel-caption">
                    <h5 className="container-inner-right-header-register">
                      Embrace the Cosmos
                    </h5>
                    <p className="container-inner-right-sub-register">
                      Discover captivating content from far and wide. Let the
                      <br /> reels transport you to endless inspiration.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
