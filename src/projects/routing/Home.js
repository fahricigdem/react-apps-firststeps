import React, { Component } from 'react';
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <br /><br /><br /><br /><br />
            <Link to='/react-apps-firststeps/shop'>
                go Shopping <br /><br />
                <div class="ui vertical animated primary button" tabindex="0">
                    <div class="hidden content">Shop</div>
                    <div class="visible content">
                        <i class="shop icon"></i>
                    </div>
                </div>

            </Link>
        </div>
    )
}

export default Home