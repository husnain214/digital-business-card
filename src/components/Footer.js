import React from "react"
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import github from "../images/github.svg"

export default function Footer () {
    return (
        <footer>
            <img class="fbtn" src={twitter} width="25px" height="25px" alt="twitter" />
            <img class="fbtn" src={facebook} width="25px" height="25px" alt="facebook" />
            <img class="fbtn" src={instagram} width="25px" height="25px" alt="instagram" />
            <img src={github} width="25px" height="25px" alt="github" />
        </footer>
    )
}