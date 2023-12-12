import $ from "jquery";
import "./css/index.css";

$(
    function(){
        $("ul>li:nth-child(odd)").css("background-color","red");
        $("ul>li:nth-child(even)").css("background-color","yellow").css("font-size","24px");
    }
);