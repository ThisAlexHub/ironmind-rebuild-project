import { useState } from 'react';
import { X } from 'lucide-react';
import { useEmailSignup } from '@/hooks/useEmailSignup';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailCaptureModal = ({ isOpen, onClose }: EmailCaptureModalProps) => {
  const [email, setEmail] = useState('');
  const { submitEmail, isLoading } = useEmailSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const success = await submitEmail(email);
      if (success) {
        setEmail('');
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 border border-red-600/30 rounded-lg p-8 max-w-md w-full mx-4 relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          disabled={isLoading}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h3 className="font-oswald text-2xl font-bold text-white mb-2">
            Get Early Access
          </h3>
          <div className="text-red-400 font-bold text-lg mb-2">
            50% OFF — Just $4.99/month
          </div>
          <div className="text-gray-400 line-through">Normally $9.99</div>
          <p className="text-gray-300 mt-4 font-inter">
            Our service is in the final stage of development and will be launched soon. Leave your email to keep your 50% discount and activate it after the launch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full iron-button rounded-lg font-oswald text-lg disabled:opacity-50"
          >
            {isLoading ? 'Claiming Access...' : '⚔️ Claim 50% Off Early Access'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailCaptureModal;
