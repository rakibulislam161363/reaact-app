

function Nav() {
  return (
    <>
      <div className="mt-5 md:flex justify-between mx-5 items-center pb-3">
        <div>
          <h1 className="text-xs text-[#71717A]">Welcome back</h1>
          <h1 className="text-4xl font-semibold">Dashboard</h1>
        </div>
        <div className="gap-3 mt-3 rounded-md grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div className="bg-white p-2 rounded-lg text-[#71717A] ">
            <label className="flex gap-1 ">
              <img src="Frame.png" alt="" />
              <input
                className="outline-hidden"
                type="text"
                placeholder="Search incident"
              />
            </label>
          </div>
          <div className="p-2 bg-white rounded-lg text-[#71717A]">
            <input
              className="outline-hidden"
              type="text"
              placeholder="Sort By: Date modified"
            />
          </div>
          <button className="p-2 px-4 rounded-lg bg-[#F26922] text-white hover:bg-gray-400 hover:text-black">Cypher AI</button>
        </div>
      </div>
    </>
  );
}


export default Nav;