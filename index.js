import React from 'react';
import {render} from 'react-dom';

function startRender(){
    render(
        <div>hello world</div>
        ,document.getElementById('root')
    )
}
startRender();

