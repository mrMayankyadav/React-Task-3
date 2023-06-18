import React, { useState } from 'react';

function ColorPicker(props) {
  const { arr } = props;

  const [showList, setShowList] = useState(false);
  const [btnColor, setBtnColor] = useState("");

  const handleBtnClick = () => {
    setShowList(true);
  };

  const changeColor = (color) => {
    setBtnColor(color);
    setShowList(false);
  };

  return (
    <div className="container" >
        <div className=" mx-auto p-5" >
            <button className='btn btn-outline-dark' style={{backgroundColor: btnColor}} onClick={handleBtnClick}>Pick a color</button>
            <div>
                {showList && (
                <ul type="none">
                    {arr.map((val, index) => (
                    <li key={index} onClick={() => changeColor(val)}>
                        <div className=' p-2'
                        style={{
                            backgroundColor: val,
                            height: "50px",
                            width: "50px",
                            borderRadius: "10px",
                        }}
                        ></div><br/>
                    </li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    </div>
  );
}

export default ColorPicker;
