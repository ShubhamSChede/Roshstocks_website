import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import FixedWhatsappButton from '../../../components/FixedWhatsapp'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Roshni" 
            className="rounded-full w-32 h-32 mx-auto mb-6 border-4 border-indigo-500 shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-4 text-gray-900">About Roshstocks</h1>
          <p className="text-xl text-indigo-600">Empowering Your Digital Presence</p>
        </div>

        {/* About Roshstocks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
            Roshstocks was born out of a passion for creating beautiful, functional digital assets. 
            As a freelancer, I noticed a gap in the market for high-quality, customizable designs that don't break the bank. 
            That's why I started Roshstocks - to provide affordable, professional-grade digital resources to individuals and businesses alike.
          </p>
          <p className="text-lg text-gray-700">
            With years of experience in graphic design and a keen eye for trends, Roshstocks has grown from a solo venture into a trusted name in the digital asset space.
          </p>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">Custom Designs</h3>
              <p className="text-gray-700">Tailored digital assets created to meet your specific needs and brand identity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">Ready-to-Use Templates</h3>
              <p className="text-gray-700">A vast library of pre-designed templates for various purposes, easily customizable.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">Branding Packages</h3>
              <p className="text-gray-700">Comprehensive branding solutions to establish a strong, cohesive visual identity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">Design Consultations</h3>
              <p className="text-gray-700">Expert advice on improving your visual communication and digital presence.</p>
            </div>
          </div>
        </section>

        {/* Personal Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">My Freelance Journey</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              My journey as a freelancer began in [year], driven by a desire to create impactful designs and the freedom to work on diverse projects. 
              Over the years, I've had the privilege of working with clients from various industries, each project adding to my experience and skill set.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The path hasn't always been smooth - from navigating client expectations to balancing multiple projects, there have been challenges. 
              But each obstacle has been a learning opportunity, shaping me into the designer and entrepreneur I am today.
            </p>
            <p className="text-lg text-gray-700">
              Roshstocks is the culmination of this journey - a platform where I can share my expertise, creativity, and passion with a wider audience, 
              helping others bring their visual ideas to life.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-indigo-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Digital Presence?</h2>
            <p className="text-lg mb-6">Let's collaborate and bring your vision to life with Roshstocks.</p>
            <button className="bg-white text-indigo-600 py-2 px-6 rounded-full font-bold text-lg hover:bg-indigo-100 transition duration-300">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <FixedWhatsappButton/>
      <Footer />
    </div>
  )
}