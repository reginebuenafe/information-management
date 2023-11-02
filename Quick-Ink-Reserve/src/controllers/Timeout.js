function Timeout({ time }) {
  setTimeout(() => {
    window.location.reload();
  }, time);
}

export default Timeout;
