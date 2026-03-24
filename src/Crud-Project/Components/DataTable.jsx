import { useNavigate } from "react-router-dom";
const DataTable = ({
  users,
  totalUsers,
  search,
  setSearch,
  deleteUser,
  updateUser,
  editingUser,
  setEditingUser,
}) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">User Management</h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage, edit and track all registered users
          </p>
          <div className="mt-3 w-12 h-1 rounded-full bg-blue-500"></div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm">
            <p className="text-3xl font-bold text-blue-600">{totalUsers}</p>
            <p className="text-slate-400 text-xs mt-1 font-medium uppercase tracking-wide">
              Total Users
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm">
            <p className="text-3xl font-bold text-indigo-600">{users.length}</p>
            <p className="text-slate-400 text-xs mt-1 font-medium uppercase tracking-wide">
              Showing
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm">
            <p className="text-3xl font-bold text-emerald-600">{totalUsers}</p>
            <p className="text-slate-400 text-xs mt-1 font-medium uppercase tracking-wide">
              Active
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-4">
          {/* Search Bar */}
          <div className="relative w-80">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
          </div>

          {/* Add Button */}
          <button
            onClick={() => navigate("/add")}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add User
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-3.5 px-6 text-left text-slate-500 font-semibold text-xs uppercase tracking-wider">
                    ID
                  </th>
                  <th className="py-3.5 px-6 text-left text-slate-500 font-semibold text-xs uppercase tracking-wider">
                    Name
                  </th>
                  <th className="py-3.5 px-6 text-left text-slate-500 font-semibold text-xs uppercase tracking-wider">
                    Username
                  </th>
                  <th className="py-3.5 px-6 text-left text-slate-500 font-semibold text-xs uppercase tracking-wider">
                    Age
                  </th>
                  <th className="py-3.5 px-6 text-left text-slate-500 font-semibold text-xs uppercase tracking-wider">
                    Email
                  </th>
                  <th className="py-3.5 px-6 text-left text-slate-500 font-semibold text-xs uppercase tracking-wider">
                    Status
                  </th>
                  <th className="py-3.5 px-6 text-center text-slate-500 font-semibold text-xs uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {/* List */}
                {users.map((item) => {
                  const isEditing = editingUser && editingUser.id === item.id;
                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-blue-50 transition-all duration-150"
                    >
                      <td className="py-3.5 px-6">
                        <span className="inline-block bg-slate-100 text-slate-500 font-mono text-xs font-bold px-2 py-0.5 rounded-md">
                          #{item.id}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 font-semibold text-slate-800">
                        {isEditing ? (
                          <input
                            className="border border-blue-300 rounded-lg px-2 py-1 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={editingUser.name}
                            onChange={(e) =>
                              setEditingUser({
                                ...editingUser,
                                name: e.target.value,
                              })
                            }
                          />
                        ) : (
                          item.name
                        )}
                      </td>
                      <td className="py-3.5 px-6 text-blue-500 font-medium">
                        {isEditing ? (
                          <input
                            className="border border-blue-300 rounded-lg px-2 py-1 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={editingUser.username}
                            onChange={(e) =>
                              setEditingUser({
                                ...editingUser,
                                username: e.target.value,
                              })
                            }
                          />
                        ) : (
                          `@${item.username}`
                        )}
                      </td>
                      <td className="py-3.5 px-6 text-slate-600">
                        {isEditing ? (
                          <input
                            type="number"
                            className="border border-blue-300 rounded-lg px-2 py-1 text-sm w-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={editingUser.age}
                            onChange={(e) =>
                              setEditingUser({
                                ...editingUser,
                                age: e.target.value,
                              })
                            }
                          />
                        ) : (
                          item.age
                        )}
                      </td>
                      <td className="py-3.5 px-6 text-indigo-500 font-medium">
                        {isEditing ? (
                          <input
                            type="email"
                            className="border border-blue-300 rounded-lg px-2 py-1 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={editingUser.email}
                            onChange={(e) =>
                              setEditingUser({
                                ...editingUser,
                                email: e.target.value,
                              })
                            }
                          />
                        ) : (
                          item.email
                        )}
                      </td>
                      <td className="py-3.5 px-6">
                        <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                          Active
                        </span>
                      </td>
                      <td className="py-3.5 px-6">
                        <div className="flex items-center justify-center gap-2">
                          {isEditing ? (
                            <>
                              <button
                                onClick={() => updateUser(editingUser)}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95 shadow-sm"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => setEditingUser(null)}
                                className="bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95"
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => setEditingUser(item)}
                                className="bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteUser(item.id)}
                                className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95"
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">
              Showing{" "}
              <span className="text-slate-600 font-bold">{users.length}</span>{" "}
              of{" "}
              <span className="text-slate-600 font-bold">{totalUsers}</span>{" "}
              users
            </span>
            <span className="text-xs text-slate-300">
              User Management System
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
