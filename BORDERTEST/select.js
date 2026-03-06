const scriptSelect = document.getElementById('script-select');
const applyScriptBtn = document.getElementById('apply-script-btn');

applyScriptBtn.addEventListener('click', () => {
  const selectedScript = scriptSelect.value;
  const scriptTag = document.querySelector('script[src="proRight.js"]');
  if (scriptTag) {
    scriptTag.src = selectedScript;
  } else {
    const newScriptTag = document.createElement('script');
    newScriptTag.src = selectedScript;
    document.body.appendChild(newScriptTag);
  }
});