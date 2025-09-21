// app/components/Modal.tsx
'use client';

// The props define what information the Modal needs.
// isOpen: whether the modal should be visible or not.
// onClose: a function to call when the modal should be closed.
// children: any content we want to put inside the modal.
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // If the modal isn't open, don't render anything.
  if (!isOpen) return null;

  return (
    // This is the semi-transparent background overlay.
    // Clicking it will close the modal.
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
      {/* This is the actual modal content box. */}
      {/* We use onClick with e.stopPropagation() to prevent clicks inside the box from closing it. */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 rounded-lg p-8 relative max-w-sm w-full text-center border border-gray-700"
      >
        {/* The close button (the 'X') */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        {/* We'll put our "Thank You" message and button here */}
        {children}
      </div>
    </div>
  );
}