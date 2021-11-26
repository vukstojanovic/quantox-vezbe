
// import * as React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/Nav/index';

test('cart hides red circle when logout is clicked', () => {

    const div = document.createElement("div");
    document.body.append("div");

    ReactDOM.render(<Nav />, div);
    

});
