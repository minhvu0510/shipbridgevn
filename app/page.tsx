export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        <span className="text-blue-600">ShipBridge</span> - Freight Forwarding Marketplace
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Compare freight quotes from verified forwarders in 24 hours
      </p>
      <a 
        href="#quote"
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 shadow-lg"
      >
        Get Instant Quotes
      </a>
    </div>
  );
}