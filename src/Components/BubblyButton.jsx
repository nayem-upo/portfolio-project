import React from 'react';
import ReactBubblyEffectButton from "react-bubbly-effect-button";
const onClick = () => {
    console.log('Done.')
}
const BubblyButton = () => {
    return (
        <ReactBubblyEffectButton text="Click Me" color='#fff' bgColor='#000' onClick={onClick} />
    );
};

export default BubblyButton;