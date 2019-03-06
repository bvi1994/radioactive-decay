# Radioactive Decay

By Brandon Vi

*Note: In order to stay within the recommended 4 hour time limit as per spec sheet, not all features have been implemented. However, most of the core features have been implemented. The only things that I did not have time for are styling of the application.

> We suggest you spend no more
than 4 hours on it which may mean you do not implement every feature.

----
## Instructions

1. Install dependacies using `npm install`
2. Start the server using `npm start`
3. Navigate your browser to http://localhost:3000 to run the app
4. Have fun!

----
## Technologies Used
I used HTML, CSS, JavaScript and React. I used [create-react-app](https://github.com/facebook/create-react-app) to generate the scaffolding for this app. No other front-end libraries were used.

----
## Requirements

#### Decay Model

> The final amount (N’) of a sample with an initial amount N that decays for a specified time (t) with a
specified half-life (h) can be determined with the following equation:
N' = N exp(ln(2) t / h) where ln(2) is the natural log, or log base e, of 2```

The formula can be found in `Main` in `calculateDecay()` method. This function then updates the `currentSample` state which then gets passed as a prop for `AtomicGraphics` component.

> There should be 3 number inputs (validation optional): Initial sample amount: 0-100 grams, Half-life: ranges from 50-100 years, Time spent decaying: ranges from 0 to 1000 years.

####Inputs

Initial sample inputs can be found in the `InitalSample` component. Half-life input can be found in `HalfLife` component and decay time input can be found in `DecayTime` component.

If the input is not within the specified range, the corresponding state would be set to 'error' which would then notify the user at the bottom to put inputs within the specified range.

> There should be one slider bar that changes the decaying time, but it should use a
logarithmic scale so the slider has higher resolution in the low end (for example, the
ranges 0-10, 10-100, and 100-1000 have roughly equal space). The value on the slider
and the time input should be linked together, so that changing one updates the other.

####Decay time and slider

The `DecayTime` component has two subcomponents, `DecayTimeForm` and `DecayTimeSlider`.

`DecayTimeForm` takes in a user input and calls `updateDecayTimeForm()` from the `Main` component  to update the `decayTime` and `currentPosition` states. No manipulation has been done for `decayTime` state but `currentPosition` must be manipulated to give an accurate mark on the slider.

`DecayTimeSlider` grabs the linear position of the slider and converts it to the proper decay time using the exponential function. `DecayTimeSlider` does this by calling `updateSlideDecay()` from Main to update the states.

`DecayTimeForm` and `DecayTimeSlider` updates the `currentPosition` and `decayTime` states at the same time so that the input form and sliders are linked together.

#### Atoms

> Using the atom graphic, show the initial and final amount of sample after the specified
time where each atom graphic represents 5 grams of substance.


The `AtomicGraphic` component handles the logic of how many atoms should be displayed. Each individual atom is represented by `Atom` which displays the corresponding graphic of whether or not an atom has decayed and how much of the atom has been decayed.

The `AtomicGraphic` first calculates the number of `Atom` sub-components that are needed and puts those sub-components into an array. Each element of the array is an object representing an individual `Atom` sub-component property. Each value is then set according to the logic such as if the atom has decayed or not and if the atom is a fraction of 5 grams. The end result is a bunch of `Atom` components with the corresponding properties.

The `Atom` component takes in an object and renders the atom based on the key-value pair it receives. In cases where the atom is partially decayed, two images are stacked on top of each other.

#### Remaining Samples

> The final amount of the sample is shown numerically.

This is handled by the `RemainingSample` component where depending if all the relevant information is given, displays how many atoms remain left. Otherwise, it would display to the user to enter the relevant information.

#### Bonus

Validation has been implemented. If the input is not within the specified range, the corresponding state would be set to 'error' which would then notify the user at the bottom to put inputs within the specified range.
