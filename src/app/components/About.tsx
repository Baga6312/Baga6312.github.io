export default function About() {
  return (
      <section id="about" className="min-h-screen bg-secondary flex items-center justify-center snap-start p-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* About Me Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold lg:text-4xl text-white">About Me</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Hello! I&apos;m Oussema , a passionate individual about all open-source things
              and part time hacker looking for bug bounty programs to make the web a safer place.
              I enjoy building functional applications and solve complex problems.
              With expertise in Cyber Security and web development, I thrive on continuously
              learning to enhance my craft .
            </p>
          </div>

          {/* Vision Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold lg:text-4xl text-white">My Vision</h2>
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg mt-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">
                  &quot;Why be normal when you can be great?&quot;
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  Being normal is about staying within the boundaries of the ordinary, but greatness comes from constantly pushing those boundaries. For someone like me, driven by an insatiable curiosity and the desire to learn everything I can, the goal is not just to exist but to thrive.
                  <br /><br />
                  I believe that true growth lies in challenging myself to master new skills, solve complex problems, and continuously evolve. My vision is to embrace every learning opportunity, to transform passion into expertise, and to inspire others by showing that greatness is within reach for those who relentlessly pursue it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}