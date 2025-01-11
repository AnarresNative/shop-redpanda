"use client"; // Mark this component as a client component
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ArtworkCard({ artwork }) {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setIsVisible(false);
    // Wait for the transition to complete before unmounting
    setTimeout(() => setIsModalOpen(false), 300); // Duration matches Tailwind's duration-300
  };

  // Handle Esc key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  return (
    <div>
      {/* Artwork Card */}
      <div
        onClick={openModal} // Open modal on click
        className="block border rounded-lg overflow-hidden shadow-lg transition-opacity duration-300 hover:opacity-80  cursor-pointer"
      >
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          width={500}
          height={500}
        />
        <div className="p-4 bg-brand-orange-700">
          <h2 className="text-xl font-semibold">{artwork.title}</h2>
          <p className="">{artwork.description}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-brand-orange-400 bg-opacity-50 transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal} // Close modal when backdrop is clicked
        >
          <div
            className={`bg-brand-lightOrange-900 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-11/12 max-w-5xl flex overflow-hidden transform transition-transform duration-300 ${
              isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Artwork Image */}
            <div className="w-2/3">
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            {/* Textbox */}
            <div className="w-1/3 p-6">
              <h2 className=" font-bold font-size mb-4 text-[calc(1vw+1em)]">{artwork.title}</h2>
              <p className=" text-[calc(0.5vw+0.75em)]">{artwork.description}</p>
              <a
                className="text-brand-pink-300 hover:underline text-[calc(0.5vw+0.75em)]"
                href={artwork.storelink}
                target="_blank" // Open link in a new tab 
                rel="noopener noreferrer" // Securitybest practices
              >
                Purchase Artwork
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
