

function Column({name}) { 
  
  return (
    <div className="box">
    <h3>{name}</h3>
    <div className="column">
        <div className="element">
            First
        </div>
        <div className="element">
            Second
        </div>
    </div>
    </div>
  );
}

export default Column;
