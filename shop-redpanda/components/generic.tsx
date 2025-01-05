"use client"; // Mark this component as a client component
import { useState } from 'react';

export default function ArtworkCard({ artwork }) {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Artwork Card */}
      <div
        onClick={openModal} // Open modal on click
        className="block border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      >
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{artwork.title}</h2>
          <p className="text-brand-beige-400">{artwork.description}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-w-4xl flex overflow-hidden">
            {/* Artwork Image */}
            <div className="w-2/3">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Textbox */}
            <div className="w-1/3 p-6">
              <h2 className="text-2xl font-bold mb-4">{artwork.title}</h2>
              <p className="text-gray-700">{artwork.description}</p>
              <a className="text-gray-700" href="https://www.etsy.com/uk/listing/1849380343/fairy-art-print?click_key=b1152230d9dbe796859f6edaa348813f4c765257%3A1849380343&click_sum=2ea0a282&ref=shop_home_active_3&frs=1">
              Buy Now
              </a>
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}