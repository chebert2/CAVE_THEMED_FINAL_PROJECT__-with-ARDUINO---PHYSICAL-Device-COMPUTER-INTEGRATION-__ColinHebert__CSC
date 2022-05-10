// HW 11: Arduino Serial Commun. interface between an arduino and P5.js.
// CSC2463 Spring 2022 Colin Hebert
//
// https://www.youtube.com/watch?v=a49-VVJCpIY

#include "PDMSerial.h"
// #include <PDMSerial.h>   // use if PDMSerial is in your libraries folder
#include "math.h"

PDMSerial pdm;

// set this to a neutral starting value.
//
// a zero value means to not enable effects
// .. and a positive '1' value
// means to enable effects.
int turn_on_LED_EFFECTS = 0;


// INPUT


// response from button being pressed down and released
boolean toggled_button_state = false;

int button_state_int;


// primitive/tiny button press input
const int button_analogIN_pin = A1;




// DIGITAL OUTPUT

// LED output pins

//
// these ARE 'PWM' ouput pins

const int led_1_PWM = 5;

const int led_2_PWM = 6;

const int led_3_PWM = 9;

const int led_4_PWM = 10;

const int led_5_PWM = 11;

//
// these are NOT 'pwm' ouput pins

const int led_0 = 2;
const int led_6 = 12;
const int led_7 = 13;



void setup() {
  //---set pin direction

  // input pins
  
  pinMode(button_analogIN_pin,INPUT);


  // output pins

  pinMode(led_0,OUTPUT);
  
  pinMode(led_1_PWM,OUTPUT);
  
  pinMode(led_2_PWM,OUTPUT);
  
  pinMode(led_3_PWM,OUTPUT);
  
  pinMode(led_4_PWM,OUTPUT);
  
  pinMode(led_5_PWM,OUTPUT);
  
  pinMode(led_6,OUTPUT);
  
  pinMode(led_7,OUTPUT);

  

  Serial.begin(9600);
  
}

void loop() {



 if(turn_on_LED_EFFECTS != 0){

    delay(50);


    // ITEM NOT WITH 'PWM'.
    analogWrite(led_0, 254);

    delay(280);

    // ITEMS  WITH 'PWM'.

    analogWrite(led_1_PWM, 254);

    delay(280);

    analogWrite(led_2_PWM, 254);

    delay(280);

    analogWrite(led_2_PWM, 0);

    analogWrite(led_3_PWM, 254);

    delay(280);

    analogWrite(led_3_PWM, 0);

    analogWrite(led_4_PWM, 254);

    delay(280);

    analogWrite(led_4_PWM, 0);

    analogWrite(led_5_PWM, 254);

    delay(280);

    analogWrite(led_5_PWM, 0);

    // ITEMS .. NOT WITH 'PWM'.
    
    analogWrite(led_6, 254);

    delay(280);

    analogWrite(led_7, 254);

    delay(320);

    analogWrite(led_2_PWM, 190);

    analogWrite(led_3_PWM, 190);

    analogWrite(led_4_PWM, 190);

    analogWrite(led_5_PWM, 190);

    delay(430);



    // ITEM NOT WITH 'PWM'.
    analogWrite(led_0, 254);

    // ITEMS  WITH 'PWM'.

    analogWrite(led_1_PWM, 254);

    analogWrite(led_2_PWM, 0);

    analogWrite(led_3_PWM, 0);

    analogWrite(led_4_PWM, 0);

    analogWrite(led_5_PWM, 0);

    // ITEMS .. NOT WITH 'PWM'.
    
    analogWrite(led_6, 254);

    analogWrite(led_7, 254);


    delay(1000);


    // ITEM NOT WITH 'PWM'.
    analogWrite(led_0, 0);

    // ITEMS  WITH 'PWM'.

    analogWrite(led_1_PWM, 0);

    // ITEMS .. NOT WITH 'PWM'.
    
    analogWrite(led_6, 0);

    analogWrite(led_7, 0);

    turn_on_LED_EFFECTS = 0;
    
  }
  
  
  button_state_int = analogRead(button_analogIN_pin);

  if(button_state_int == HIGH){

    toggled_button_state = true;

    pdm.transmitSensor("a1", 1);

  } else {

    toggled_button_state = false;
     
    pdm.transmitSensor("a1", 0);
  }

   pdm.transmitSensor("end");


  boolean newData = pdm.checkSerial();

  if (newData) {

    
    if (pdm.getName().equals(String("led_effects"))) {
      
      turn_on_LED_EFFECTS = pdm.getValue();
      
    }  
    
  }
  
}
   
