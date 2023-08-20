import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "pages/MainDashboard";

const Table = ({ deposits, title = [] }) => {
  return (
    <div className="p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
          <tr>
            {title.map((each_table, key) => {
              return (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  {each_table}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {deposits.map((deposit,key) => (
            <tr key={deposit._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="text-sm font-medium text-gray-900">
                    {key+1} 
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    className="mr-2 text-green-500"
                  />
                  <div className="text-sm text-gray-900">{deposit.amount}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    className="mr-2 text-green-500"
                  />
                  <div className="text-sm text-gray-900">
                    {deposit.description}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="mr-2 text-blue-500"
                  />
                  <div className="text-sm text-gray-900">{deposit.status}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="mr-2 text-blue-500"
                  />
                  <div className="text-sm text-gray-900">
                    {formatDate(deposit.created_at)}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
