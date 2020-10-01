const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");
const number = document.querySelectorAll(".clock-wrapper .number");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
const year = document.querySelector(".year");
const backgroundImage = document.querySelector(".container");
const clock = document.querySelector(".clock-wrapper");
const imageCanvas = document.querySelector(".background-img");
const ticks = document.querySelectorAll(".tick");

const clockInstance = new Clock();
window.onload = clockInstance.start();
