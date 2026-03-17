import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // FIXME: Replace with your actual key from web3forms.com
          subject: 'New Newsletter Subscription',
          from_name: 'ArdikTrust Website',
          to_email: 'contactus@ardiktrust.com',
          email: email
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      alert('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#1E5AA8] to-[#0E1A2B] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mb-4">
            Stay Ahead of Cyber Threats
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Get our monthly cybersecurity briefing — HIPAA updates, healthcare threat intelligence, 
            and compliance insights delivered to your inbox.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-green-300 text-lg font-semibold">
              <CheckCircle className="w-6 h-6" />
              You're subscribed! Welcome to the ArdikTrust security community.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input flex-1 bg-white/10 border-white/20 text-white placeholder-blue-300 focus:border-white focus:ring-white/20"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="btn-green whitespace-nowrap py-3 px-6 text-sm disabled:opacity-70"
              >
                {loading ? 'Subscribing...' : (
                  <>
                    Subscribe <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-blue-400 text-xs mt-4">
            No spam. Unsubscribe at any time. Read our{' '}
            <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
