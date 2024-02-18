/*

todo: 3d
- turn the top level div inside of the block into a custom component that gets coordinates and can render the scene based on what the camera is like
=> maybe just do it with js, 3d custom components behave weird in some browsers

=> we can do this even better> We just need one element with 2 (pseudo) elements. If the camera changes, the elements render differently. Ideally, one element is always responsible for one plane and just moves sideways and or flips

todo: remote
- enable channel functionality
- settings label buttons on the remote need some kind of grouping
- real remote buttons
- the remote will not be usable without javascript. In that case we should only show it in its extended form when js is enabled
- the trigger of the remote shifts away from its initial position, which might cause confusion. We can also turn this into a checkbox trigger

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

*/

/*
!things that didnt work

- position sticky on the tv was breaking firefox 
- details can only be styled in chrome and need to be surrounded by a container (and set to display contents) on FF and Safari
- details dont keep the 3D space in their shadow parts
- custom component wrapper with display contents was also breaking interactivity on safari


*/
