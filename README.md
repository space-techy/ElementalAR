AR.js H₂O Molecule Interaction Project
--------------------------------------

Welcome to the AR.js H₂O Molecule Interaction Project! This interactive augmented reality (AR) application simulates a reaction between two atomic models to form an H₂O molecule. Built using AR.js and A-Frame, it allows users to explore a unique chemistry visualization experience directly in their browser.

🌟 Project Overview
-------------------

This project uses two markers to represent Hydrogen (H) and Oxygen (O) atoms. When these markers are brought close together, they combine to form a 3D H₂O molecule model.

Key Features
------------

-   Interactive AR chemistry visualization
-   Proximity detection between AR markers to trigger H₂O formation
-   Animated electron orbitals around each atom
-   Transformation of atomic models into an H₂O molecule upon interaction

📸 Preview
----------

H₂O Molecule in AR
(./photos/h2o1.jpeg)

🚀 Technologies Used
--------------------

-   AR.js: Adds marker-based AR capabilities in the browser
-   A-Frame: Simplifies 3D and VR content creation with an HTML-like syntax
-   JavaScript: Controls animations, proximity detection, and model transformations

🛠️ Installation and Setup
--------------------------

1\. Clone the Repository
------------------------

bash

`
git clone https://github.com/space-techy/ElementalAR.git
cd ElementalAR
`

2\. Setup Static Server
-----------------------

To run the project locally, you can use any static server. For example, with Node.js:

bash

`npm run dev`

3\. Access the Project
----------------------

Open your browser and go to `http://localhost:3000`. Ensure camera permissions are granted for the AR experience.

📂 Project Structure
--------------------

text

`
arjs-h2o-molecule/
├── node_modules/              # Project dependencies
├── photos/                    # Folder for images, including preview image for README
├── public/
│   ├── models/                # 3D models for atoms and H₂O
│   └── patt-files/            # Marker pattern files for H and O atoms
├── .gitignore                 # Git ignore file
├── app.js                     # Main application logic
├── index.html                 # Main HTML file with AR and A-Frame setup
├── move.js                    # JavaScript for animations and proximity detection
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Dependency lock file
├── server.cert                # SSL certificate for secure server setup
└── server.key                 # SSL key for secure server setup
`

Marker Files (`patt-files/`)
----------------------------

This folder contains `.patt` files for each marker (Hydrogen and Oxygen). Ensure these are printed or available for scanning.

3D Models (`models/`)
---------------------

Includes GLTF models for the H, O, and H₂O molecules.

🔄 How It Works
---------------

-   Marker Detection: The app detects Hydrogen and Oxygen markers using `.patt` files.
-   Animation and Electron Movement: As markers are detected, electrons orbit the nucleus of each atom.
-   Proximity Detection: When the H and O markers are brought within a certain distance, they disappear, and the H₂O model is displayed in their place, simulating molecular bonding.

📖 Usage Guide
--------------

1.  Print the marker images in the `patt-files/` folder.
2.  Open the project in your browser and allow camera access.
3.  Position each marker in view to observe the H and O atoms.
4.  Move the markers close together to form the H₂O molecule!

🖼 Marker Files
---------------

The marker pattern files (`.patt`) for Hydrogen and Oxygen are located in the `patt-files/` directory. Use these files for printing or viewing to initiate the AR experience.

📝 License
----------

This project is open-source under the MIT License.Enjoy exploring the world of chemistry in AR!
