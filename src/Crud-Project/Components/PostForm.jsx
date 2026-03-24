import React from "react";

const PostForm = ({
  formData,
  handleSubmit,
  handleChange,
  handleCancel,
  loading,
}) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
      {/* Card */}
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Card Top Banner */}
        <div className="px-8 py-5 bg-white border-b border-slate-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Add New User</h2>
            <p className="text-slate-400 text-xs mt-0.5">
              Fill in the details to register a new user
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="px-8 py-6 space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
              Full Name
            </label>
            <input
              required
              type="text"
              placeholder="Enter full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
              Username
            </label>
            <input
              required
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
              Age
            </label>
            <input
              required
              type="number"
              placeholder="Enter age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
              Email Address
            </label>
            <input
              required
              type="email"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
            >
              {loading ? "Saving..." : "Save User"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
