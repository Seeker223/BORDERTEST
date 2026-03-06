To add a button that allows users to choose from different scripts, you can add a dropdown menu or a button group with options. Here's an example of how you can do it:

```

```

Then, you can add an event listener to the "Apply Script" button to change the script:

```
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
```

This code will change the `src` attribute of the script tag with the `proRight.js` script to the selected script. If the script tag does not exist, it will create a new one with the selected script.

Note that this code assumes that the script tags are in the same directory as the HTML file. If the script files are in a different directory, you will need to update the `src` attribute accordingly.

Also, keep in mind that this code will only change the script tag in the HTML file. If you want to dynamically load and execute the selected script, you will need to use a more complex approach, such as using the `fetch` API to load the script and then executing it using the `eval` function or a library like RequireJS.