function Page() {
  return (
    <div className="body">
      <main>
        <section className="hero">
          <div className="hero-cnt">
            <h1 className="rale">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p class="bold">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <form>
              <div>
                <input
                  id="input-one"
                  type="text"
                  placeholder="Enter your email.."
                  required
                />
              </div>
              <button id="btn-one">Get Started</button>
            </form>
          </div>
          <div className="hero-img">
            <img src="../images/illustration-1.svg" alt="" />
          </div>
        </section>
        <section className="usage">
          <div className="usage-cnt">
            <div className="hero-cnt">
              <h2 className="rale">Stay productive, wherever you are</h2>
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>
              <div className="cta-see">
                <span>See how Fylo works</span>
                <img src="../images/icon-arrow.svg" alt="arrow svg" />
              </div>

              <div className="card">
                <div className="quote">
                  <img src="../images/icon-quotes.svg" alt="" />
                </div>
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="profile">
                  <div className="avatar">
                    <img
                      src="../images/avatar-testimonial.jpg"
                      alt="profile picture"
                    />
                  </div>
                  <div>
                    <h3 className="rale">Kyle Burton</h3>
                    <p>Founder & CEO, Huddle</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-img">
              <img src="../images/illustration-2.svg" alt="" />
            </div>
          </div>
        </section>
        <article>
          <div className="art-wrapper">
            <div className="hero-cnt">
              <h2 className="rale">Get early access today</h2>
              <p>
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>
            <form>
              <div>
                <input
                  id="input-two"
                  type="text"
                  placeholder="Enter your email.."
                  required
                />
              </div>
              <button id="btn-two">Get Started For Free</button>
            </form>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Page;
