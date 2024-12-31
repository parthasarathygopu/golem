import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 190 175"
                className="logo-light fill-foreground stroke-foreground h-8 w-8 overflow-visible transition-opacity hover:opacity-80"
              >
                <g id="g8" transform="matrix(1.3333333,0,0,-1.3,0,187)">
                  <g id="g10" transform="scale(0.1)">
                    <path d="m 728.934,460.02 v 0.089 l -50.743,-26.82 -2.285,0.617 -39.832,11.344 11.52,-15.48 h 0.086 l 2.375,-3.25 -0.086,-0.879 -10.028,-82.661 40.274,73.598 70.699,-32.359 h 0.09 l 0.176,-0.078 -36.758,46.953 14.512,28.926"></path>
                    <path d="m 962.047,384.219 70.783,32.359 40.27,-73.598 -10.02,82.661 -0.09,0.879 2.38,3.25 h 0.09 l 11.51,15.48 -39.92,-11.344 -2.2,-0.617 -50.733,26.82 v -0.089 l 14.508,-28.926 -36.758,-46.953 0.18,0.078"></path>
                    <path d="m 1358.85,696.277 19.88,11.09 -6.66,-207.738 -80.96,-86.469 -121.89,-21.101 -38.79,58.445 55.97,22.207 68.43,-10.699 -19.92,16.508 -11.78,9.765 -50.28,5.254 -8.3,24.078 34.61,13.024 96.01,-20.52 -8.05,23.68 -12.95,38.097 -58.91,21.489 8.98,16.914 15.99,30.148 -100.1,-42.644 -67.79,40.55 -15.53,98.118 31.79,-64.801 30.72,79.5 106.16,45.976 -67.1,14.684 17.47,68.191 6.28,24.477 81.83,-21.648 -67.96,63.613 -7.21,-14.688 -12.61,-25.703 -9.28,-18.89 -78.41,-159.782 -22.88,46.028 -12.9,-11.078 -0.08,-0.071 -44.82,-38.48 -0.1,0.074 -0.11,-0.191 -0.07,-0.121 -30.061,-53.301 -87.309,-0.114 -55.695,-0.07 43.156,-9.953 88.594,-20.43 -11.75,-31.91 101.405,79.172 -76.659,-123.496 -0.02,-0.027 -26.027,-36.582 65.946,10.375 v 0 l -21.93,-30.797 -0.051,-0.067 h -0.086 l -70.68,-37.359 h 0.032 l 112.775,25.644 0.08,0.02 c 6.51,-8.969 33.24,-30.16 42.73,-44.582 3.7,-22.688 26.47,-110.188 26.47,-110.188 l -33.11,-9.636 -58.07,-16.91 1.14,0.078 h 0.44 l 108.46,4.66 h 0.05 l 40.27,-22.149 c -0.08,0 -0.26,-0.089 -0.52,-0.179 -0.02,0 -0.05,-0.012 -0.06,-0.012 -2.98,-0.852 -16.1,-4.449 -31.79,-8.738 -8.56,-2.34 -17.83,-4.871 -26.72,-7.301 -13.57,-3.699 -25.97,-7.082 -33.1,-9.02 -0.63,-0.179 -1.35,-0.371 -1.9,-0.519 -2.81,-0.793 -4.39,-1.231 -4.39,-1.231 l -0.3,0.09 -94.436,27.141 -35.891,10.316 -20.16,5.801 -0.636,0.18 c 0,0.961 -11.168,23.211 -11.168,23.211 v 0 c 0,0 0,0 0.086,0.09 2.375,2.371 40.097,39.66 40.273,40.101 h -0.086 l -24.176,-1.93 -26.472,-2.121 -39.661,30.078 -39.66,-30.078 -26.468,2.11 -24.266,1.941 c 0,0 0,0 0,-0.09 1.406,-1.492 37.898,-37.722 40.273,-40.011 0.086,-0.09 0.086,-0.09 0.086,-0.09 0,0 -11.168,-22.25 -11.168,-23.211 l -0.273,-0.078 -20.692,-5.95 -36.296,-10.429 -94.157,-27.071 h -0.004 c 0,0 -1.582,0.438 -4.394,1.231 -0.633,0.168 -1.453,0.398 -2.199,0.598 -7.246,1.968 -19.641,5.351 -33.16,9.039 -8.817,2.41 -18.008,4.921 -26.489,7.242 -15.691,4.289 -28.812,7.89 -31.715,8.711 -0.23,0.078 -0.363,0.136 -0.461,0.148 -0.011,0.012 -0.054,0.031 -0.066,0.031 l 0.02,0.008 0.023,0.012 40.231,22.129 h 0.031 l 108.476,-4.66 h 0.442 l 1.144,-0.078 -56.426,16.429 -34.761,10.117 c 0,0 22.773,87.5 26.465,110.188 9.5,14.422 36.23,35.613 42.738,44.582 l 0.043,-0.012 112.812,-25.652 h 0.032 l -70.676,37.359 h -0.09 l -0.105,0.149 -21.879,30.715 65.949,-10.375 -25.676,36.843 h -0.004 l -21.98,31.391 -49.067,70.172 128.407,-50.164 -17.985,20.84 23.621,13.246 15.18,8.511 22.086,12.387 -41.024,-7.351 -5.785,-1.036 -30.929,-5.543 -0.387,-0.07 0.258,-0.469 -0.52,0.606 -0.015,0.012 -94.235,50.527 -41.652,22.336 -4.793,27.129 -6.488,36.91 -0.012,0.008 -3.895,22.16 -6.172,-3.883 -0.019,0.035 -54.887,-34.511 -22.039,119.593 -1.476,8.012 -3.344,18.141 -5.164,28.015 -62.809,-67.84 64.684,19.668 -1.594,-10.449 -20.406,-134.039 100.734,-21.496 16.199,-40.43 45.692,-13.496 -13.703,-44.277 -67.758,-40.559 -0.074,0.028 -100.086,42.625 15.996,-30.102 0.015,-0.027 8.961,-16.91 -58.851,-21.532 -12.957,-38.062 -8.102,-23.692 95.965,20.5 0.078,0.016 34.621,-13.023 -8.301,-24.094 -50.281,-5.199 -11.742,-9.786 -0.012,-0.007 -19.968,-16.528 68.402,10.727 0.035,0.004 55.949,-22.203 -38.738,-58.446 -121.891,21.125 -80.988,86.453 -6.68,207.739 19.871,-11.047 0.04,-0.024 62.562,-34.961 -89.574,111.364 -0.051,0.066 7.758,21.664 43.398,-16.941 0.039,-0.016 42.211,-16.519 -73.25,84.109 -0.047,0.051 117.977,138.894 42.055,-8.242 -11.461,62.195 71.601,-46.39 -3.664,31.44 -2.957,25.42 -2.836,24.57 143.957,95.09 0.074,-0.05 -0.101,0.01 100.062,-69.55 35.43,64.13 h -0.012 l 20.45,36.98 141.593,-11.81 143.958,-130.86 -6.41,-29.09 v -0.01 h -0.02 l -7.76,-35.348 h 0.02 l 15.33,-0.477 72.7,-2.262 -0.07,0.032 h 0.11 l -13.41,-27.332 52.09,8.425 109.83,-125.75 -73.25,-84.191 42.16,16.488 43.44,16.989 7.76,-21.633 -89.62,-111.457 z m -251.71,-550.718 0.27,1.613 9.43,55.277 0.06,0.36 -3.21,4.07 -24.7,31.32 -5.26,6.66 -0.01,0.02 21.94,8.519 8.34,3.243 57.57,22.359 0.27,0.102 46.58,-82.34 z m -11.64,42.32 -13.99,-16.828 -3.49,-4.199 9.7,-20.883 0.19,-0.41 -0.25,0.07 -0.06,0.019 -193.209,51.141 c -0.274,0.91 22.882,97.941 22.777,100.84 0,0.031 0.012,0.101 0.004,0.109 l 65.598,-24.039 78.96,-28.937 3.86,-1.422 0.71,-0.258 -1.77,-4.641 -4.13,-10.761 -5.64,-14.711 -0.86,-2.25 2.54,-1.25 2.22,-1.098 9.73,-4.793 27.5,-13.566 0.98,-0.481 z m -470.387,-42.32 9.887,21.293 -3.609,4.339 -14.207,17.098 -1.032,1.242 0.735,0.36 27.715,13.668 9.828,4.851 1.312,0.649 0.817,0.402 2.285,1.129 0.277,0.129 -0.754,1.98 -5.793,15.102 -3.945,10.301 -1.91,4.98 4.336,1.59 78.504,28.777 66.293,24.289 c -0.555,-1.097 23.058,-100.027 22.777,-100.949 z m -130.508,51.203 46.579,82.34 57.281,-22.25 8.648,-3.364 22.192,-8.609 -5.367,-6.809 -24.622,-31.211 -3.195,-4.05 0.063,-0.34 9.699,-56.91 z m 1.247,841.258 -0.055,-0.01 -0.008,0.05 z m 939.708,-190.61 -143.99,167.37 -84.02,28.37 -94.58,361.23 L 0,1112.97 291.402,0 858.871,148.578 1105,83.2695 l 191.72,88.2105 -45.05,79.942 152.71,39.988 -32.99,126 55.68,59.469 8.49,370.531"></path>
                    <path d="M 740.77,767.762 842.809,727 945.508,767.762 843.156,749.938 740.77,767.762"></path>
                    <path d="m 779.703,903.613 32.184,-0.945 -32.657,15.145 -35.023,55.843 -59.633,-17.039 45.91,-8.515 49.219,-44.489"></path>
                    <path d="m 992.426,982.176 37.864,-13.727 -27.93,34.551 -39.278,-5.207 -69.57,-70.988 78.09,51.113 20.824,4.258"></path>
                    <path d="m 1009.46,1034.23 -49.69,0.48 -29.817,-52.062 38.336,35.022 41.171,16.56"></path>
                    <path d="m 760.219,808.531 c 10.398,11.813 17.008,28.184 17.008,46.539 0,3.317 -0.411,6.481 -0.809,9.649 l 31.637,-21.02 -47.207,-35.156 z m -127.715,44.391 5.832,73.512 53.375,-17.106 c -15.168,-11.547 -25.285,-31.461 -25.285,-54.258 0,-12.457 3.027,-24.058 8.203,-33.945 z m 111.691,-11.484 c -11.062,0 -20.035,8.582 -20.035,19.167 0,10.586 8.973,19.172 20.035,19.172 11.071,0 20.039,-8.586 20.039,-19.172 0,-10.585 -8.968,-19.167 -20.039,-19.167 z m 89.43,-1.668 -60.602,40.3 -38.796,25.801 -32.602,9.598 -72.008,23.453 -7.89,-90.551 68.097,-63.113 78.403,5.812 65.398,48.7"></path>
                    <path d="m 1016.68,821.129 c 5.18,9.883 8.21,21.484 8.21,33.941 0,22.797 -10.12,42.711 -25.285,54.258 l 53.375,17.106 5.83,-73.512 z m -86.215,-12.586 -47.207,35.156 31.64,21.02 c -0.402,-3.168 -0.812,-6.332 -0.812,-9.649 0,-18.355 6.609,-34.726 17.008,-46.539 z m 16.652,71.234 c 11.067,0 20.035,-8.586 20.035,-19.172 0,-10.585 -8.968,-19.167 -20.035,-19.167 -11.066,0 -20.039,8.582 -20.039,19.167 0,10.586 8.973,19.172 20.039,19.172 z m 42.571,35.692 -32.602,-9.598 -38.797,-25.801 -60.601,-40.3 65.402,-48.7 78.4,-5.812 68.1,63.113 -7.89,90.551 -72.012,-23.453"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="flex space-x-6">
            <NavLink to="/">Overview</NavLink>
            <NavLink to="/components">Components</NavLink>
            <NavLink to="/apis">APIs</NavLink>
            <NavLink to="/deployments">Deployments</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;