import React from 'react';
var border = { border: '2px solid #3A5FCD' };
var categories= ['category1','category2','category3','category4','category5','category6','category7','category8','category9','category10','category11']
const CourseCategoryNatalie = () => {
    return(
        <div>
            <div style={{height: "10px", background: "#2da397"}}></div>
          <ul  className="list-group list-group-horizontal-md" style={{textAlign: "center"}}>
            { categories.map(category => (
                <li key={category.id} className="list-group-item list-group-item-action list-group-item-info">
                  {category}
                </li>
              )
            )}
          </ul>
        </div>
        
      );
    }
export default CourseCategoryNatalie;