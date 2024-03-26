import "./teacher.css";

function Teachers({ teacher }) {

  return (
    <div className="cards-wrapper">
      {teacher.map((el) => {
        return (
          <div className="teacherCardWrapper">
            <div className="teacherCardWrapper-header">
              <div className="teacherHeaderTitle">
                <h2>{el.name}</h2>
                <p>{el.role}</p>
              </div>
              <div className="teacherHeaderIcons">
                <img src="/edit.png" alt="edit Icon" />
                <img src="/delite.png" alt="delite Icon" />
              </div>
            </div>
            <div className="teacherCardWrapper-main">
              <p>Maosh</p>
              <p>{el.maosh}</p>
            </div>
            <div className="teacherCardWrapper-footer">
              <div className="teacherCardWrapper-data">
                <img src="/data.png" alt="data icon" />
                <p>{el.website}</p>
              </div>
              <div className="teacherCardWrapper-phon">
                <img src="/phon.png" alt="phon icon" />
                <p>{el.phone}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Teachers;
