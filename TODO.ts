/*

todo: zoom & teletext
- we allow for zooming the content for better readability. We likely cant see much of the tapes so we need a teletext
- add pagination 

todo: cleanup
- several values are not aligned like borders, colors, distances, calculations
- other things to unify: hover/active states
- chunks for code should be split more semantically with article and sections

todo: animation
- for the css only approach we can define classes like x0-y0-z0 for front-facing elements or x115-y90-z0 for the remote. If we change the camera, we can target these elements together
=> this could be done in a script none media query
=> maybe we only need a dedicated class if it is not front-facing (x0-y0-z0)
- animate the static noise whenever visible
- rotate the scene slightly based on mouse position
- selection for various 3d angles in the 3d episode
- animate the remote opening

todo: remote
- streamline rendering
- enable channel functionality
=> channel
=> numbers
=> select etc

todo: animation and sounds
- add more sounds
=> tv turning on
=> static noise

todo: content
- include bewegung text

todo: bugs
- all 3d elements need to either have an outline/border or some kind of shadow not a mix of both
- z-indices are unsorted, could be turned into a layer system
- overflowing the preview content leads to also moving of the screen effect, can it be done without a wrapper?
- layout namings / custom properties are confusing and overlap 
- does opening the settings require the screen to be hidden?

?questions

? should the page becomes inert if the settings are open ?

*/
