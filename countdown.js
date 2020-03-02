//declarations

const startButton = document.querySelector(".start__button");

//functions

const showCountdown = () => {
  const event = document.querySelector(".input__event");
  const output = document.querySelector(".output");
  const dateTime = document.querySelector(".input__datetime");
  const headlineOutput = document.querySelector(".headline__output");
  const dateTimeGetTime = new Date(dateTime.value).getTime();
  const currentDate = new Date().getTime();
  const timer = dateTimeGetTime - currentDate;

  if (timer >= 0) {
    let days = Math.floor(timer / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((timer % (1000 * 60)) / 1000);

    const outputText =
      days +
      "day(s) : " +
      ("0" + hours).slice(-2) +
      "hour(s) : " +
      ("0" + mins).slice(-2) +
      "minute(s) : " +
      ("0" + secs).slice(-2) +
      "second(s)";

    return (
      (output.innerText = outputText),
      (headlineOutput.innerText = `${event.value} takes place in:`)
    );
  } else {
    return (
      (output.innerText = "The countdown is over!"),
      (headlineOutput.innerText = `${event.value} took place!`)
    );
  }
};

startButton.addEventListener("click", function() {
  setInterval(showCountdown, 1000);
});
