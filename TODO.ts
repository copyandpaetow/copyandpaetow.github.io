/*

todo: cleanup
- several values are not aligned like the gap of the tv-power-button
- tv borders

todo: animation
- for the css only approach we can define classes like x0-y0-z0 for front-facing elements or x115-y90-z0 for the remote. If we change the camera, we can target these elements together
=> this could be done in a script none media query
=> maybe we only need a dedicated class if it is not front-facing (x0-y0-z0)
- animate the static noise whenever visible
- rotate the scene slightly based on mouse position
- selection for various 3d angles in the 3d episode
- animate the remote opening

todo: remote
- enable channel functionality
=> escape should close it (but that would overlap with the escape trigger of the tapes)

todo: animation and sounds
- add more sounds
=> tv turning on
=> static noise

todo: content
- include bewegung text
- add a small text of what works for 3D elements for several browser
- add the benefits 

todo: bugs
- all 3d elements need to either have an outline/border or some kind of shadow not a mix of both
- z-indices are unsorted, could be turned into a layer system
- overflowing the preview content leads to also moving of the screen effect, can it be done without a wrapper?
- layout namings / custom properties are confusing and overlap 
- does opening the settings require the screen to be hidden?

?questions

? should the page becomes inert if the settings are open ?

*/
