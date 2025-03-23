import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-light tracking-widest uppercase">Rasim</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-gray-600">About</a>
              <a href="#projects" className="hover:text-gray-600">Projects</a>
              <a href="#skills" className="hover:text-gray-600">Skills</a>
              <a href="#contact" className="hover:text-gray-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Hi, I'm Rasim</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Full Stack Developer</p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              View My Work
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-4">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              I love creating elegant solutions to complex problems and am constantly learning new technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-gray-600 mb-4">Project description goes here. This is a brief overview of what the project does.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          
          {/* Frontend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Frontend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">⚛️</div>
                <h4 className="font-semibold mb-2">React</h4>
                <p className="text-sm text-gray-600">Components, Hooks, State Management</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">▲</div>
                <h4 className="font-semibold mb-2">Next.js</h4>
                <p className="text-sm text-gray-600">SSR, SSG, API Routes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-semibold mb-2">Tailwind CSS</h4>
                <p className="text-sm text-gray-600">Responsive Design, Custom Components</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-semibold mb-2">Responsive Design</h4>
                <p className="text-sm text-gray-600">Mobile-First Approach</p>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Backend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">⚙️</div>
                <h4 className="font-semibold mb-2">Node.js</h4>
                <p className="text-sm text-gray-600">Express, REST APIs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">🔧</div>
                <h4 className="font-semibold mb-2">Prisma</h4>
                <p className="text-sm text-gray-600">ORM, Database Schema</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">🔒</div>
                <h4 className="font-semibold mb-2">Authentication</h4>
                <p className="text-sm text-gray-600">JWT, OAuth, Security</p>
              </div>
            </div>
          </div>

          {/* Database Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Database & ORM</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">🗄️</div>
                <h4 className="font-semibold mb-2">MongoDB</h4>
                <p className="text-sm text-gray-600">NoSQL, Aggregation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-semibold mb-2">PostgreSQL</h4>
                <p className="text-sm text-gray-600">SQL, Relations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">🔄</div>
                <h4 className="font-semibold mb-2">Prisma ORM</h4>
                <p className="text-sm text-gray-600">Schema Design, Migrations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">📈</div>
                <h4 className="font-semibold mb-2">Database Design</h4>
                <p className="text-sm text-gray-600">Normalization, Indexing</p>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">🐳</div>
                <h4 className="font-semibold mb-2">Docker</h4>
                <p className="text-sm text-gray-600">Containers, Docker Compose</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">🔄</div>
                <h4 className="font-semibold mb-2">CI/CD</h4>
                <p className="text-sm text-gray-600">GitHub Actions, Jenkins</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">📦</div>
                <h4 className="font-semibold mb-2">Package Management</h4>
                <p className="text-sm text-gray-600">npm, yarn, pnpm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-8">
            Feel free to reach out to me at{' '}
            <a href="mailto:rasimbhat2022@gmail.com" className="text-black hover:text-gray-800 underline">
              rasimbhat2022@gmail.com
            </a>
          </p>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2024 Rasim. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
