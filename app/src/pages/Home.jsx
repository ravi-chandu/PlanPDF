import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Home() {
  const card = "rounded-xl border border-gray-200 p-5 hover:shadow-md transition";
  return (
    <main className="mx-auto max-w-6xl p-6">
      <Helmet>
        <title>OnDevicePDF — Fast, private PDF tools</title>
        <meta name="description" content="Merge, split, organize, compress, convert & stamp PDFs 100% locally in your browser." />
        <link rel="canonical" href="https://www.ondevicepdf.com/" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-2">All-in-one PDF tools</h1>
      <p className="text-gray-600 mb-6">Everything runs locally in your browser — your files never leave your device.</p>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/tools" className={card}><h3 className="font-semibold">Merge</h3><p>Combine multiple PDFs.</p></Link>
        <Link to="/tools" className={card}><h3 className="font-semibold">Split</h3><p>Extract or split pages.</p></Link>
        <Link to="/tools" className={card}><h3 className="font-semibold">Organize</h3><p>Reorder & delete pages.</p></Link>
        <Link to="/tools" className={card}><h3 className="font-semibold">Compress (Lite)</h3><p>Quick re-save optimization.</p></Link>
        <Link to="/tools" className={card}><h3 className="font-semibold">Convert (Basic)</h3><p>Prep for images/ZIP.</p></Link>
        <Link to="/tools" className={card}><h3 className="font-semibold">Stamp</h3><p>Page numbers / watermark.</p></Link>
      </section>
    </main>
  );
}
