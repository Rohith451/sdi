import React from 'react';

// This data represents the services offered.
const servicesData = [
  {
    title: 'GOOGLE 360 VIRTUAL TOURS',
    description: 'We go above and beyond to bring your business to life with Google 360 virtual tours. Say goodbye to traditional static images and hello to immersive, interactive experiences that transport your customers right into the heart of your establishment. Let them explore, engage, and fall in love with your brand from the comfort of their screens, enticing them to visit in person and become loyal patrons.',
    imageUrl: 'https://picsum.photos/400/300?random=10',
    special: true,
  },
  {
    title: 'NFC BUSINESS CARDS',
    description: 'Imagine handing out business cards that are more than just pieces of paper - they are gateways to unforgettable experiences. Our NFC business cards effortlessly bridge the gap between the physical and digital realms, allowing potential clients to seamlessly access your website, social media, portfolio, and other essential information with just a tap. It\'s a modern twist on networking that will make you stand out from the crowd.',
    imageUrl: 'https://picsum.photos/400/300?random=11',
    special: false,
  },
  {
    title: 'CORPORATE PHOTOGRAPHY',
    description: 'We understand the power of visual storytelling. That\'s why we offer top-notch corporate photography services that capture the essence and uniqueness of your business. Whether it\'s a stunning product showcase, a professional headshot portfolio, or a captivating event coverage, our skilled photographers will make your visuals come alive, leaving a lasting impression on your target audience.',
    imageUrl: 'https://picsum.photos/400/300?random=12',
    special: false,
  },
];

// The Services Page component showcases the company's offerings.
function ServicesPage() {
  return (
    <div className="container page-container">
      <div id="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-container">
                <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="service-image"
                />
                {service.special && (
                    <div className="special-overlay">
                        <div className="virtual-tour-badge">
                            <p className="tour-title">360°</p>
                            <p className="tour-subtitle">VIRTUAL TOUR</p>
                        </div>
                    </div>
                )}
            </div>
            <h3>{service.title}</h3>
            <p>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;