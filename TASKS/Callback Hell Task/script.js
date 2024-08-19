// Define a function to display the countdown
const displayCountdown = (count, callback) => {
  if (count > 0) {
    document.getElementById("content").textContent = count;
    setTimeout(() => {
      displayCountdown(count - 1, callback);
    }, 1000); // Wait for 1 second
  } else {
    callback(); // Call the callback when countdown is done
  }
};

// Display the countdown from 10 to 1
displayCountdown(10, () => {
  // After countdown, display "Happy Independence Day"
  document.getElementById("content").textContent = "Happy Independence Day";
});
