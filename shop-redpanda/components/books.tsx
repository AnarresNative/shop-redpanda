"use client"; // Mark this component as a client component
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Book {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  storelink: string;
}

interface Books {
  book: Book;
}


export default function BookCard({ book }: Books) {
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
    const handleEsc = (event: KeyboardEvent) => {
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
      {/* book Card */}
      <div
        onClick={openModal} // Open modal on click
        className="block border rounded-lg overflow-hidden shadow-lg transition-opacity duration-300 hover:opacity-80  cursor-pointer"
      >
        <Image
          src={book.imageUrl}
          alt={book.title}
          width={500}
          height={500}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-brand-beige-400 singleLineContainer">{book.description}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeModal} // Close modal when backdrop is clicked
        >
            <div
            className={`
                bg-brand-beige-300 
                rounded-lg 
                shadow-lg 
                w-11/12 
                md:w-3/4 
                lg:w-3/4 
                max-w-8xl 
                flex  /* Make it a flex container */
                max-h-[80vh]  /* Constrain maximum height */
                overflow-auto /* Allow scrolling inside if content exceeds max-h */
                transform 
                transition-transform 
                duration-300
                ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'}
            `}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
            {/* Book Image */}
            <div className="w-2/3 sticky flex-shrink-0">
              <div>
                <Image
                src={book.imageUrl}
                alt={book.title}
                className="object-cover"
                fill={true}
                />
                </div>
            </div>

            {/* Textbox */}
            <div className="w-1/3 p-6 overflow-auto">
                <h2 className="text-brand-brown-600 font-bold mb-4 text-[calc(1vw+1em)]">
                {book.title}
                </h2>
                <p className="text-gray-600 text-[calc(0.5vw+0.75em)]">
                {book.description}
                </p>
                <a
                className="text-brand-pink-500 hover:underline text-[calc(0.5vw+0.75em)]"
                href={book.storelink}
                target="_blank"
                rel="noopener noreferrer"
                >
                Purchase book
                </a>
            </div>
            </div>
        </div>
        )}
    </div>
  );
}
