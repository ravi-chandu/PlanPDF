import { Helmet } from "react-helmet";

export default function Tools() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <Helmet>
        <title>PDF Tools — OnDevicePDF</title>
        <link rel="canonical" href="https://www.ondevicepdf.com/tools" />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">Tools</h1>
      <ul className="space-y-3 text-gray-700">
        <li>• Merge PDFs (queue, reorder)</li>
        <li>• Split (ranges: <code>1-3,5,9-10</code> etc.)</li>
        <li>• Organize (thumbnails, delete/reorder)</li>
        <li>• Compress (Lite re-save)</li>
        <li>• Convert (Basic preview/raster placeholder)</li>
        <li>• Stamp (page numbers / watermark)</li>
      </ul>

      <p className="mt-6 text-sm text-gray-500">
        These are functional placeholders—next we’ll add the real implementations.
      </p>
    </main>
  );
}
