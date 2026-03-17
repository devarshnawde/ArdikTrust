import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm({ compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    'Healthcare Compliance & Assurance',
    'Penetration Testing',
    'Identity & Access Security',
    'Security Auditing',
    'Security Monitoring',
    'General Consultation',
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'd0456c84-e71f-471f-af0a-a5d8b70e6ce4', // FIXME: Replace with your actual key from web3forms.com
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'ArdikTrust Website',
          to_email: 'contactus@ardiktrust.com',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">Message Received!</h3>
        <p className="text-gray-500 text-sm max-w-sm mx-auto">
          Thank you for reaching out. Our security team will contact you within 24 hours to schedule your consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="contact-name">
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            className="form-input"
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="contact-company">
            Company *
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            required
            className="form-input"
            placeholder="Your Organization"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="contact-email">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            className="form-input"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="contact-phone">
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            className="form-input"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="contact-service">
          Service Needed
        </label>
        <select
          id="contact-service"
          name="service"
          className="form-input"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="contact-message">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={compact ? 4 : 5}
          className="form-input resize-none"
          placeholder="Tell us about your security and compliance needs..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We respect your privacy. No spam, ever. Response within 24 hours.
      </p>
    </form>
  );
}
