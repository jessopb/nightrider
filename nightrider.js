const NR_scanner_color_center = "#FF0000";
const NR_interval_speed = 30; //lower is faster

let NR_el = document.querySelector(".nightrider");
let NR_base_string = NR_el.textContent;

//insert string values
let tempstring = ""
let NR_style_tag_center = `<div style="color: ${NR_scanner_color_center}; display: inline;">`
let NR_style_end_tag = "</div>"

//end positions
let NR_end = NR_base_string.length - 1;
let NR_start = 0;

let NR_state = {
  phase: "right",
  position: 0,
  wait: 50
}

let NR_update = function(){
  if(NR_state.phase === "right")
  {
    if (NR_state.position === NR_end)
    {
      tempstring =
         NR_base_string.substr(NR_start, NR_state.position) +
         NR_style_tag_center +
         NR_base_string[NR_state.position] +
         NR_style_end_tag
      document.querySelector(".nightrider").innerHTML = tempstring;

      NR_state.phase = "left";
    }
    else {
         tempstring =
            NR_base_string.substr(NR_start, NR_state.position) +
            NR_style_tag_center +
            NR_base_string[NR_state.position] +
            NR_style_end_tag +
            NR_base_string.substr(NR_state.position + 1)

          console.log(tempstring)
            document.querySelector(".nightrider").innerHTML = tempstring;
      NR_state.position++
    }
  }
  if(NR_state.phase === "left"){
    if (NR_state.position === 0){
      tempstring =
        NR_style_tag_center +
        NR_base_string[NR_state.position] +
        NR_style_end_tag +
         NR_base_string.substr(NR_start + 1)

      document.querySelector(".nightrider").innerHTML = tempstring;
      NR_state.phase = "wait"
    }
    else {
      tempstring =
         NR_base_string.substr(NR_start, NR_state.position) +
         NR_style_tag_center +
         NR_base_string[NR_state.position] +
         NR_style_end_tag +
         NR_base_string.substr(NR_state.position + 1)

       console.log(tempstring)
         document.querySelector(".nightrider").innerHTML = tempstring;
         NR_state.position--
    }
  }
  if(NR_state.phase === "wait"){
    if(NR_state.wait > 0){
      document.querySelector(".nightrider").innerHTML = NR_base_string
      NR_state.wait--
    }
    else{
      NR_state.wait = 50
      NR_state.phase = "right"
    }
  }
}

setInterval("NR_update()",NR_interval_speed);
