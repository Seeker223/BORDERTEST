// Function to render skeletal loading
function renderSkeletalLoading() {
  const html = `
    <div class="skeletal-loading">
      ${Array(10).fill().map(() => `
        <div class="skeletal-loading-item">
          <div class="skeletal-loading-image">a</div>
          <div class="skeletal-loading-emoji">a</div>
        </div>
      `).join('')}
    </div>
  `;
  rightContainer.innerHTML = html;
}

// Render skeletal loading by default
renderSkeletalLoading();

// Call the filterContent function with 'status' category when the page loads
window.onload = function() {
  filterContent('status');
};