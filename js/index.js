document.querySelectorAll(".cv-skill-line-indicator").forEach(el => {
   let isDown = false;
   el.addEventListener('mousedown', () => isDown = true);
   el.addEventListener('mouseup', () => isDown = false)
   el.addEventListener('mousemove', move)
   function move(e) {
      if (!isDown) {
         return false;
      }
      console.log(e)

      el.style.left = e.offsetX + "px";
   }
})