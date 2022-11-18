import React from "react";
const Navbar = () => {
return (
	<>
	<nav class="nav-link">
    <ul>
	<li class="sub-nav-toggler">
        <span><a href="all-new-e6">All-New e6</a></span>
        <ul class="sub-nav">
                                        <li>
                                            <a href="all-new-e6?#exterior">Exterior</a>
                                        </li>
                                        <li>
                                            <a href="all-new-e6?#interior">Interior</a>
                                        </li>
                                        <li>
                                            <a href="all-new-e6?#safety">Safety</a>
                                        </li>
                                        <li>
                                            <a href="all-new-e6?#features">Features</a>
                                        </li>
                                    </ul>
                                </li>
	</ul>
	</nav>
	</>
);
};

export default Navbar;
