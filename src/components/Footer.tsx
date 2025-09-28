function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          
          {/* About Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              Our Language Learning App is dedicated to helping learners master
              Indian languages with ease. From Hindi to Tamil, Bengali to Kannada,
              we bring India’s linguistic diversity closer to you.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-white transition-colors duration-300">
                  Languages
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Follow Us */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Instagram
              </a>
            </div>
          </div>
  
          {/* Contact Info */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p>New Delhi, India</p>
            <p>Pin: 110001</p>
            <p>Email: support@learnindianlanguages.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
  
        <p className="text-center text-xs pt-8">
          © 2025 Learn Indian Languages. All rights reserved.
        </p>
      </footer>
    )
  }
  
  export default Footer
  