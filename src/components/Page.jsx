import heroImg from "../assets/images/illustration-1.svg";
import arrow from "../assets/images/icon-arrow.svg";
import quote from "../assets/images/icon-quotes.svg";
import aboutImg from "../assets/images/illustration-2.svg";
import avatar from "../assets/images/avatar.jpg";

function Page() {
  return (
    <div className="body">
      <main>
        <section className="hero">
          <div className="hero-cnt">
            <h1 className="rale">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="bold">
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
            <img src={heroImg} alt="landing page graphics" />
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
                <img src={arrow} alt="arrow svg" />
              </div>

              <div className="card">
                <div className="quote">
                  <img src={quote} alt="quote icon" />
                </div>
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="profile">
                  <div className="avatar">
                    <img src={avatar} alt="profile picture" />
                  </div>
                  <div>
                    <h3 className="rale">Kyle Burton</h3>
                    <p>Founder & CEO, Huddle</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-img">
              <img src={aboutImg} alt="about product graphics" />
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
