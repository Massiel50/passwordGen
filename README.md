# passwordGen
A password generator

If the user clicks on the generate button. The process for generating a password will begin.

The user will be asked for his/her name to establish rapport
The user will also select the length of the password.
The password has a condition, it must be between 8 and 128 characters. If the user selects a wrong entry like 
a number smaller than 8, a number larger than 128, a string or no entry, then the user will be asked again for 
input.
The user will be given the options as what characters they want to include in the password they want generated.
The options to select are: Numbers, Special characters, lower case letters and upper case letters.
Each option is composed of an array full of that data.

As the user selects yes or no for each option, the array is pushed into an empty array.
When the user is done selecting what the password is composed of, the array that which the user
filled with his/her options is flattened.

Flattening breaks apart arrays. Before I use flat, the empty array is composed of MULTIPLE arrays. After I use 
flat, all the data is ONE big whole array.

Once the array is concated, I looped the process of randomizing the ONE big array and selecting the first index.
Once that index is selected, it is pushed into a final array that holds that character. Then the loop reiterate 
for the length the user selected at the beginning. That final array is returned/ passed as your password.

The user also has a copy button next to the generate button. Once copy is clicked, the generated password will
be copied onto the users clipboard. Meaning that it's like keying in ctrl+c to copy text. Keying in ctrl+v or right
clicking and pasting will both result in the generated password being pasted where ever the user sees fit.
