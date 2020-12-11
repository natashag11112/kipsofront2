import React, { useState, useEffect } from 'react';
function NatCompFake() {

  const [count, setCount] = useState(0);
  useEffect(() => {    document.title = ` ${count}`;  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default NatCompFake;
