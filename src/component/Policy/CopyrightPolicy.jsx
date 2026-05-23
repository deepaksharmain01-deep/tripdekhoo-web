import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PrivacyPolicy.css';

const CopyrightPolicy = () => {
  return (
    <>
      <div className="image-container">
        <img
          className="w-100"
          src="https://d19k5x9tl64mcw.cloudfront.net/spiti6.jpg"
        />
        <div className="details-text-overlap">
          <h1>Copyright Policy</h1>
          <div>Last Updated: May 15, 2025</div>
          <div>Welcome to tripdekhoo.com</div>
        </div>
      </div>
      <div className="container py-5 mt-5 policy-page">
        <h1 className="text-center mb-5">Copyright Policy – TripDekhoo</h1>

        <section className="mb-5">
          <h2>Effective Date: 17 May 2025</h2>
          <p>
            At <strong>TripDekhoo.com</strong>, we are committed to respecting the intellectual property rights of others
            and expect the same from our users, contributors, partners, and stakeholders. This
            Copyright Policy outlines how we manage copyrighted...
          </p>
        </section>

        <section className="mb-5">
          <h3>1. Ownership of Content</h3>
          <p>
            All content published on <strong>TripDekhoo.com</strong>, including but not limited to text, images, videos,
            graphics, itineraries, guides, blogs, and multimedia, is either:
          </p>
          <ul>
            <li>Created by our in-house team or freelance writers under work-for-hire agreements.</li>
            <li>Provided by our verified partners, including:</li>
            <ul>
              <li>Local travel guides</li>
              <li>Vendors and tour operators</li>
              <li>Travel agents affiliated with TripDekhoo</li>
              <li>Third-party suppliers and service providers</li>
            </ul>
            <li>Sourced from public domain or copyright-free platforms, such as:</li>
            <ul>
              <li>Pexels, Pixabay, Unsplash, or similar royalty-free platforms</li>
              <li>Select previews from Google Search labeled for reuse</li>
            </ul>
            <li>Shared by users or community members with explicit permission or under submission terms.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h3>2. Third-Party Content and Attribution</h3>
          <p>
            Where applicable, we provide credits to third-party authors or photographers as required by
            their license terms. If you believe your content has been used improperly, refer to the
            "Copyright Claims" section.
          </p>
        </section>

        <section className="mb-5">
          <h3>3. Image Terms of Use</h3>
          <p>All images on <strong>TripDekhoo.com</strong> fall into one of these categories:</p>
          <ul>
            <li>Proprietary Images – owned/licensed to TripDekhoo.</li>
            <li>User-Submitted Images – uploaded by users with permission.</li>
            <li>Royalty-Free Images – from Pexels, Pixabay, Unsplash, etc.</li>
            <li>Creative Commons or Fair Use – labeled for reuse.</li>
          </ul>
          <p>If any image is used in violation of rights, we’ll remove or replace it upon notification.</p>
        </section>

        <section className="mb-5">
          <h3>4. User-Generated Content</h3>
          <p>
            When users upload content to <strong>TripDekhoo.com</strong>, they grant us a non-exclusive,
            worldwide, royalty-free license to use, distribute, reproduce, modify, and display it.
          </p>
          <p>Users must ensure they own rights to the content or have permission from the owner.</p>
        </section>

        <section className="mb-5">
          <h3>5. Copyright Infringement Claims</h3>
          <p>
            If your intellectual property has been used on <strong>TripDekhoo.com</strong> without authorization,
            send a notification including:
          </p>
          <ol>
            <li>Your full name and contact info.</li>
            <li>Description of the copyrighted work.</li>
            <li>Exact URL or location of infringing material.</li>
            <li>Statement that the use is unauthorized.</li>
            <li>Statement under penalty of perjury that info is accurate.</li>
            <li>Your physical/electronic signature.</li>
          </ol>
          <p>
            Send your claim to: <br />
            Email: [insert email] <br />
            Address: [insert address] <br />
            Phone: [insert phone]
          </p>
        </section>

        <section className="mb-5">
          <h3>6. Repeat Infringers</h3>
          <p>We may terminate accounts or partnerships of repeat infringers.</p>
        </section>

        <section className="mb-5">
          <h3>7. Disclaimer</h3>
          <p>We strive to avoid copyright violations. Any unintentional use will be addressed promptly.</p>
        </section>

        <section className="mb-5">
          <h3>8. Policy Updates</h3>
          <p>This policy may change to reflect legal or platform updates.</p>
        </section>
      </div>
    </>
  );
};

export default CopyrightPolicy;
