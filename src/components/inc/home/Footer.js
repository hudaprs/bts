import React from "react"

const Footer = () => {
  return (
    <footer id='footer' className='py-4'>
      <div className='container'>
        <div className='footer-logo mb-2'>
          <img
            src={require("../../../assets/img/Footer/BTSWhite.png")}
            alt='BTSWhite'
          />
        </div>
        <div className='footer-content'>
          {/* Reach US & Contact US */}
          <div>
            <div className='mb-2'>
              <h3 className='footer-title mb-1'>Reach Us</h3>
              <p style={{ fontSize: "18px" }}>PT. INTERSOLUSI TEKNOLOGI ASIA</p>
              <p className='lead'>
                Jl. Dangdeur Indah III No.5 - 40163 Bandung, Indonesia
              </p>
            </div>
            <div>
              <p className='footer-title mb-1'>Contact Us</p>
              <p className='lead'>(+62 22) 6614726</p>
              <p className='lead'>info@bts.id</p>
            </div>
          </div>

          {/* Blog Post */}
          <div className='footer-blog'>
            <h3 className='footer-title mb-1'>Blog Post</h3>
            <div className='footer-blog-item'>
              <img
                src={require("../../../assets/img/Home/Blog/Blog1.png")}
                alt='Footer1'
                className='footer-blog-img'
              />
              <div className='footer-blog-desc'>
                <h4 className='footer-blog-title'>
                  Aplikasi ERP Pada Rumah Sakit
                </h4>
                <p className='lead'>20 March 2020</p>
              </div>
            </div>

            <div className='footer-blog-item'>
              <img
                src={require("../../../assets/img/Home/Blog/Blog2.png")}
                alt='Footer2'
                className='footer-blog-img'
              />
              <div className='footer-blog-desc'>
                <h4 className='footer-blog-title'>
                  Aplikasi ERP Pada Rumah Sakit
                </h4>
                <p className='lead'>20 March 2020</p>
              </div>
            </div>

            <div className='footer-blog-item'>
              <img
                src={require("../../../assets/img/Home/Blog/Blog3.png")}
                alt='Footer3'
                className='footer-blog-img'
              />
              <div className='footer-blog-desc'>
                <h4 className='footer-blog-title'>
                  Aplikasi ERP Pada Rumah Sakit
                </h4>
                <p className='lead'>20 March 2020</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className='footer-title mb-1'>News Letter</h3>
            <form>
              <div
                style={{
                  position: "relative"
                }}
              >
                <input
                  type='text'
                  className='footer-input'
                  placeholder='Your email address'
                />
                <div style={styles.btnFooterContainer}>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    style={styles.btnFooter}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='footer-line' />

        <div className='footer-info mt-1'>
          <p className='footer-info-text'>
            &copy; PT INTERSOLUSI TEKNOLOGI ASIA 2020
          </p>
          <div className='socials'>
            <img
              src={require("../../../assets/img/Footer/Facebook.png")}
              alt='Facebook'
              style={{ marginRight: "15px" }}
            />
            <img
              src={require("../../../assets/img/Footer/LinkedIn.png")}
              alt='LinkedIn'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  btnFooterContainer: {
    backgroundColor: "#fff",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px"
  },
  btnFooter: {
    marginTop: "8px",
    marginRight: "5px"
  }
}

export default Footer
