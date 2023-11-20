import React from 'react';
import image1 from '../assets/images/umesh-soni-g1qlhFbWPKg-unsplash.jpg';
import image2 from '../assets/images/umesh-soni-JfCHn6H6AHY-unsplash.jpg';


const Home = () => {
  return (
   <>
     <div>
      {/* Welcome Section */}
      <section className="bg-gray-100 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Vada Pav Delight</h1>
        <p className="text-lg text-gray-600">
          Indulge in the authentic flavors of Mumbai with our mouthwatering Vada Pav.
        </p>
      </section>

      {/* Featured Products Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Featured Products</h2>
        {/* Add your featured Vada Pav products here */}
        {/* Example: */}
        <div className="flex justify-center space-x-6">
          <div>
            <img src={image1} alt="Vada Pav 1" className="rounded-md" />
            <p className="text-center font-bold mt-2">Classic Vada Pav</p>
          </div>
          <div>
            <img src={image2} alt="Vada Pav 2" className="rounded-md" />
            <p className="text-center font-bold mt-2">Spicy Vada Pav</p>
          </div>
          {/* Add more products as needed */}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-lg text-gray-600">
            We take pride in serving the best Vada Pav in town. Our recipes are crafted with
            passion and authenticity to bring the true flavors of Mumbai street food to your plate.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <div className="text-center">
          <p className="text-lg text-gray-600">Visit us at:</p>
          <p className="font-bold">123 Street, Cityville</p>
          <p className="text-lg text-gray-600 mt-4">Call us: (123) 456-7890</p>
          <p className="text-lg text-gray-600">Email: info@vadapavdelight.com</p>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Opening Hours</h2>
          <p className="text-lg text-gray-600 text-center">
            We are open every day from 11:00 AM to 9:00 PM. Come and enjoy the goodness of Vada Pav!
          </p>
        </div>
      </section>

      {/* Customer Reviews/Testimonials Section */}
      {/* Add your customer reviews/testimonials section here */}

      {/* Special Offers or Promotions Section */}
      {/* Add your special offers or promotions section here */}

      {/* Social Media Links Section */}
      {/* Add your social media links section here */}

      {/* Online Ordering/Reservation Section */}
      {/* Add your online ordering/reservation section here */}

      {/* Featured Blog Posts Section */}
      {/* Add your featured blog posts section here */}

      {/* Navigation Section */}
      {/* Ensure that your website's navigation is clear and intuitive */}

      {/* Images and Visuals Section */}
      {/* Use high-quality images of your Vada Pav and the ambiance of your business */}
      {/* Add a photo gallery or slider if desired */}
    </div></>
  );
};

export default Home;