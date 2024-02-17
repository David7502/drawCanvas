const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect(); //gives dimension and position of the canvas.
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function mouseMove(e) {
  const mousePos = getMousePos(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = 8;
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault(); //avoid any default behavior like drag and drop
  const mousePos = getMousePos(e);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
