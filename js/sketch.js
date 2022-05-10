
// Student :  Colin H Hebert     in CSC 2463  (at LSU Spring 2022)

//  HW 13 (Final Project)
//
// This is the physical computing version of the code.

// github repository url : <  https://github.com/chebert2/CAVE_THEMED_FINAL_PROJECT__-with-ARDUINO---PHYSICAL-Device-COMPUTER-INTEGRATION-__ColinHebert__CSC  > .

let in_startup_base_room;

let ignore_100_frames;

let ignore_100_frames__counter;

let ignore_146_frames;

let ignore_146_frames__counter;

let drop_iterate_setup_number;

let spriteSheet_waterDrop;

let spriteFrame_waterDrop;

let sx_waterDrop;

let image01;
let imgSet = [];

let arrow_sprite_sheet;

let spriteFrame_arrow_animation;

let sx_arrow_anim;

let planet_celebration;

let heavenly_img;

let in_last_room__initial_drawing;

let wall_art_default;

// let arrowMark_01_pressed = 0;

// let arrowMark_02_pressed = 0;

// let arrowMark_03_pressed = 0;

// this will correlate with the desired image to paint on the canvas.
let displayImageCurrent;

let we_are_in_a_special_quizing_MODE_state;

let current_option_selected;

// array has separate highlight flag values for each option box, numbered 1 to 4.

let highlight_BOX = [0,0,0,0];

let is_marker_leftArrow;

let is_marker_rightArrow;

let is_marker_upArrow;

// // room 1 object quizing has been addressed
// room_visit_met[0]

// // room 2 object quizing has been addressed
// room_visit_met[1]

// // room 3 object quizing has been addressed
// room_visit_met[2]

// // room 4 object quizing has been addressed
// room_visit_met[3]

// // room 5 object quizing has been addressed
// room_visit_met[4]

// // room 6 object quizing has been addressed
// room_visit_met[5]

// // room 7 object quizing has been addressed
// room_visit_met[6]


// set all parameters to initial false values!

// sasnc
let room_visit_met = [0,0,0,0,0,0];

// 0 value means inactive
let in_room_currently__numb__1_to_7;


let answered_one_correctly__hurray;

let two_frames_after_answered_one_correctly__hurray;

let two_frame_counter;


let initial_frame_marker_before_short_fan_fare;


// this will be the boolean flag to go ahead
// with initiating animation for the final-room's
// black stone wall view.
let enable_animation_final_room = 0;


let label_choices_grid = [
["\"Wire\"", "\"Benefit\"", "\"Etching\"", "\"Toast\""],
["\"Name Tag\"","\"Agreement\"", "\"Exercise\"", "\"Refrigerator\""],
["\"Escape\"", "\"Convincing\"", "\"Clump\"", "\"Advancement\""],
["\"Saffron\"", "\"Trade-off\"", "\"Caravan\"", "\"Skyline\""],
["\"Burnishing\"", "\"Hedges\"", "\"Navigation\"", "\"Square\""],
["\"Availability\"", "\"Seal\"", "\"Exhibit\"", "\"Distraction\""],
["\"Reservoir\"", "\"Diminishing Return\"", "\"Legal Sanction\"", "\"Alarm\""]
];
  // note, these are for zero index answer referencing
let answerList = [3,1,0,1,0,1,2];

// if value is '1', then the button is pressed.
let button_pressed;

let do_not_print_screen_game_lost;

let duration_167_frames__counter;

// this will hold whether the
// player has lost the current
// game session.
//
// value '0' means nothing has been lost
// and
// value '1' means the game was lost.
let gameLost;

let duration_255_frames__counter;


let current_game_state = 0;

let game_State_options = ["just_started", "playing", "won_state", "lost_state"];

let now1;

let currentMidi = null;

let lostMidi = null;

let rightAnswerMidi = null;

let jsonFormatMidiObj;


// this is for the main background theme music
let synththreeFOUR_0 = null;

// this is for failed game state tone midi music
let synththreeFOUR_1 = null;

// this is for won game state tone midi music
let synththreeFOUR_2 = null;


let in_playback = 0;

// serial data port
let portName = 'COM4';    // Fill in  serial port name here

// Set up the serial data global variables for communication

let sensorData = null;
let pastSensorData = null;
let inData = "bob";                               // For incoming serial data
let outData;                              // For outgoing serial data


let button_switch_state = 0;

let runJUST_One_Time_over;



function preload(){

    spriteSheet_waterDrop = loadImage("visual_media/cartoon-water-drop-burst-animation-concept_1284-40307.jpg");

    imgSet[0] = null;
    imgSet[1] = loadImage("visual_media/NOW_CAVE/id01.jpg");
    imgSet[2] = loadImage("visual_media/NOW_CAVE/id02.jpg");
    imgSet[3] = loadImage("visual_media/NOW_CAVE/id03.jpg");
    imgSet[4] = loadImage("visual_media/NOW_CAVE/id04.jpg");
    imgSet[5] = loadImage("visual_media/NOW_CAVE/id05.jpg");
    imgSet[6] = loadImage("visual_media/NOW_CAVE/id06.jpg");
    imgSet[7] = loadImage("visual_media/NOW_CAVE/id07.jpg");
    imgSet[8] = loadImage("visual_media/NOW_CAVE/id08.jpg");
    imgSet[9] = loadImage("visual_media/NOW_CAVE/id09.jpg");
    imgSet[10] = loadImage("visual_media/NOW_CAVE/id10.jpg");
    imgSet[11] = loadImage("visual_media/NOW_CAVE/id11.jpg");
    imgSet[12] = loadImage("visual_media/NOW_CAVE/id12.jpg");
    imgSet[13] = loadImage("visual_media/NOW_CAVE/id13.jpg");
    imgSet[14] = loadImage("visual_media/NOW_CAVE/id14.jpg");
    imgSet[15] = loadImage("visual_media/NOW_CAVE/id15.jpg");
    imgSet[16] = loadImage("visual_media/NOW_CAVE/id16.jpg");
    imgSet[17] = loadImage("visual_media/NOW_CAVE/id17.jpg");
    imgSet[18] = loadImage("visual_media/NOW_CAVE/id18.jpg");
    imgSet[19] = loadImage("visual_media/NOW_CAVE/id19.jpg");
    imgSet[20] = loadImage("visual_media/NOW_CAVE/id20.jpg");

    arrow_sprite_sheet = loadImage("visual_media/arrow_sprite_sheet2.png");

    heavenly_img = loadImage("visual_media/heavenly_clouds2.gif");

    wall_art_default = loadImage("visual_media/gears_wall_art2.jpg");

    planet_celebration = loadImage("visual_media/planet_animation.gif");

    //soundWaveAnimation = loadImage("visual_media/tumblr_n98y5nl9k21rpco88o1_500.gif");

    //spriteSheet_01 = loadImage("visual_media/spriteSheet_width_384__height_83.png");

    //players = new Tone.Players({
    //   't_01': "audio_media/deteriorated_as_to__excerpt.ogg",
    //   't_02': "audio_media/380381__cribbler__squashing-sallad.ogg",
    //   't_03': "audio_media/472399__joseagudelo__16-raton-chillando.ogg",
    //   't_04': "audio_media/missBugHitSound.ogg",
    //   't_05': "audio_media/ninja_running_out_of_time.ogg"
    //}).toDestination();


}  

function mousePressed(){

  
  if(highlight_BOX[0]){

    current_option_selected = 1;

  } else if(highlight_BOX[1]){

    current_option_selected = 2;

  } else if(highlight_BOX[2]){

    current_option_selected = 3;

  } else if(highlight_BOX[3]){

    current_option_selected = 4;

  }
  

  // left-arrow button is pressed
  if( ( ( mouseX >= 23 && mouseX <= 138 ) && ( mouseY >= 393 && mouseY <= 514 ) ) && is_marker_leftArrow ){
    //arrowMark_01_pressed = 1;

    if(displayImageCurrent == 1 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

    } else if(displayImageCurrent == 2 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 5;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }


    } else if(displayImageCurrent == 3 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 8;

      is_marker_leftArrow = 0;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

      if( ! room_visit_met[2 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 2;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 4 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 2;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

    } else if(displayImageCurrent == 5 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 3;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

    } else if(displayImageCurrent == 6 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 7;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 0;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }


      if( ! room_visit_met[4 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 4;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 7 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 11;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }

      if( ! room_visit_met[5 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 5;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 8 && !we_are_in_a_special_quizing_MODE_state){
      
      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 9 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 10 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 14;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[6 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 6;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 11 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 14;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[6 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 6;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 12 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 20;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

      in_last_room__initial_drawing = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[7 - 1] &&  room_visit_met[0]  &&  room_visit_met[1]  &&   room_visit_met[2] 
         
         &&  room_visit_met[3]  &&  room_visit_met[4]  &&  room_visit_met[5]  )  {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 7;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }


    } else if(displayImageCurrent == 13 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 14 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 15;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 0;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[2 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 2;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 15 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 16;

      is_marker_leftArrow = 0;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 16 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

    } else if(displayImageCurrent == 17 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 18 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

    } else if(displayImageCurrent == 19 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 3;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

    } else if (displayImageCurrent == 20 && !we_are_in_a_special_quizing_MODE_state) {

      if (!enable_animation_final_room) {
        
        displayImageCurrent = 14;

        is_marker_leftArrow = 1;

        is_marker_rightArrow = 0;

        is_marker_upArrow = 1;

        in_last_room__initial_drawing = 0;

        if (!room_visit_met[6 - 1]) {

          // set up the upcoming room code
          //  which will next need solving.
          in_room_currently__numb__1_to_7 = 6;

          // mark that we are in a quizing mode state.
          we_are_in_a_special_quizing_MODE_state = 1;

        }
      }

    }

  }

  // right-arrow button is pressed
  if( ( ( mouseX >= 1776 && mouseX <= 1891 ) && ( mouseY >= 393 && mouseY <= 514 ) ) && is_marker_rightArrow ){
    //arrowMark_02_pressed = 1;

    if(displayImageCurrent == 1 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

    } else if(displayImageCurrent == 2 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 4;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;
      
      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }

    } else if(displayImageCurrent == 3 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 5;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

    } else if(displayImageCurrent == 4 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 6;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 0;

      if( ! room_visit_met[3 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 3;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }


    } else if(displayImageCurrent == 5 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 4;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

    } else if(displayImageCurrent == 6 && !we_are_in_a_special_quizing_MODE_state){
      
      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 7 && !we_are_in_a_special_quizing_MODE_state){
      
      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 8 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 9;

      is_marker_leftArrow = 0;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 0;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[6 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 6;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 9 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 12;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[5 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 5;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 10 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 13;

      is_marker_leftArrow = 0;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[4 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 4;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 11 && !we_are_in_a_special_quizing_MODE_state){
      
      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 12 && !we_are_in_a_special_quizing_MODE_state){
      
      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 13 && !we_are_in_a_special_quizing_MODE_state){
      
      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 14 && !we_are_in_a_special_quizing_MODE_state){
      
      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 15 && !we_are_in_a_special_quizing_MODE_state){
      
      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 16 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

    } else if(displayImageCurrent == 17 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 18 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 4;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

    } else if(displayImageCurrent == 19 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 10;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

      if( ! room_visit_met[5 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 5;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if (displayImageCurrent == 20 && !we_are_in_a_special_quizing_MODE_state) {

      if (!enable_animation_final_room) {

        displayImageCurrent = 13;

        is_marker_leftArrow = 0;

        is_marker_rightArrow = 0;

        is_marker_upArrow = 1;

        in_last_room__initial_drawing = 0;

        if (!room_visit_met[4 - 1]) {

          // set up the upcoming room code
          //  which will next need solving.
          in_room_currently__numb__1_to_7 = 4;

          // mark that we are in a quizing mode state.
          we_are_in_a_special_quizing_MODE_state = 1;

        }

      }
    }

  }

  // up-arrow button is pressed
  if( ( ( mouseX >= 904 && mouseX <= 1019 ) && ( mouseY >= 4 && mouseY <= 125 ) ) && is_marker_upArrow ){
    //arrowMark_03_pressed = 1;

    if(displayImageCurrent == 1 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 2;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

      in_startup_base_room = 0;

      // enter the 'playing' game state
      current_game_state = 1;


      // check if room #1 [... which is
      //  at the zero index of
      //  room_visit_met] "has been 
      // solved" ( i.e.condition is 
      // 'false'-/-'0' ) 
      if(room_visit_met[ 1 - 1 ] == 0){

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 1;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

         // sasnc

         // eventually turn off value of in_room_currently__numb__1_to_7 back to being '0' ...

         // also very importantly ...
         //
         // turn off value of  room_visit_met[0] to 'true'-/-'1'.

      }

    } else if(displayImageCurrent == 2 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 10;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

      
      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }


      if( ! room_visit_met[5 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 5;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 3 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 8;

      is_marker_leftArrow = 0;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

      if( ! room_visit_met[2 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 2;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 4 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 6;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 0;

      if( ! room_visit_met[3 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 3;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 5 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 10;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

      if( ! room_visit_met[5 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 5;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 6 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }

    } else if(displayImageCurrent == 7 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 8 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 9;

      is_marker_leftArrow = 0;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 0;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[6 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 6;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 9 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 10 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 11;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[5 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 5;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 11 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 20;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      in_last_room__initial_drawing = 1;

      if( ! room_visit_met[7 - 1] &&  room_visit_met[0]  &&  room_visit_met[1]  &&   room_visit_met[2] 
         
        &&  room_visit_met[3]  &&  room_visit_met[4]  &&  room_visit_met[5]  )  {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 7;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }


    } else if(displayImageCurrent == 12 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 13;

      is_marker_leftArrow = 0;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[4 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 4;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 13 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 17;

      is_marker_leftArrow = 0;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 1;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[3 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 3;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 14 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 15;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 0;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

      if( ! room_visit_met[2 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 2;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 15 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 16 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 18;

      is_marker_leftArrow = 0;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

    } else if(displayImageCurrent == 17 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 19;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 0;

      current_option_selected = "-";

      if (answered_one_correctly__hurray) {
        // turn this off if on
        answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frames_after_answered_one_correctly__hurray = 0;
        // and then turn this back to a neutral value..
        two_frame_counter = 0;
      }      

    } else if(displayImageCurrent == 18 && !we_are_in_a_special_quizing_MODE_state){

      displayImageCurrent = 10;

      is_marker_leftArrow = 1;

      is_marker_rightArrow = 1;

      is_marker_upArrow = 1;

      if( ! room_visit_met[5 - 1] ) {

        // set up the upcoming room code
        //  which will next need solving.
        in_room_currently__numb__1_to_7 = 5;

        // mark that we are in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 1;

      }

    } else if(displayImageCurrent == 19 && !we_are_in_a_special_quizing_MODE_state){

      // outcome is null
      //
      // SO.. do nothing.

    } else if(displayImageCurrent == 20 && !we_are_in_a_special_quizing_MODE_state){

      // Design wise ,... we will enable some final room animation effect!

      if( room_visit_met[0]  &&  room_visit_met[1]  &&  room_visit_met[2]  &&  room_visit_met[3]  &&  room_visit_met[4]  &&  room_visit_met[5] &&  room_visit_met[6]){

         enable_animation_final_room = 1;

         // we have won the game!
         current_game_state =  2;

         duration_167_frames__counter = frameCount;

      }

    }



  }



}

function keyPressed() {

 

  if(answered_one_correctly__hurray && two_frames_after_answered_one_correctly__hurray){

    if (keyCode === ENTER || keyCode == 32) {

      answered_one_correctly__hurray = 0;

      two_frames_after_answered_one_correctly__hurray = 0;

      two_frame_counter = 0;

    }

  }


  if (keyCode == 192) {
    if (!in_playback) {

      in_playback = 1;

      currentMidi.then(function (jsonFormatMidiObj) {

        now1 = Tone.now() + 0.5;
        jsonFormatMidiObj.tracks.forEach((track) => {
          //create a synth for each track
          synththreeFOUR_0 = new Tone.PolySynth(Tone.FMSynth, {
            envelope: {
              attack: 0.02,
              decay: 0.1,
              sustain: 0.3,
              release: 1,
            },
          }).toDestination();

          //synths_set.push(synththreeFOUR);

          //schedule all of the events
          track.notes.forEach((note) => {
            synththreeFOUR_0.triggerAttackRelease(
              note.name,
              note.duration,
              note.time + now1,
              note.velocity
            );
          });
        });
      });

      setInterval(function () {

        currentMidi.then(function (jsonFormatMidiObj) {

          now1 = Tone.now() + 0.5;
          jsonFormatMidiObj.tracks.forEach((track) => {
            //create a synth for each track
            synththreeFOUR_0 = new Tone.PolySynth(Tone.FMSynth, {
              envelope: {
                attack: 0.02,
                decay: 0.1,
                sustain: 0.3,
                release: 1,
              },
            }).toDestination();

            //synths_set.push(synththreeFOUR);

            //schedule all of the events
            track.notes.forEach((note) => {
              synththreeFOUR_0.triggerAttackRelease(
                note.name,
                note.duration,
                note.time + now1,
                note.velocity
              );
            });
          });
        });

      }, 115650);
    }
  }


  if(current_game_state == 2 && enable_animation_final_room ){

    if (keyCode === SHIFT) {

      do_not_print_screen_game_lost = 1;

      enable_animation_final_room = 0;

      gameLost = 1;
      // game must restart.

      duration_255_frames__counter = frameCount;

      // sasnc .. later print a game failed screen.

      current_game_state = 3;

    }

  }

}


function setup() {

  createCanvas(1920, 1080);

  // we are in need of a
  //  key being pressed 
  // for the background 
  // music to startup
  in_playback = 0;

  //read the midi file
  currentMidi = new Midi.fromUrl("audio_media/cave_AUDIO__tracks/GameMusic__Going_On_With_the_Game__By_Colin_Hebert.mid");

  lostMidi = new Midi.fromUrl("audio_media/bad_END_Untitled331OUT.mid");

  rightAnswerMidi = new Midi.fromUrl("audio_media/good_END_Untitled33OUT.mid");


  in_startup_base_room = 1;

  ignore_100_frames = 0;

  ignore_100_frames__counter = 0;

  ignore_146_frames = 0;

  ignore_146_frames__counter = 0;

  drop_iterate_setup_number = 1;

  spriteFrame_waterDrop = 1;

  sx_waterDrop = 0;

  spriteFrame_arrow_animation = 0;

  sx_arrow_anim = 0;

  // 0 value means inactive, AND values
  //  1-7 correspond to being in one of
  //  the particular rooms there.
  in_room_currently__numb__1_to_7 = 0;

  we_are_in_a_special_quizing_MODE_state = 0;

  displayImageCurrent = 1;

  image01 = imgSet[displayImageCurrent];

  in_last_room__initial_drawing = 0;

  //  arrowMark_01_pressed = 0;

  //  arrowMark_02_pressed = 0;

  //  arrowMark_03_pressed = 0;


  is_marker_leftArrow = 0;

  is_marker_rightArrow = 0;

  is_marker_upArrow = 1;

  initial_frame_marker_before_short_fan_fare = frameCount;

  // turn this on later to enable a short bit of 'fan-fare'!
  answered_one_correctly__hurray = 0;

  // a value of one means it is true that two frames have passed.
  two_frames_after_answered_one_correctly__hurray = 0;

  two_frame_counter = 0;
  
  // set this up with a dummy value.
  current_option_selected = "-";

  duration_167_frames__counter = 0;

  gameLost = 0;

  duration_255_frames__counter = 0;

  do_not_print_screen_game_lost = 0;


  serial = new p5.SerialPort();           // Make new instance of serialport library

  serial.on('list', printList); // set a callback function for the serialport list event
 
  serial.list(); // list the serial ports

  serial.on('data', serialEvent);         // Callback when new data arrives
  serial.on('error', gotError);        // Callback for errors


  serial.on('connected', () => { console.log('Connected to P5SerialControl Server') });
  serial.on('open', () => { console.log("Serial Port is open!"); });



  

  console.log("port: "+ portName);

  serial.open(portName);                  // Open serial port
  // this.serial.on('open', this.gotError);


  // if value is '1', then the button is pressed.
  button_pressed = 0;

  runJUST_One_Time_over = 1;

  
}


function draw() {
  background(255, 255, 255);

  image01 = imgSet[displayImageCurrent];

  image(image01, 8, -85);

  fill(0,0,0);
  rect(0, 0, 8, 1080);

  fill(0,0,0);
  rect(1881, 0, 23, 1080);

  fill(60,60,60);
  rect(8, 852, 1896, 8);

  fill(0,0,0);
  rect(0, 859, 1902, 260);


  if (in_startup_base_room) {

    if (ignore_100_frames) {

      ignore_100_frames__counter += 1;

      if (ignore_100_frames__counter == 100) {

        // tidying up these vars to default 
        // values for next loop being 
        // iniated later on.
        ignore_100_frames__counter = 0;
        ignore_100_frames = 0;
      }

    } else if (ignore_146_frames) {

      ignore_146_frames__counter += 1;

      if (ignore_146_frames__counter == 146) {

        // tidying up these vars to default 
        // values for next loop being 
        // iniated later on.
        ignore_146_frames__counter = 0;
        ignore_146_frames = 0;
      }

    }
    else {
      if (!drop_iterate_setup_number) {

        if (frameCount % 10 == 0) {

          if (spriteFrame_waterDrop % 23 == 0) {
            spriteFrame_waterDrop = 0;
          }

          // animation for water drop  in  the game's base room.
          sx_waterDrop = spriteFrame_waterDrop;

          // increase to the next assigned frame marker.
          spriteFrame_waterDrop += 1;
        }

        image(spriteSheet_waterDrop, 1621, 594, 115, 115, (115 * sx_waterDrop), 0, 115, 115);

        if (spriteFrame_waterDrop % 23 == 0 && frameCount % 10 == 0) {

          spriteFrame_waterDrop = 0;

          drop_iterate_setup_number = 1;

          ignore_146_frames = 1;

        }

      } else {

        if (frameCount % 10 == 0) {

          if (spriteFrame_waterDrop % 23 == 0) {
            spriteFrame_waterDrop = 0;

          }

          // animation for water drop  in  the game's base room.
          sx_waterDrop = spriteFrame_waterDrop;

          // increase to the next assigned frame marker.
          spriteFrame_waterDrop += 1;
        }

        image(spriteSheet_waterDrop, 1621, 594, 115, 115, (115 * sx_waterDrop), 0, 115, 115);

        if (spriteFrame_waterDrop % 23 == 0 && frameCount % 10 == 0) {

          spriteFrame_waterDrop = 0;

          drop_iterate_setup_number = 0;

          ignore_100_frames = 1;
        }


      }
    }
  }



  if (is_marker_leftArrow  &&  !we_are_in_a_special_quizing_MODE_state  &&  !room_visit_met[6] && current_game_state != 3) {
    // highlight mode
    if ((mouseX >= 23 && mouseX <= 138) && (mouseY >= 393 && mouseY <= 514)) {
      // left choice arrow box
      fill(color(94, 110, 142, 144));
      rect(23, 393, 115, 121);

      // left choice arrow
      fill(155, 77, 132);
      noStroke();
      beginShape();
      vertex(47, 452);
      vertex(76, 423);
      vertex(76, 440);
      vertex(111, 440);
      vertex(111, 464);
      vertex(75, 464);
      vertex(75, 480);
      endShape();
    }
    // un-highlighted mode
    else {

      // left choice arrow box
      fill(color(107, 107, 107, 144));
      rect(23, 393, 115, 121);

      // left choice arrow
      fill(152, 71, 113);
      noStroke();
      beginShape();
      vertex(47, 452);
      vertex(76, 423);
      vertex(76, 440);
      vertex(111, 440);
      vertex(111, 464);
      vertex(75, 464);
      vertex(75, 480);
      endShape();

    }
  }

  if (is_marker_rightArrow  &&  !we_are_in_a_special_quizing_MODE_state  &&  !room_visit_met[6] && current_game_state != 3) {

    // highlight mode
    if ((mouseX >= 1776 && mouseX <= 1891) && (mouseY >= 393 && mouseY <= 514)) {

      // right choice arrow box
      fill(color(94, 110, 142, 144));
      rect(1776, 393, 115, 121);

      // left choice arrow
      fill(155, 77, 132);
      noStroke();
      beginShape();
      vertex(1867, 451);
      vertex(1839, 479);
      vertex(1839, 463);
      vertex(1804, 463);
      vertex(1804, 439);
      vertex(1839, 439);
      vertex(1839, 422);
      endShape();
    }
    // un-highlighted mode
    else {

      // right choice arrow box
      fill(color(107, 107, 107, 144));
      rect(1776, 393, 115, 121);

      // left choice arrow

      fill(152, 71, 113);
      noStroke();
      beginShape();
      vertex(1867, 451);
      vertex(1839, 479);
      vertex(1839, 463);
      vertex(1804, 463);
      vertex(1804, 439);
      vertex(1839, 439);
      vertex(1839, 422);
      endShape();
    }
  }

  if (is_marker_upArrow  &&  !we_are_in_a_special_quizing_MODE_state  && current_game_state != 3 ) {
    // highlight mode
    if ((mouseX >= 904 && mouseX <= 1019) && (mouseY >= 4 && mouseY <= 125)) {
      // top choice arrow box
      fill(color(94, 110, 142, 144));
      rect(904, 4, 115, 121);

      // left choice arrow
      fill(155, 77, 132);
      noStroke();
      beginShape();
      vertex(961, 23);
      vertex(990, 52);
      vertex(973, 52);
      vertex(973, 87);
      vertex(951, 87);
      vertex(951, 51);
      vertex(934, 51);
      endShape();
    }
    // un-highlighted mode 
    else {

      // top choice arrow box
      fill(color(107, 107, 107, 144));
      rect(904, 4, 115, 121);

      // left choice arrow
      fill(152, 71, 113);
      noStroke();
      beginShape();
      vertex(961, 23);
      vertex(990, 52);
      vertex(973, 52);
      vertex(973, 87);
      vertex(951, 87);
      vertex(951, 51);
      vertex(934, 51);
      endShape();

    }
  }

  // paint text that we are in the 'just started' game state.
  if(current_game_state == 0){

    fill(160, 42, 35);
    textSize(30);
    textFont("Helvetica");
    text(" Game-STATE : ", 52, 55);

    fill(208, 203, 205);
    textSize(28);
    textFont("Arial");
    text("JUST STARTED", 269, 55);

  }
  



  if (we_are_in_a_special_quizing_MODE_state) {


    fill(76, 135, 187);
    textSize(24);
    textFont("Arial");
    text("*** Room question : ", 25, 883);

    fill(76, 135, 187);
    textSize(23);
    textFont("Arial");
    text(" What ‘Key Term’", 41, 909);

    fill(76, 135, 187);
    textSize(24);
    textFont("Arial");
    text("   IS ASSOCIATED ", 41, 935);

    fill(76, 135, 187);
    textSize(24);
    textFont("Arial");
    text(" With This Location???", 41, 961);

    fill(160, 68, 145);
    textSize(24);
    textFont("Arial");
    text(" CHOICE :", 298, 890);



    fill(190, 65, 18);
    textSize(29);
    textFont("Arial");
    text(" _____", 319, 946);



    if ((mouseX >= 461 && mouseX <= 531) && (mouseY >= 871 && mouseY <= 941)) {

      highlight_BOX[0] = 1;

    } else {

      highlight_BOX[0] = 0;

    }

    if ((mouseX >= 824 && mouseX <= 894) && (mouseY >= 871 && mouseY <= 941)) {

      highlight_BOX[1] = 1;

    } else {

      highlight_BOX[1] = 0;

    }


    if ((mouseX >= 1184 && mouseX <= 1254) && (mouseY >= 871 && mouseY <= 941)) {

      highlight_BOX[2] = 1;

    } else {

      highlight_BOX[2] = 0;

    }


    if ((mouseX >= 1547 && mouseX <= 1617) && (mouseY >= 871 && mouseY <= 941)) {

      highlight_BOX[3] = 1;

    } else {

      highlight_BOX[3] = 0;

    }



    // dividing boundary line
    fill(44, 26, 15);
    rect(429, 868, 12, 93);

    if (highlight_BOX[0] == 1) {

      // choice box # 1
      fill(162, 148, 187);
      rect(461, 871, 70, 27);

      // choice box #1 numbering text
      fill(21, 21, 21);
      textSize(21);
      textFont("Verdana");
      text("1", 488, 891);
    } else {
      // choice box # 1
      fill(91, 83, 105);
      rect(461, 871, 70, 27);

      // choice box #1 numbering text
      fill(14, 14, 14);
      textSize(21);
      textFont("Verdana");
      text("1", 488, 891);
    }

    // entry #1 Grey Background for LABELING.
    fill(55, 55, 55);
    rect(546, 872, 246, 92);

    if (highlight_BOX[1] == 1) {
      // choice box # 2
      fill(162, 148, 187);
      rect(824, 871, 70, 27);

      // choice box #2 numbering text
      fill(21, 21, 21);
      textSize(21);
      textFont("Verdana");
      text("2", 851, 891);
    } else {
      // choice box # 2
      fill(91, 83, 105);
      rect(824, 871, 70, 27);

      // choice box #2 numbering text
      fill(14, 14, 14);
      textSize(21);
      textFont("Verdana");
      text("2", 851, 891);
    }

    // entry #2 Grey Background for LABELING.
    fill(55, 55, 55);
    rect(909, 872, 246, 92);

    if (highlight_BOX[2] == 1) {
      // choice box # 3
      fill(162, 148, 187);
      rect(1184, 871, 70, 27);

      // choice box #3 numbering text
      fill(21, 21, 21);
      textSize(21);
      textFont("Verdana");
      text("3", 1211, 891);
    } else {
      // choice box # 3
      fill(91, 83, 105);
      rect(1184, 871, 70, 27);

      // choice box #3 numbering text
      fill(14, 14, 14);
      textSize(21);
      textFont("Verdana");
      text("3", 1211, 891);
    }

    // entry #3 Grey Background for LABELING.
    fill(55, 55, 55);
    rect(1267, 872, 246, 92);

    if (highlight_BOX[3] == 1) {
      // choice box # 4
      fill(162, 148, 187);
      rect(1547, 871, 70, 27);

      // choice box #4 numbering text
      fill(21, 21, 21);
      textSize(21);
      textFont("Verdana");
      text("4", 1574, 891);
    } else {
      // choice box # 4
      fill(91, 83, 105);
      rect(1547, 871, 70, 27);

      // choice box #4 numbering text
      fill(14, 14, 14);
      textSize(21);
      textFont("Verdana");
      text("4", 1574, 891);
    }

    // entry #4 Grey Background for LABELING.
    fill(55, 55, 55);
    rect(1632, 872, 246, 92);



    // Section to go about displaying
    // answer options applicative to
    // the current room at hand.

    if (in_room_currently__numb__1_to_7 == 1) {

      // answer #1 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[0][0], 553, 917);

      // answer #2 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[0][1], 916, 917);

      // answer #3 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[0][2], 1279, 917);

      // answer #4 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[0][3], 1642, 917);

    } else if (in_room_currently__numb__1_to_7 == 2) {
      // answer #1 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[1][0], 553, 917);

      // answer #2 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[1][1], 916, 917);

      // answer #3 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[1][2], 1279, 917);

      // answer #4 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[1][3], 1642, 917);


    } else if (in_room_currently__numb__1_to_7 == 3) {

      // answer #1 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[2][0], 553, 917);

      // answer #2 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[2][1], 916, 917);

      // answer #3 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[2][2], 1279, 917);

      // answer #4 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[2][3], 1642, 917);


    } else if (in_room_currently__numb__1_to_7 == 4) {

      // answer #1 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[3][0], 553, 917);

      // answer #2 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[3][1], 916, 917);

      // answer #3 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[3][2], 1279, 917);

      // answer #4 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[3][3], 1642, 917);


    } else if (in_room_currently__numb__1_to_7 == 5) {

      // answer #1 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[4][0], 553, 917);

      // answer #2 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[4][1], 916, 917);

      // answer #3 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[4][2], 1279, 917);

      // answer #4 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[4][3], 1642, 917);


    } else if (in_room_currently__numb__1_to_7 == 6) {

      // answer #1 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[5][0], 553, 917);

      // answer #2 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[5][1], 916, 917);

      // answer #3 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[5][2], 1279, 917);

      // answer #4 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[5][3], 1642, 917);


    } else if (in_room_currently__numb__1_to_7 == 7) {

      // answer #1 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[6][0], 553, 917);

      // answer #2 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[6][1], 916, 917);

      // answer #3 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[6][2], 1279, 917);

      // answer #4 option getting painted.
      fill(80, 12, 34);
      textSize(26);
      textFont("Times New Roman");
      text(label_choices_grid[6][3], 1642, 917);


    }

    // display candidate choice
    fill(120, 61, 198);
    textSize(27);
    textFont("Arial");
    text("  " + current_option_selected + " ", 349, 936);

  }


  // non-trivia concerned viewing states of final room

  if (enable_animation_final_room && !answered_one_correctly__hurray) {

    // show visualization finale!
    scale(1.58, 1.0);

    image(heavenly_img, 361, 80);

      // paint text that "We have won the GAME!!!'
    if (current_game_state == 2) {


      if (frameCount - duration_167_frames__counter > 167) {


        fill(43, 203, 20);
        textSize(24);
        textFont("Helvetica");
        text("We have won the GAME!!!", 152, 58);

        fill(102, 83, 132);
        textSize(32);
        textFont("Helvetica");
        text("Press 'Shift' BUTTON To .. 'RESTART the GAME' .", 203, 500);
        textFont("Verdana");

        duration_167_frames__counter = 0;

      }

    }

  } else if(in_last_room__initial_drawing) {

    // show final-room's initial appearance before going on to answer the last trivia question.

     image(wall_art_default, 643, 93);

     // if not all rooms '1' to '6' have already been solved!
     if( ! room_visit_met[0] ||  ! room_visit_met[1] ||  ! room_visit_met[2] ||  ! room_visit_met[3] ||  ! room_visit_met[4] ||  ! room_visit_met[5]){

       // paint cannot proceed with question 
       // in final room (over default 
       // non-ending background).
       fill(160, 25, 70);
       textSize(37);
       textFont("Times New Roman");
       text("Hold On... Can't Proceed Here JUST YET.", 600, 494);

     }
    
  }









  // CELEBRATE!!!
  //
  // :)

  if (answered_one_correctly__hurray) {


    if(two_frame_counter == 2){

      two_frames_after_answered_one_correctly__hurray = 1;

    } else {

      two_frame_counter += 1;

    }

    image(planet_celebration, 380, 300);

    
    if(runJUST_One_Time_over){

      runJUST_One_Time_over = 0;

       transmit("led_effects", 1);

       transmit("led_effects", 0);

    }

    // Cheers FOR answering a question right. Praise given via text , for the success.
    //
    // :)
    //
    fill(11, 194, 38);
    textSize(28);
    textFont("Verdana");
    text("That was the RIGHT ANSWER!!!", 766, 535);


    if (frameCount - initial_frame_marker_before_short_fan_fare > 430) {

      answered_one_correctly__hurray = 0;

      two_frame_counter = 0;

      two_frames_after_answered_one_correctly__hurray = 0;

    }

  }

  
 
  


  if ( ! answered_one_correctly__hurray && room_visit_met[6] &&  !enable_animation_final_room ) {

    if (frameCount % 7 == 0) {

      if (spriteFrame_arrow_animation % 23 == 0) {
        spriteFrame_arrow_animation = 0;
      }

      // animation for water drop  in  the game's base room.
      sx_arrow_anim = spriteFrame_arrow_animation;

      // increase to the next assigned frame marker.
      spriteFrame_arrow_animation += 1;
    }

    image(arrow_sprite_sheet, 897, 193, 130, 300, (130 * sx_arrow_anim), 0, 130, 300);

  }



  // :(
  //
  // Bad news... The answer given was not correct.
  if (gameLost) {


    // this is for restarting the game
    // from a successful game outcome.
    if (do_not_print_screen_game_lost) {

      gameLost = 0;

      // Go straight to modifying variables
      // in need of a fresh new game setting
      // state!


      in_startup_base_room = 1;

      ignore_100_frames = 0;

      ignore_100_frames__counter = 0;

      ignore_146_frames = 0;

      ignore_146_frames__counter = 0;

      drop_iterate_setup_number = 1;

      spriteFrame_waterDrop = 1;

      sx_waterDrop = 0;

      spriteFrame_arrow_animation = 0;

      sx_arrow_anim = 0;

      // 0 value means inactive, AND values
      //  1-7 correspond to being in one of
      //  the particular rooms there.
      in_room_currently__numb__1_to_7 = 0;

      we_are_in_a_special_quizing_MODE_state = 0;

      displayImageCurrent = 1;

      image01 = imgSet[displayImageCurrent];

      in_last_room__initial_drawing = 0;

      is_marker_leftArrow = 0;

      is_marker_rightArrow = 0;

      is_marker_upArrow = 1;

      initial_frame_marker_before_short_fan_fare = frameCount;

      // turn this on later to enable a short bit of 'fan-fare'!
      answered_one_correctly__hurray = 0;

      // a value of one means it is true that two frames have passed.
      two_frames_after_answered_one_correctly__hurray = 0;

      two_frame_counter = 0;

      // set this up with a dummy value.
      current_option_selected = "-";



      // // room 1 object quizing has been addressed
      // room_visit_met[0] = 0

      // // room 2 object quizing has been addressed
      // room_visit_met[1] = 0

      // // room 3 object quizing has been addressed
      // room_visit_met[2] = 0

      // // room 4 object quizing has been addressed
      // room_visit_met[3] = 0

      // // room 5 object quizing has been addressed
      // room_visit_met[4] = 0

      // // room 6 object quizing has been addressed
      // room_visit_met[5] = 0

      // // room 7 object quizing has been addressed
      // room_visit_met[6] = 0


      // set all parameters to initial false values!
      room_visit_met = [0, 0, 0, 0, 0, 0];


      // this will be the boolean flag to go ahead
      // with initiating animation for the final-room's
      // black stone wall view.
      enable_animation_final_room = 0;

      // game_State_options = ["just_started", "playing", "won_state", "lost_state"];
      current_game_state = 0;

      do_not_print_screen_game_lost = 0;

      duration_167_frames__counter = 0;

      runJUST_One_Time_over = 1;

    }

    else {
      fill(29, 38, 43);
      rect(543, 440, 777, 238);

      fill(160, 25, 70);
      textSize(36);
      textFont("Verdana");
      text("The answer given was incorrect.", 638, 535);

      fill(116, 34, 68);
      textSize(36);
      textFont("Verdana");
      textStyle(BOLD);
      text("You Have Lost the Current Session!", 576, 614);

      textStyle(NORMAL);


      if (frameCount - duration_255_frames__counter >= 255) {

        // we have waited 255 frames after losing ... in order to
        // provide a breather-/-transition-break-period!

        gameLost = 0;


        // modify variables needing a fresh restart state!


        in_startup_base_room = 1;

        ignore_100_frames = 0;

        ignore_100_frames__counter = 0;

        ignore_146_frames = 0;

        ignore_146_frames__counter = 0;

        drop_iterate_setup_number = 1;

        spriteFrame_waterDrop = 1;

        sx_waterDrop = 0;

        spriteFrame_arrow_animation = 0;

        sx_arrow_anim = 0;

        // 0 value means inactive, AND values
        //  1-7 correspond to being in one of
        //  the particular rooms there.
        in_room_currently__numb__1_to_7 = 0;

        we_are_in_a_special_quizing_MODE_state = 0;

        displayImageCurrent = 1;

        image01 = imgSet[displayImageCurrent];

        in_last_room__initial_drawing = 0;

        is_marker_leftArrow = 0;

        is_marker_rightArrow = 0;

        is_marker_upArrow = 1;

        initial_frame_marker_before_short_fan_fare = frameCount;

        // turn this on later to enable a short bit of 'fan-fare'!
        answered_one_correctly__hurray = 0;

        // a value of one means it is true that two frames have passed.
        two_frames_after_answered_one_correctly__hurray = 0;

        two_frame_counter = 0;

        // set this up with a dummy value.
        current_option_selected = "-";



        // // room 1 object quizing has been addressed
        // room_visit_met[0] = 0

        // // room 2 object quizing has been addressed
        // room_visit_met[1] = 0

        // // room 3 object quizing has been addressed
        // room_visit_met[2] = 0

        // // room 4 object quizing has been addressed
        // room_visit_met[3] = 0

        // // room 5 object quizing has been addressed
        // room_visit_met[4] = 0

        // // room 6 object quizing has been addressed
        // room_visit_met[5] = 0

        // // room 7 object quizing has been addressed
        // room_visit_met[6] = 0


        // set all parameters to initial false values!
        room_visit_met = [0, 0, 0, 0, 0, 0];


        // this will be the boolean flag to go ahead
        // with initiating animation for the final-room's
        // black stone wall view.
        enable_animation_final_room = 0;

        // game_State_options = ["just_started", "playing", "won_state", "lost_state"];
        current_game_state = 0;

        // the default is to print game lost screen.
        do_not_print_screen_game_lost = 0;

        duration_167_frames__counter = 0;

        runJUST_One_Time_over = 1;
      }
    }
  }



}


  // Read data from the serial port

  function serialEvent() {

    button_pressed = 0;

    // // analogue input 'a1' holds the -button/switch-'s input value.
    // if (pastSensorData != null) {

    // }

    // else {

    //    sensorData = {};
    //    pastSensorData = {};

    // }
    
    
    inData = serial.readStringUntil(";\n"); 


    // console.log(inData);

    let e1 = inData.split(':');
    
    if(e1[0] === "a1"){
      
      // check if button is in the 'on' state..

      if(e1[1] == 1){

        button_pressed = 1;

      } else {
        
        button_pressed = 0;

      }


    }



     // check if we are in a solving room situation asking for a response...

  if (in_room_currently__numb__1_to_7 == 1 || in_room_currently__numb__1_to_7 == 2 || in_room_currently__numb__1_to_7 == 3 ||

    in_room_currently__numb__1_to_7 == 4 || in_room_currently__numb__1_to_7 == 5 || in_room_currently__numb__1_to_7 == 6 ||

    in_room_currently__numb__1_to_7 == 7) {

    if (current_option_selected >= 1 && current_option_selected <= 4) {

      if (button_pressed) {

        // check if the answer is right.

        if (in_room_currently__numb__1_to_7 == 1) {
          // note: the current_option_selected var
          // starts at a value of 1 for the first answer option.
          if (answerList[0] == current_option_selected - 1) {
            // proceed on.
            //
            // mark this room as solved.
            room_visit_met[0] = 1;


            answered_one_correctly__hurray = 1;

            runJUST_One_Time_over = 1;


            rightAnswerMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_2 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_2.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });


            initial_frame_marker_before_short_fan_fare = frameCount;

          } else {
            gameLost = 1;
            // game over.

            duration_255_frames__counter = frameCount;

            // sasnc .. later print a game failed screen.

            current_game_state = 3;


            lostMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_1 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_1.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });


          }
        } else if (in_room_currently__numb__1_to_7 == 2) {

          // note: the current_option_selected var
          // starts at a value of 1 for the first answer option.
          if (answerList[1] == current_option_selected - 1) {
            // proceed on.
            //
            // mark this room as solved.
            room_visit_met[1] = 1;       
            

            answered_one_correctly__hurray = 1;

            runJUST_One_Time_over = 1;


            rightAnswerMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_2 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_2.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });

            
            initial_frame_marker_before_short_fan_fare = frameCount;
     
          } else {
            gameLost = 1;
            // game over.

            duration_255_frames__counter = frameCount;

            // sasnc .. later print a game failed screen.
            
            current_game_state = 3;

            lostMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_1 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_1.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });


          }

        } else if (in_room_currently__numb__1_to_7 == 3) {

          // note: the current_option_selected var
          // starts at a value of 1 for the first answer option.
          if (answerList[2] == current_option_selected - 1) {
            // proceed on.
            //
            // mark this room as solved.
            room_visit_met[2] = 1;       
            

            answered_one_correctly__hurray = 1;

            runJUST_One_Time_over = 1;


            rightAnswerMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_2 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_2.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });

            
            initial_frame_marker_before_short_fan_fare = frameCount;
     
          } else {
            gameLost = 1;
            // game over.

            duration_255_frames__counter = frameCount;

            // sasnc .. later print a game failed screen.

            current_game_state = 3;

            lostMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_1 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_1.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });


          }

        } else if (in_room_currently__numb__1_to_7 == 4) {

          // note: the current_option_selected var
          // starts at a value of 1 for the first answer option.
          if (answerList[3] == current_option_selected - 1) {
            // proceed on.
            //
            // mark this room as solved.
            

            answered_one_correctly__hurray = 1;

            runJUST_One_Time_over = 1;


            rightAnswerMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_2 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_2.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });

            
            initial_frame_marker_before_short_fan_fare = frameCount;

            room_visit_met[3] = 1;            
          } else {
            gameLost = 1;
            // game over.

            duration_255_frames__counter = frameCount;

            // sasnc .. later print a game failed screen.

            current_game_state = 3;

            lostMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_1 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_1.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });


          }

        } else if (in_room_currently__numb__1_to_7 == 5) {

          // note: the current_option_selected var
          // starts at a value of 1 for the first answer option.
          if (answerList[4] == current_option_selected - 1) {
            // proceed on.
            //
            // mark this room as solved.
            

            answered_one_correctly__hurray = 1;

            runJUST_One_Time_over = 1;


            rightAnswerMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_2 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_2.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });

            
            initial_frame_marker_before_short_fan_fare = frameCount;

            room_visit_met[4] = 1;            
          } else {
            gameLost = 1;
            // game over.

            duration_255_frames__counter = frameCount;

            // sasnc .. later print a game failed screen.

            current_game_state = 3;

            lostMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_1 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_1.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });



          }

        } else if (in_room_currently__numb__1_to_7 == 6) {

          // note: the current_option_selected var
          // starts at a value of 1 for the first answer option.
          if (answerList[5] == current_option_selected - 1) {
            // proceed on.
            //
            // mark this room as solved.
            

            answered_one_correctly__hurray = 1;

            runJUST_One_Time_over = 1;

            rightAnswerMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_2 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_2.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });

            
            initial_frame_marker_before_short_fan_fare = frameCount;

            room_visit_met[5] = 1;            
          } else {
            gameLost = 1;
            // game over.

            duration_255_frames__counter = frameCount;

            // sasnc .. later print a game failed screen.

            current_game_state = 3;

            lostMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_1 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_1.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });


          }

        } else if (in_room_currently__numb__1_to_7 == 7) {

          // note: the current_option_selected var
          // starts at a value of 1 for the first answer option.
          if (answerList[6] == current_option_selected - 1) {

            // mark this room as solved.
            room_visit_met[6] = 1;
            

            answered_one_correctly__hurray = 1;

            runJUST_One_Time_over = 1;

            rightAnswerMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_2 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_2.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });

            
            initial_frame_marker_before_short_fan_fare = frameCount;

          } else {
            gameLost = 1;
            // game over.

            duration_255_frames__counter = frameCount;

            // sasnc .. later print a game failed screen.
            
            current_game_state = 3;


            lostMidi.then(function (jsonFormatMidiObj) {

              now1 = Tone.now() + 0.5;
              jsonFormatMidiObj.tracks.forEach((track) => {
                //create a synth for each track
                synththreeFOUR_1 = new Tone.PolySynth(Tone.FMSynth, {
                  envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                  },
                }).toDestination();
      
                //synths_set.push(synththreeFOUR);
      
                //schedule all of the events
                track.notes.forEach((note) => {
                  synththreeFOUR_1.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now1,
                    note.velocity
                  );
                });
              });
            });


          }

        }

        // set back to a normal value now.
        in_room_currently__numb__1_to_7 = 0;

        // mark that we are no longer in a quizing mode state.
        we_are_in_a_special_quizing_MODE_state = 0;



      } else {
        // do nothing
      }
    } else {
      // [no option to go with ...]
      
      // do nothing and just continue
      // waiting for a valid input entry.

    }

  }

    
    // pastSensorData = sensorData;

    
  }




  // ********* LSU DDEM Transmit to Arduino

  function transmit(name,value) {
    outData = name + ":" + value +','; 
    // console.log("Writing to Serial Port: " + this.outData);
    serial.write(outData); 
  }



  // get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + portList[i]);
  }
}


  // Error Logging

  function gotError(theerror) {
    console.log('Error in PDM Serial:' + theerror);
  }
