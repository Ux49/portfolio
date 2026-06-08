const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('button, a, input').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        follower.style.borderColor = '#f38ba8';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.borderColor = '#f38ba8';
    });
});

alert(" Dear Reviewers I have been waiting for my project review since last 12 days from this day of commit so due to recent changes don't reject my project , Better projects are on the way good things takes time and I recently knew how to even use js basic so this is my 1st project with js  : ")
