import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-white mb-8">
            {t('about.title')}
          </h2>

          <div className="space-y-6 text-xl text-gray-300 font-inter leading-relaxed">
            <p>{t('about.builtByMen')}</p>
            <p>{t('about.noPity')}</p>
            <p className="text-red-400 font-semibold">{t('about.plan')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
