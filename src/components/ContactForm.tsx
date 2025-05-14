import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast({
        title: isRTL ? 'تم إرسال الرسالة بنجاح' : 'Message Sent Successfully',
        description: isRTL ? 'سنتواصل معك قريبًا' : 'We will contact you soon',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setLoading(false);
    }, 1000);
  };

  const formDirection = isRTL ? 'rtl text-right' : 'ltr text-left';
  const inputLabelStyle = (field: string) =>
    `absolute ${isRTL ? 'right-4' : 'left-4'} px-1 transition-all duration-150 pointer-events-none bg-white ${focusedField === field || formData[field as keyof typeof formData]
      ? '-top-3 text-[13px] text-charcoal'
      : 'top-3 text-gray-500'
    }`;

  const inputFieldStyle =
    'w-full px-4 py-3 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-red';

  return (
    <form onSubmit={handleSubmit} className={`max-w-lg mx-auto relative ${formDirection}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Name */}
      <div className="mb-6 relative">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          placeholder=" "
          required
          className={inputFieldStyle}
        />
        <label className={inputLabelStyle('name')}>{t('form-name')}</label>
      </div>

      {/* Email */}
      <div className="mb-6 relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          placeholder=" "
          required
          className={inputFieldStyle}
        />
        <label className={inputLabelStyle('email')}>{t('form-email')}</label>
      </div>

      {/* Phone */}
      <div className="mb-6 relative">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onFocus={() => setFocusedField('phone')}
          onBlur={() => setFocusedField(null)}
          placeholder=" "
          required
          className={inputFieldStyle}
        />
        <label className={inputLabelStyle('phone')}>{t('form-phone')}</label>
      </div>

      {/* Message */}
      <div className="mb-8 relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          placeholder=" "
          rows={5}
          required
          className={`${inputFieldStyle} resize-none`}
        />
        <label className={inputLabelStyle('message')}>{t('form-message')}</label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="bg-gold text-white py-3 px-6 rounded hover:bg-gold-dark transition-colors duration-300 w-full"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {isRTL ? 'جارِ الإرسال...' : 'Sending...'}
          </span>
        ) : (
          t('form-submit')
        )}
      </button>
    </form>
  );
};

export default ContactForm;
