const rows = [
  { param: "Pressure Class", g304: "150 \u2013 2500", g316: "150 \u2013 2500", g316l: "150 \u2013 2500" },
  { param: "Size Range", g304: "\u00bd\u2033 \u2013 72\u2033", g316: "\u00bd\u2033 \u2013 72\u2033", g316l: "\u00bd\u2033 \u2013 72\u2033" },
  { param: "Flange Type", g304: "WN, SO, BL, TH", g316: "WN, SO, BL, TH", g316l: "WN, SO, BL, TH" },
  { param: "Finish", g304: "Hot dipped galvanised", g316: "Pickled & passivated", g316l: "Pickled & passivated" },
  { param: "Standard", g304: "ASME B16.5", g316: "ASME B16.5", g316l: "ASME B16.5" },
];

export default function SpecsTable() {
  return (
    <section id="technical-specs" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-10">Technical Specifications</h2>
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <table className="w-full text-left border-collapse min-w-[560px]">
            <thead>
              <tr className="bg-accent text-white">
                <th className="p-4">Parameter</th>
                <th className="p-4">Grade 304</th>
                <th className="p-4">Grade 316</th>
                <th className="p-4">Grade 316L</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row) => (
                <tr key={row.param}>
                  <td className="p-4 font-medium">{row.param}</td>
                  <td className="p-4 text-secondary">{row.g304}</td>
                  <td className="p-4 text-secondary">{row.g316}</td>
                  <td className="p-4 text-secondary">{row.g316l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
