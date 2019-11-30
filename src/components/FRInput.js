import React from 'react';

const FRInput = React.forwardRef((props, ref)=>{
    return (
        <div>
            <input type='text' name='name' ref={ref} />
        </div>
    )
})
export default FRInput;