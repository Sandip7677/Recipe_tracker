import React from "react";

function Menucard({ recipi }) {
  return (
    <>
      <section className="main-card--cointainer">
        {recipi.map((cur, ind) => {
          const { label, image, shareAs, cautions, mealType } = cur.recipe;
          return (
            <>
              <div className="card-container" key={ind}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {ind}
                    </span>
                    <span className="card-author subtle"> {mealType[0]}</span>
                    <h2 className="card-title"> {label} </h2>
                    <span className="card-description subtle">
                      {cautions[0]}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">
                    <a href={shareAs}>Find recipe</a>
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default Menucard;
