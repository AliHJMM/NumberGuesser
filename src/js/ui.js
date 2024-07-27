// Update the displayed message
export const displayMsg = function (msg) {
  // Select the element with the class 'status-msg' and set its text content to the provided message
  document.querySelector('.status-msg').textContent = msg;
};
