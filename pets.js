// Initialize Bug Effect
document.addEventListener('DOMContentLoaded', function () {
  console.log('Initializing BugController...');
  if (typeof BugController === 'function') {
    new BugController({
      minBugs: 10,
      maxBugs: 20,
      mouseOver: 'flyAway', // Bugs fly away when hovered
    });
    console.log('BugController initialized successfully!');
  } else {
    console.error('BugController is not defined. Ensure bug-min.js is loaded correctly.');
  }
});
