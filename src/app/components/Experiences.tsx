import React from 'react';

const Experiences: React.FC = () => {
  return (
<section className="bg-navy dark:text-gray-100">
  <div className="container max-w-5xl px-4 py-12 mx-auto">
    <div className="grid gap-4 mx-4 sm:grid-cols-12">
      <div className="col-span-12 sm:col-span-3">
        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
          <h3 className="text-3xl font-semibold">My Experiences</h3>
        </div>
      </div>
      <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">




          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
            <h3 className="text-xl font-semibold tracking-wide">Innothink-IT : Penetration Tester </h3>
            <time className="text-xs tracking-wide uppercase dark:text-gray-400">May - July 2024</time>
            <p className="mt-3">Tested the security of clients website </p>
          </div>





          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
            <h3 className="text-xl font-semibold tracking-wide">Innothink-IT : Final year project internship </h3>
            <time className="text-xs tracking-wide uppercase dark:text-gray-400">February - May 2024</time>
            <p className="mt-3">Developed a self hosting VPN platform as an open source project based on WireGuard architecture to prevent identity
theft using Robust web technologies Like React , NextJs and   MongoDB.</p>
          </div>





          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
            <h3 className="text-xl font-semibold tracking-wide">Upwork – Freelancer</h3>
            <time className="text-xs tracking-wide uppercase dark:text-gray-400">January 2024</time>
            <p className="mt-3">Developed an automation script for a Linux system to update a Github repo under a condition on an NGINX serve.</p>
          </div>
          




          
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
            <h3 className="text-xl font-semibold tracking-wide">Sanofi – Summer internship </h3>
            <time className="text-xs tracking-wide uppercase dark:text-gray-400">July – August 2023</time>
            <p className="mt-3">Set up a new network architecture for the administration departments.</p>
            <p className="mt-3">Worked as IT support and monitored the network infrastructure.</p>
          </div>





          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
            <h3 className="text-xl font-semibold tracking-wide">SEA group – Summer internship </h3>
            <time className="text-xs tracking-wide uppercase dark:text-gray-400">June – July 2022</time>
            <p className="mt-3">Developed a fully automated door to manage employee entry using Electron.js, ReactJS, NestJs, expressJS, PostgreSQL,
Arduino and RFID card reader.</p>
          </div>


        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Experiences;
