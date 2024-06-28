
const ComponentA = ({msg,onMessage}) => {
 
  return (
    <div className="border border-2 rounded bg-info p-2 m-2">
      <input type="text" value={msg} onChange={onMessage} placeholder="Enter message"/>
    </div>
  );
};

export default ComponentA;
