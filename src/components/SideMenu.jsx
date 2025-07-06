import React from 'react';

const SideMenu = () => {
  return (
    <nav className="side-menu">
      <ul>
        <li>
          <a href="#welcome">
            <h3>Welcome to the Guide to Building a Strong MBA Application!</h3>
          </a>
        </li>
        <li>
          <a href="#why-mba">
            <h3>Why Pursue an MBA?</h3>
          </a>
        </li>
        <li>
          <h3>How to Build a Strong Application</h3>
          <ul>
            <li><a href="https://www.clearadmit.com/">Clear Admit</a></li>
            <li><a href="https://gmatclub.com/">GMAT Club</a></li>
            <li><a href="#">VMock</a></li>
            <li><a href="#">Penn State Smeal MBA Program</a></li>
            <li><a href="#">Parker Dewey</a></li>
            <li><a href="#">ProFellow</a></li>
          </ul>
        </li>
        <li>
          <a href="#journey">
            <h3>Your MBA Journey Ahead</h3>
          </a>
        </li>
        <li>
          <a href="#tips">
            <h3>Tips to Stay Motivated</h3>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
