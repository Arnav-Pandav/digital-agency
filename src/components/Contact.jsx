import { useRef, useState } from 'react'



export default function Contact() {
  const formRef = useRef(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    company: '' // honeypot
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', msg: '' }) // idle | loading | success | error

  const isValidEmail = (email) => {
    if (!email || typeof email !== 'string') return false
    if (!email.includes('@')) return false
    const parts = email.split('@')
    if (parts.length !== 2) return false
    const [local, domain] = parts
    if (!local || !domain) return false
    if (domain.includes(' ')) return false
    if (!domain.includes('.')) return false
    const tld = domain.split('.').pop()
    if (!tld || tld.length < 2) return false
    return true
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!isValidEmail(form.email)) next.email = 'Enter a valid email.'
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters.'
    if (form.company) next.company = 'Spam detected.' // honeypot
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      setStatus({ state: 'loading', msg: 'Sending…' })

      // OPTION A: Demo mode (no external service)
      await new Promise((r) => setTimeout(r, 800))
      setStatus({ state: 'success', msg: 'Message sent! I will reply within 24 hours.' })
      setForm({ name: '', email: '', message: '', company: '' })

      // OPTION B: EmailJS — uncomment to enable (from your original code)
      // ... (your EmailJS implementation) ...
    } catch (err) {
      console.error(err)
      setStatus({ state: 'error', msg: 'Something went wrong. Please try again later.' })
    }
  }

  // Updated input class for a more premium look and feel, using primary focus color
  const inputClass =
    'w-full p-3 rounded-lg border border-gray-300  bg-white focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition duration-150 ease-in-out'

  return (
    <section id="contact" className="py-24 bg-gray-50 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div>
          <h2 className="text-3xl font-poppins font-semibold mb-3">Let’s Build Something Great</h2>
          <p className="text-gray-600 mb-6">
            Tell us about your project. We’ll get back with a free quote and timeline.
          </p>

          {/* Status banners */}
          {status.state === 'success' && (
            <div className="mb-4 rounded-lg border border-green-300/60 bg-green-50 text-green-700 px-4 py-3 shadow-md">
              {status.msg}
            </div>
          )}
          {status.state === 'error' && (
            <div className="mb-4 rounded-lg border border-red-300/60 bg-red-50 text-red-700 px-4 py-3 shadow-md">
              {status.msg}
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            aria-live="polite"
            className="space-y-4"
          >
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="block text-sm mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                required
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project…"
                value={form.message}
                onChange={handleChange}
                className={inputClass}
                required
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            <div className="flex items-center gap-4">
              {/* Premium Button with Rotating Border Effect */}
              <button
                type="submit"
                disabled={status.state === 'loading'}
                aria-busy={status.state === 'loading'}
                // Added 'group' class and 'rotating-gradient-border' class
                className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-900 text-white font-bold overflow-hidden shadow-lg hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 rotating-gradient-border"
              >
                {/* Subtle glow/shadow effect on hover (remains as a nice addition) */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl shadow-blue-500/50 pointer-events-none"></span>

                {/* Text content of the button */}
                <span className="relative z-10">
                    {status.state === 'loading' ? 'Sending…' : 'Send Message'}
                </span>
              </button>

              {status.state === 'loading' && (
                <span className="text-sm text-gray-500">Please wait…</span>
              )}
            </div>
          </form>
        </div>

        {/* Right: Info / Map */}
        <div className="space-y-6"> {/* Increased space-y from 4 to 6 */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-md"> {/* Added shadow-md */}
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
            <div className="text-sm space-y-3 text-gray-700"> {/* Increased space-y from 2 to 3 */}
              <div><span className="font-medium text-gray-900">Email:</span> hello@webworksbyarnav.com</div>
              <div><span className="font-medium text-gray-900">Phone:</span> +91 9XX XX XX XXX</div>
              <div><span className="font-medium text-gray-900">Location:</span> Ahmedabad, Gujarat, India</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl"> {/* Added shadow-xl */}
            <iframe
              className="w-full h-80 border-0"
              src="https://www.google.com/maps?q=Ahmedabad,+Gujarat&output=embed"
              allowFullScreen
              loading="lazy"
              title="Map — Ahmedabad, Gujarat"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
