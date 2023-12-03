import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ maxWidth: "18rem" }}
        >
          <img
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7786774.jpg"
            className="card-img-top"
            alt="Delicious Food Item"  // Add meaningful alt text
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is the food ordering website</p>
            <div className="container w-100">
              <label htmlFor="quantityDropdown" className="form-label">
                Select Quantity
              </label>
              <select
                id="quantityDropdown"
                className="form-select m-2 h-200 bg-success rounded"
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <label htmlFor="portionDropdown" className="form-label">
                Select Portion
              </label>
              <select
                id="portionDropdown"
                className="form-select m-2 h-200 bg-success rounded"
              >
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>

              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
