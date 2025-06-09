
import { useState } from 'react';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailCaptureModal = ({ isOpen, onClose }: EmailCaptureModalProps) => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're in the early access list!",
        description: "Watch for launch details at 50% off.",
      });
      setEmail('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-steel-navy/70 backdrop-blur-sm">
      <div className="bg-steel-gunmetal border border-steel-orange/30 rounded-lg p-8 max-w-md w-full mx-4 relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-steel-light hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="font-oswald text-2xl font-bold text-white mb-2">
            Get Early Access
          </h3>
          <div className="text-steel-orange font-bold text-lg mb-2">
            50% OFF — Just $4.99/month
          </div>
          <div className="text-steel-light line-through">Normally $9.99</div>
          <p className="text-steel-light mt-4 font-inter">
            Be the first to use it. Limited time only.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-steel-navy border border-steel-gunmetal rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-steel-orange transition-colors"
            required
          />
          <button
            type="submit"
            className="w-full iron-button rounded-lg font-oswald text-lg"
          >
            ⚔️ Claim 50% Off Early Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailCaptureModal;
