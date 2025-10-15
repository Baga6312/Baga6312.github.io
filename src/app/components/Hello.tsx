import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Hello() {
  return (
    <div className="bg-gray-900 py-20">
         <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="md:w-1/2 lg:w-2/3 pl-[150px] ">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
              Welcome to My <br className="hidden md:block" />
              <span className="text-indigo-500">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
    Lets Discover who i am             </p>
            <div className="flex gap-2">
              <a href="#about" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">
                Get Started
              </a>
              
            </div>
          </div>

          {/* Right Section (Avatar and Profile) */}
          <div className="md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
            <div className="flex-1 flex flex-col p-10">
              <div className="relative">
                <div className="flex flex-col items-center justify-center ">
                  <Avatar className="h-52 w-52 rounded-full ring-8 ring-blue-500 ring-offset-4 ring-offset-gray-900 overflow-hidden ">
                    <AvatarImage
                      src="/ena.jpg"
                      alt="Oussema ben Ayech"
                      className="object-cover w-100 h-80 mx -mt-4"
                    />
                    <AvatarFallback>FB</AvatarFallback>
                  </Avatar>
                  <h1 className="mt-8 text-4xl font-bold text-white">Oussema Ben Ayech</h1>
                  <p className="mt-2 text-xl text-gray-400">Software Developer | Hacker</p>

                  {/* Social Icons */}
                  <div className="mt-6 flex space-x-4">
                    <a
                      href="https://linkedin.com/in/oussema-ben-ayech-a8435b295/"
                      target="_blank"
                      className="text-gray-400 hover:text-white"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
                    </a>
                    <a
                      href="https://github.com/Baga6312"
                      target="_blank"
                      className="text-gray-400 hover:text-white"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61552107294778"
                      target="_blank"
                      className="text-gray-400 hover:text-white"
                    >
 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.5v-9.294H9.847V10.41h2.978V7.797c0-2.948 1.792-4.555 4.415-4.555 1.254 0 2.331.093 2.646.134v3.067h-1.815c-1.423 0-1.699.677-1.699 1.67v2.187h3.397l-.443 3.296h-2.954V24h5.787C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
    </svg>                    </a>
                    <a
                      href="https://app.hackthebox.com/profile/1834753"
                      target="_blank"
                      className="text-gray-400 hover:text-white"
                    >
<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
  <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm-32 368.6V246.6L64 189.5v188l160 57.1zm96 0l160-57.1v-188L320 246.6v188z"/>
</svg>                  </a>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-8 flex space-x-4">
                    <Button className="bg-white text-black border border-transparent hover:bg-black hover:text-white">
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      <a href="/cv-oussema-ben-ayech.pdf" download>
                        Download CV
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
