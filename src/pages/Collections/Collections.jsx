import React from "react";
import FilterGroup from "../../components/FilterGroup";
import { sampleData } from "../../config/sampleData";
import { BookCard } from "../../components/BookCards";
function Collections() {
  return (
    <section className="flex h-max w-full justify-center ">
      <div className="sub-container flex h-screen pt-20 w-[90%] ">
        <>
          <FilterGroup></FilterGroup>
          <div className="flex flex-col h-full py-6 px-10 bg-neutral-1 rounded-r-xl">
            <div className="mb-4 flex items-center justify-center ">
              <h2 className="mr-auto">All Collections</h2>
              <div>
                <select
                  name="sorting"
                  id="sorting"
                  className="cursor-pointer shadow-small px-4 py-2"
                >
                  <option value="default">Default Sorting</option>
                  <option value="newness">Sort by Newness</option>
                  <option value="popularity">Sort by Popularity</option>
                  <option value="low">Sort by Price: Low to High</option>
                  <option value="high">Sort by Price: High to Low</option>
                </select>
              </div>
            </div>
            <ul className="flex flex-wrap child:grow h-screen overflow-y-scroll w-full items-center justify-center gap-4">
              {sampleData.map((book) => {
                return <BookCard key={book._id} book={book} className="h-40" />;
              })}
            </ul>
          </div>
        </>
      </div>
    </section>
  );
}

export default Collections;
