The main code from my work is found in two places: in the JS folder's file 'sketch.js'  and in the button_and_led__ino_file folder's file 'button_and_led__ino_file.ino' .  I also implemented the libraries p5.js, tone.js, p5.serialport.js, and PDMSerial.cpp (with the associated header file, 'PDMSerial.h'). 


It is important to note that: I electively merged the contents of 'PDMSerial.js' and my main javascript subroutine file (, 'sketch.js',). I did this to allow the serialEvent data response/write-out interface method to control media input/output routing events.

The arduino r3 uno device that I used was given uploaded programming assignment orders of the compiled file  'button_and_led__ino_file.ino' .

To run..., follow these guidelines ... :

Given the necessary TONE.js and p5.js libraries, just launch the projects root folder with VSCODE, setup a server, and view with Firefox/CHROME.

In order to hear background soundtrack audio playback, "the user must press the grave accent key .. (located on the same key as the tilde symbol)". 


IMPORTANT NOTE: when solving a trivia question, just click on the answer option number (from whole numbers '1' on up to '4') box and then press the Button/Switch device placed on the arduino breadboard setup. When the game recognizes the button is pressed, it will evaluate the answer.

Also of note (Physical-INPUT/OUTPUT-wise...):
upon a successful question answer, there will be a strobe green-and-yellow-LED_output_(lightup_display_sequence) initiated for short period of time to build enthusiasm interactively.

// link on github is : 
//
// <  https://github.com/chebert2/Extended_BUG_SQUISH_APP__Controller_P5_Integration_Project__hw12_ColinHebert__CSC_2463_J_Allison  >