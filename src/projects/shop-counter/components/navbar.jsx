import React, { Component } from 'react';

//stateless functional component (sfc)
const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar -Korb-
                <span className="badge m-2 badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}

export default NavBar;






//######################################################################################################
// class NavBar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">Navbar
//                 <span className="badge m-2 badge-secondary">{this.props.totalCounters}</span>
//                 </a>
//             </nav>
//         );
//     }
// }

// export default NavBar;