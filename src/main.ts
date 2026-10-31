const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A smiling face with gradient cheeks.");

const defs = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "defs",
);

const gradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);

gradient.setAttribute("id", "cheek-shade");
gradient.setAttribute("x1", "0%");
gradient.setAttribute("y1", "0%");
gradient.setAttribute("x2", "100%");
gradient.setAttribute("y2", "0%");

const color1 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
color1.setAttribute("offset", "0%");
color1.setAttribute("stop-color", "#f5c6a5");

const color2 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
color2.setAttribute("offset", "100%");
color2.setAttribute("stop-color", "#bd5377");

gradient.append(color1, color2);
defs.append(gradient);
face.append(defs);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftCheek = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);

leftCheek.setAttribute("cx", "65");
leftCheek.setAttribute("cy", "115");
leftCheek.setAttribute("rx", "15");
leftCheek.setAttribute("ry", "9");
leftCheek.setAttribute("fill", "url(#cheek-shade)");

face.append(leftCheek);

const rightCheek = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);

rightCheek.setAttribute("cx", "135");
rightCheek.setAttribute("cy", "115");
rightCheek.setAttribute("rx", "15");
rightCheek.setAttribute("ry", "9");
rightCheek.setAttribute("fill", "url(#cheek-shade)");

face.append(rightCheek);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
mouth.setAttribute("d", "M 70 130 Q 100 155 130 130");
mouth.setAttribute("fill", "none");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
