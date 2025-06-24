import { useState } from 'react';
import { X } from 'lucide-react';
import { useEmailSignup } from '@/hooks/useEmailSignup';
import { useTranslation } from 'react-i18next';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailCaptureModal = ({ isOpen, onClose }: EmailCaptureModalProps) => {
  const [email, setEmail] = useState('');
  const { submitEmail, isLoading } = useEmailSignup();
  const { t } = useTranslation();

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
            {t('emailModal.title')}
          </h3>
          <div className="text-red-400 font-bold text-lg mb-2">
            {t('emailModal.discount')}
          </div>
          <div className="text-gray-400 line-through">{t('emailModal.oldPrice')}</div>
          <p className="text-gray-300 mt-4 font-inter">
            {t('emailModal.description')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailModal.placeholder')}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full iron-button rounded-lg font-oswald text-lg disabled:opacity-50"
          >
            {isLoading ? t('emailModal.loading') : t('emailModal.button')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailCaptureModal;
