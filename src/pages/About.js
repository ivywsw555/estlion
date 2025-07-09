import React from 'react';
import banner from '../assets/images/p.jpg'; // Rename '͸ 2.jpg' to 'about-banner.jpg'

const About = () => {
  return (
    <div>
      <img src={banner} alt="Estlion Factory" className="page-banner" />
      <h1 className="page-title">About Us</h1>
      <p>
        Welcome to visit our web site.
      </p>
      <p>
        For common dream and view, Estlion (Shanghai) Machinery Co. Ltd was established by a young team. The young team has a very strong background of technology, marketing and service. In order to bring green power to every corner of the world, the young team swears to devote for the target and makes the dream become reality.
      </p>
      <p>
        Estlion Machinery is the one of the leading manufacturer of engines, generators, welders and water pumps from small to big range in china. The products were famous for high quality, low noise, light weight and good design. They have been sold to all of the world such as America, Europe, Asia, Africa and Australia, etc.
      </p>
      <p>
        Quality and service are Estlion permanent concerns and culture. All products are designed based on humanistic ideas. Make customer understand, operate and maintain machines easily. Make customer feel convenient and safe in communications. Make customer remember and like Estlion.
      </p>
    </div>
  );
};

export default About;