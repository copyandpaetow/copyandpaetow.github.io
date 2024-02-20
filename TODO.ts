/*

todo: 3d
- for the css only approach we can define classes like x0-y0-z0 for frontfacing elements or x115-y90-z0 for the remote. If we change the camera, we can target these elements together
=> this could be done in a script none media query
=> maybe we only need a dedicated class if it is not front facing

todo: remote
- enable channel functionality
- the trigger of the remote shifts away from its initial position, which might cause confusion. We can also turn this into a checkbox trigger
- animate the remote opening

todo: animation and sounds
- add more sounds
=> tv turning on
=> static noise and animation of the static
- rotate the scene slightly based on mouse position
- animate the static noise whenever visible
- selection for various 3d angles in the 3d episode

todo: content
- rewrite about text
- include bewegung text

todo: bugs
- all 3d elements need to either have an outline/border or some kind of shadow not a mix of both
- z-indices are unsorted, could be turned into a layer system
- overflowing the preview content leads to also moving of the screen effect, can it be done without a wrapper?
- layout namings / custom properties are confusing and overlap 

?questions

? should the page becomes inert if the settings are open ?

*/

/*
!things that didnt work

- position sticky on the tv was breaking firefox 
- details can only be styled in chrome and need to be surrounded by a container (and set to display contents) on FF and Safari
- details dont keep the 3D space in their shadow parts
- custom component wrapper with display contents was also breaking interactivity on safari


*/
