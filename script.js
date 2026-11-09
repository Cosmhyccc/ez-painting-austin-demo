document.querySelectorAll('.swatch').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.swatch').forEach((swatch) => {
      const selected = swatch === button;
      swatch.classList.toggle('selected', selected);
      swatch.setAttribute('aria-pressed', String(selected));
    });
    document.querySelector('.paint-wall').setAttribute('fill', button.dataset.color);
    document.getElementById('color-name').textContent = button.dataset.name;
    document.getElementById('room-desc').textContent = `An illustrated living room with a ${button.dataset.name.toLowerCase()} wall, cream sofa, oak table, plant, and arched window. Choose a swatch below to change the wall color.`;
  });
});
