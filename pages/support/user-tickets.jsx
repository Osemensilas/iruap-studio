import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

const TicketsPage = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("unresolved");

  useEffect(() => {
    async function getTickets() {
      setLoading(true);
      setError(null);

      try {
        const url = `https://backend.iruhost.com/api/user-tickets?status=${filter}`;
        const response = await axios.get(url, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        if (response.data.status === "success") {
          setTickets(response.data.message);
        } else {
          setTickets([]);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch tickets. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    getTickets();
  }, [filter]); // refetch when filter changes

  return (
    <>
      <Head>
        <title>User Tickets - IruHost</title>
      </Head>

      <div className="h-max w-full px-2 sm:px-10 pt-10">
        <h2 className="text-2xl font-bold mb-6">My Support Tickets</h2>

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setFilter("unresolved")}
            className={`px-6 py-2 rounded-lg font-semibold ${
              filter === "unresolved"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Unresolved
          </button>
          <button
            onClick={() => setFilter("resolved")}
            className={`px-6 py-2 rounded-lg font-semibold ${
              filter === "resolved"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Resolved
          </button>
        </div>

        {/* Table */}
        <div className="h-max w-full overflow-x-auto">
          <table className="h-max w-full text-xs sm:text-base border-collapse">
            <thead className="border-b border-gray-300">
              <tr>
                <th className="py-3 px-4 text-left">Ticket ID</th>
                <th className="py-3 px-4 text-left">Subject</th>
                <th className="py-3 px-4 text-left">Department</th>
                <th className="py-3 px-4 text-left">Priority</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Created</th>
                <th className="py-3 px-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center py-6">
                    Loading tickets...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-red-600">
                    {error}
                  </td>
                </tr>
              ) : tickets.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-6">
                    No {filter} tickets found.
                  </td>
                </tr>
              ) : (
                tickets.map((ticket, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-300 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">{ticket.ticket_id}</td>
                    <td className="py-3 px-4">{ticket.subject}</td>
                    <td className="py-3 px-4">{ticket.department}</td>
                    <td className="py-3 px-4">{ticket.priority}</td>
                    <td className="py-3 px-4 capitalize">{ticket.status}</td>
                    <td className="py-3 px-4">{ticket.created_at}</td>
                    <td className="py-3 px-4">
                      <a
                        href={`/support/my-tickets?ticketId=${ticket.ticket_id}`}
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TicketsPage;
