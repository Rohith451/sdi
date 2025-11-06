import React from 'react';

// The Collaboration Page component provides insight into the company's ethos and contact details.
function CollaborationPage() {
  return (
    <div className="container page-container">
      <div className="collaboration-content">
        <img
          src="https://picsum.photos/1200/500?random=2"
          alt="Team collaboration in an office"
          className="hero-image"
        />
        
        <div className="collaboration-text">
          <p>
            Welcome to Lycaon, where innovation and imagination collide to create a world of endless possibilities. We are not just a startup; we are a movement driven by a clear mission to redefine the boundaries of what's possible and inspire a sense of wonder in every interaction and touch.
          </p>
          
          <div>
            <h2>Our Mission: <span className="highlight">Unleashing the Power of Imagination</span></h2>
            <p>
              At Lycaon, our mission is to empower individuals and businesses to unleash their full creative potential. We believe that by nurturing imagination, we can unlock innovative solutions that reshape industries and make the world a more exciting and vibrant place.
            </p>
          </div>

          <div>
            <h2>Our Aim: <span className="highlight">Fueling Fun, Inspiring Innovation</span></h2>
            <p>
              We're on a relentless pursuit to fuel fun and inspiration in everything we do. Our aim is to create products, services, and experiences that ignite joy, spark curiosity, and leave a lasting impact. By infusing our work with a sense of playfulness, we strive to make every interaction with Lycaon a delightful adventure.
            </p>
          </div>

          <div>
            <h2>Our Goal: <span className="highlight">Crafting Tomorrow's Wonders Today</span></h2>
            <p>
              Our goal is to be at the forefront of innovation, pushing the boundaries of what's imaginable. We are dedicated to creating groundbreaking technologies, imaginative experiences, and awe-inspiring products that shape the future. With a focus on creative thinking and disruptive thinking, we aim to leave an indelible mark on the world, one innovation at a time.
            </p>
          </div>
          
           <p>
            So, whether you're an individual seeking a spark of inspiration or a business ready to embark on a transformative journey, join us in this exhilarating adventure. Together, let's unleash our imagination, fuel our passion, and create a future that surpasses our wildest dreams. Get ready to embark on an extraordinary voyage with Lycaon, where innovation meets limitless fun!
          </p>
        </div>
      </div>
      
      {/* Contact and Location Section */}
      <div className="contact-section">
        <div>
          <img src="https://i.imgur.com/k25yKjY.png" alt="Google Map Location of Lycaon" className="map-image" />
        </div>
        <div className="contact-info">
          <h3>Address:</h3>
          <p>
            501 502, 5th Floor, Splendid Plaza, 24, Wheeler Rd, Cox Town, Bengaluru, Karnataka 560005
          </p>
          <h3>Contact us:</h3>
          <p>
            <a href="mailto:support@lycaon.co.in">support@lycaon.co.in</a>
          </p>
          <h3>Ph no:</h3>
          <p>8431357467</p>
        </div>
      </div>

      {/* Social Media Icon */}
      <div className="social-media-section">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.8-11.2c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" clipRule="evenodd" />
            </svg>
        </a>
      </div>
    </div>
  );
}

export default CollaborationPage;