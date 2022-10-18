

/*ReactDOM.render(<p>Philip Oyedoyin</p>, document.getElementById("welcome"));

function Navbar() {
    return (
        <div>
        <p>Hello, My name is Philip</p>
        <ol>
            <li>I Am a boy</li>
            <li>Currently, I am learning React</li>
        </ol>
        </div>
    )
}

ReactDOM.render(
    <div><Navbar /></div>, document.querySelector("#root")
);

const h1 = document.createElement("h1");
h1.textContent = "Hello! Hope you understand that my name is philip and I am a cool guy.";
h1.className = "moreContent";

document.getElementById("moreContent").append(h1);

function Navigation() {
    return(
        <nav>
            <h1>SomaSuper Store</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

//you can also write the function by declaring it as const.When you declare it as such, you render it directly.

ReactDOM.render(<Navigation />, document.querySelector("#nav"));

const useAppend = (
<div>
    <h1>Render With Append</h1>
    <p>This tries to render our page with the .append method</p>
</div>
)

ReactDOM.render(useAppend, document.querySelector("#testAppend"));*/

import React from 'react';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';



function LoveHead() {
return (
    <header>
        <nav>
        <img src=".\images\react-logo.png" width="40px" />
        <ul style={styles.navContent}>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
        </header>
)
}

function LoveBody() {
    return (
        <>
        <h1>This Is Why I Love React</h1>
        <ol>
            <li>Its easier than JavaScript (I believe)</li>
            <li>Its popular</li>
            <li>There is a market for it</li>
            <li>Its challenging</li>
        </ol>
        </>
    )
}

function LoveFoot() {
    return (
        <footer>
            <small>C 2022 Oyedoyin. All rights reserved.</small>
        </footer>
    )
}

function LoveReact() {
    return (
        <>
        <LoveHead />
        <LoveBody />
        <LoveFoot />
        </>
    )
}

ReactDOM.render(<LoveReact />, document.querySelector("#more"))

//to style your React app, you need to create a style module as shown below:

const styles = StyleSheet.create({
    navContent: {
        color:"red"
    }
})

