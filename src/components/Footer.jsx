const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-sm border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">FLIX</h3>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for movie recommendations and streaming
              entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Movies", "TV Shows", "My List", "Browse All"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <ul className="space-y-2">
              {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map(
                (category) => (
                  <li key={category}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {category}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              {[
                "Help Center",
                "Contact Us",
                "Privacy Policy",
                "Terms of Service",
              ].map((support) => (
                <li key={support}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {support}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {[
              {
                name: "Facebook",
                icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
              },
              {
                name: "Twitter",
                icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
              },
              {
                name: "Instagram",
                icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM12 16.624c-2.563 0-4.637-2.074-4.637-4.637S9.437 7.35 12 7.35s4.637 2.074 4.637 4.637S14.563 16.624 12 16.624zm4.875-8.362c-.6 0-1.087-.487-1.087-1.087s.487-1.087 1.087-1.087 1.087.487 1.087 1.087-.487 1.087-1.087 1.087z",
              },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; 2025 MovieFlix. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
