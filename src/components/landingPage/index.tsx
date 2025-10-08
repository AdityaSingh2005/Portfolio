/**
 * Landing Page Component
 * Simple portfolio landing page displaying name and coming soon message
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        {/* Main Name */}
        <h1 className="text-6xl md:text-6xl font-medium text-gray-900 dark:text-white mb-5">
          Aditya Singh
        </h1>
        
        {/* Description */}
        <p className="text-md md:text-md text-gray-600 dark:text-gray-300 font-normal max-w-md mx-auto">
          The site will be live soon
        </p>
        
      </div>
    </div>
  );
}
