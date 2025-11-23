const Contact = () => {
  return (
    <section className="min-h-[60vh]">
      <header className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Contact</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          Let’s talk about ideas, work, or anything in between.
        </h2>
      </header>

      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <form className="space-y-4">
          <input placeholder="Name" className="w-full rounded-xl border px-3 py-2 bg-white/70" />
          <input placeholder="Email" type="email" className="w-full rounded-xl border px-3 py-2 bg-white/70" />
          <textarea placeholder="Message" rows={4} className="w-full rounded-xl border px-3 py-2 bg-white/70" />

          <button className="px-5 py-2 rounded-full bg-black text-white text-sm hover:opacity-90 transition cursor-not-allowed">
            Send (coming soon)
          </button>
        </form>

        <aside className="space-y-4 text-sm">
          <div>
            <p className="font-semibold">Email</p>
            <p>mehkumawat@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">Links</p>
            <ul>
              <li><a href="https://github.com/Mehulkumawat" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/mehul-kumawat-70b66b1ab/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
