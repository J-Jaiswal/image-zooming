import React from "react";

const TableUI = () => {
  return (
    <div className="container mx-auto p-4">
      {/* RBC Table */}
      <table className="min-w-full border-collapse border border-gray-300 mb-4">
        <thead className="bg-[#7bbc89]">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">RBC</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Count
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Percentage
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Angled Cells</td>
            <td className="border border-gray-300 px-4 py-2">222</td>
            <td className="border border-gray-300 px-4 py-2">67%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Borderline Ovalocytes
            </td>
            <td className="border border-gray-300 px-4 py-2">50</td>
            <td className="border border-gray-300 px-4 py-2">20%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Burr Cells</td>
            <td className="border border-gray-300 px-4 py-2">87</td>
            <td className="border border-gray-300 px-4 py-2">34%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Fragmented Cells
            </td>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">0.12%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Ovalocytes</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Rounded RBC</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Teardrops</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>
        </tbody>
      </table>

      {/* WBC Table */}
      <table className="min-w-full border-collapse border border-gray-300 mb-4">
        <thead className="bg-[#7bbc89]">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">WBC</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Count
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Percentage
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Basophil</td>
            <td className="border border-gray-300 px-4 py-2">222</td>
            <td className="border border-gray-300 px-4 py-2">67%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Eosinophil</td>
            <td className="border border-gray-300 px-4 py-2">50</td>
            <td className="border border-gray-300 px-4 py-2">20%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Lymphocyte</td>
            <td className="border border-gray-300 px-4 py-2">87</td>
            <td className="border border-gray-300 px-4 py-2">34%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Monocyte</td>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">0.12%</td>
          </tr>
        </tbody>
      </table>

      {/* Platelets Table */}
      <table className="min-w-full border-collapse border border-gray-300 mb-4">
        <thead className="bg-[#7bbc89]">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Platelets
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Count
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Percentage
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Platelets</td>
            <td className="border border-gray-300 px-4 py-2">222</td>
            <td className="border border-gray-300 px-4 py-2">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableUI;
