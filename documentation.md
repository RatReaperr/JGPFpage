# JavaScript Programming Fundamentals

---

    In Javascript programming Fundamentals we were tasked to develop a website 
    that will give direct links to 5 elements though the homepage. The homepage is to be customised
    by ourselves and showcases elements and webpage layouts.

    Element 1 is used to show different techniques using basic shapes, 
    lighting, textures, shadows, and motion. 

    Element 2 demonstrates the use of a 3D village enviroment which is done by placing single or multiple textured meshes and uses some merge-meshes and should be buily within a 360-degree scene with background image, a height map using textured terrain, appropriate lighting, and constrained camera motion for the user. 

    Element 3 demostrates the a movable player mesh incorporating player functional animations,  
    as well as collisions between the player and objects. 

    Element 4 is used to show a Graphic user interface should feature at least one GUI element that should change in response to scene events such as a button click. 

    Element 5 is used to demonstrate multiple scenes which can be switched 
    between using a gui or scene events. Each scene should incorporate techniques
    explored in the module and provides the most oppurtunity to display creativity 
    and the introduction of game like aspects.

    each of these layouts are accessible through the navigation bar that appears on the website homepage.
    on the home page there is information on certain things that are used such as babylon, bootstrap and javascript.

 ## Element 5

---

    These notes focus on the element 5 section of the webpage. Element 5 features 4 
    different scenes which can be swithced between using the graphical user interface 
    displayed on the screen. i used different things i learned from the other elements 
    and implemented them into element 5. i done this by editing 
    lighting adding in different meshes and changes textures to display different scenes.

    1. The first scene contains 3 shapes with different textures, 2 spheres one
     representing the sun and the other earth and a black plane that is beneath them
    2. The second scene contains 4 shapes with textures, 3 cubes and a plane. the cubes
     represent boxes standing on top of one another in a stack that
     is sitting on a plane with the texture of grass.
    3.The third scene shows more shapes with textures such as a sphere, 3 boxes and a plane. 
    i used these to showcase a castle on lava with a sun in the sky and i done this by 
    texturing each shape.
    4.Scene 4 uses the base of the 2nd enviroment which includes a village with
     a grassy surrounding as well as a skybox. i input capsules into this to showcase them
     as people in the village as well as dulling the lighting to create a darker scene.

## Extracting files

---
    When referencing different assets within this code i made sure that the links
    between the ts files went to the correct assets as if this was not the case there would
    be errors when using npm run dev as there would be meshes without textures if the links 
    weren't correct.       
     When exporting this scene as well as all other elements i had
    to make sure it was working within a seperate development
    folder and extracting it locally into its own folder which
    would originally be the "Dist" folder but i would rename it to the required element it was.
    these folders includes a index.html as well as the assets and coding for the scenes in
    order for them to work. When the elements were ready within their local folders 
    i would copy them over into my JGPFpage folder for my website development 
    and link them through the index.html page that was set up for my homepage
