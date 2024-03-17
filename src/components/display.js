import './display.css';


function Display(props) {
    let country = props.Country;    
    let linksrc = "https://maps.google.com/maps?q=" + country + "&t=&z=10&ie=UTF8&iwloc=&output=embed"
         // link for google map with particular country concatenated to the link
    return (<div class="display">
        <iframe height="100%" width="100%" id="gmap" src={linksrc} ></iframe>
               {/* iframe for displaying live map from another source */}

    </div>)
}
export default Display;