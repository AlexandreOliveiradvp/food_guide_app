const consultContent = () => {
  return (
    <div>
      <div className="grid grid-cols-3 py-3 z-0">
        <div className="col-span-3 w-6/12">
          <h1 className="page-title">Consult Recipes</h1>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="flex w-full">
            <div className="wrapper-input-consult">
              <label htmlFor="" className="label">
                Search Recipies:
              </label>
              <input type="text" className="input" />
            </div>
            <button className="btn-default ms-2 mt-6">Search</button>
          </div>
          <div className="w-full content-search">
            <div className="card-search rounded-md p-2"><label htmlFor="">Search Result</label></div>
          </div>
        </div>
        <div className="col-span-1 pt-6">
          <div className="products-content rounded-md">
            <div className="px-4">
              <p className="title">Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default consultContent;
