function preload() {
}

function setup() {
    canvas = createCanvas(640, 500);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw() {
    circle_color = document.getElementById("circle_color").value;
    rect_color = document.getElementById("rect_color").value;
    ell_color = document.getElementById("ell_color").value;
    tri_color = document.getElementById("tri_color").value;
    image(video, 150, 100, 320, 240);
    fill(rect_color);
    rect(60, 30, 500, 40);
    rect(30, 70, 40, 400);
    rect(60, 425, 500, 40);
    rect(570, 70, 40, 400)
    fill(ell_color)
    ellipse(310, 50, 170, 70);
    ellipse(310, 50, 0, 70);
    ellipse(310, 50, 170, 0);
    ellipse(310, 450, 170, 70);
    ellipse(310, 450, 0, 70);
    ellipse(310, 450, 170, 0);
    fill(circle_color);
    circle(590, 50, 100);
    circle(50, 50, 100);
    circle(50, 450, 100);
    circle(590, 450, 100);
    fill(tri_color);
    triangle(0, 275, 48, 170, 96, 275);
    triangle(544, 275, 590, 170, 640, 275);
}

function take_snapshot() {
    save('picture.png');
}
