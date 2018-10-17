# Individual Exercise: Beginning of Class

## Part 1 - Create an Application
* Run the command `ng new my-test-app`.

* Run the command `code .` to open VS code.
* **BONUS: Upload the application to a github repository**
    1. Login to github and create a new project (select to initialize w/ readme)
    2. Clone this new github repository to the repository folder on your machine
    3. Repeat the first two steps *but* this time inside the folder of your cloned repository, or cut and paste your application into this folder
    4. Commit and push your changes via VS code


## Part 2 - Create a Component
* Run the command `ng g component product-star`.
This will create a new folder in `src/app/` called `product-star`. 
It will include all of the files needed for the component.

* Add the component to `app.component` using the correct selector.
* Modify `product-star.component.html` to display a star icon from the assets folder. Make sure it's not too big!

We could put the star component next to every product, but wouldn't it be nice if it was automatically added to every card? We can!
* Add the `product-star` component to the `product-card` component, next to the "Add to Cart" button.
it will be added to every existing `product-card` component in your app.

## Part 3 - Style a Component
* Modify the `product-card` component to look nicer.
You can add a shadow, round the corners, or change the colors.

* Add some special styles (such as color, size change, or slight rotation) when the user hovers over the icon in your star component. [hint](https://www.w3schools.com/cssref/sel_hover.asp).
* Add a transition style to your star component: `transition: 300ms`. Now when you hover over the element, the styles should be added gradually with an animation.

* * * * * * 
# Individual Exercise: End of Class

## Part 1: Create a button to Show/Hide completed tasks
*Hopefully you noticed on the PowerPoint that we had a button that would show/hide completed tasks. We'd like you to implement it!*

* Add a button to the bottom of your todo-list component's template (todo-list.component.html)

* Connect this button to a function in your component's typescript file (todo-list.component.ts)
* Define the function in your component's typescript file to alter the "show_completed" variable within your todo-list component.
When show_completed = true, it should show all tasks. When show_completed = false, it should only show *incomplete* tasks
* **BONUS: Alter the button's label to change between "Show Completed Tasks" & "Hide Completed Tasks"**
    * This should depend on whether completed tasks are displaying on the screen or not.
    * **I.E.** When the UI is showing only incomplete tasks, the button should say "Show Completed Tasks".
    * When the UI is showing all tasks, the button should say "Hide Completed Tasks"
    * *(You can accomplish this in many ways, so be creative!)*
