import AnimatedBackground from "./AnimatedBackground";

export default function IOT() {
  return (
    <>
    <AnimatedBackground />
    <section className="min-h-screen  text-white flex items-center justify-center snap-start p-8 relative z-10">

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">IOT Tool for wireless pentesting</h1>
            <p className="text-xl text-gray-400 mb-12">
                an IOT hacking Tool developped part of school project.
            </p>
          </div>

            <h2 className="text-3xl font-bold text-white mb-4">Coming Soon ...</h2>
            
        </div>
      </div>
    </section>
  </>
  );
}